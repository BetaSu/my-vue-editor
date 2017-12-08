import polyfill from './util/polyfill-ie'
import buildInModules from './modules/index'
import buildInShortcut from './shortcut'
import constantConfig from './constant-config'
import editor from './editor/editor'
import buildInCommands from './commands'
import initExcludeRule from './module-inspect/load-module-inspect-exclude-rules'
import Inspector from './module-inspect'
import i18nZhCn from './i18n/zh-cn'
import i18nEnUs from './i18n/en-us'
import {
  mixin,
  isObj
} from './util'

polyfill()

class Editor {

  constructor(options = {}) {
    let modules = [...buildInModules]
    let reservedNames = {}
    modules.forEach(m => {
      if (m.name) {
        reservedNames[m.name] = true
      }
    })
    const components = {}
    const modulesMap = {}

    // extended modules
    if (Array.isArray(options.extendModules)) {
      options.extendModules.forEach(module => {
        if (module.name && !reservedNames[module.name]) {
          modules.push(module)
        } else {
          throw new Error('extended module must have a name and should not be the same as buildIn module')
        }
      })
    }

    // modules in use
    if (Array.isArray(options.modules)) {
      let m = []
      options.modules.forEach(name => {
        if (typeof name !== 'string') {
          throw new Error('modules\'s item must be string')
        }
        modules.forEach(module => {
          if (module.name === name) {
            m.push(module)
          }
        })
      })
      modules = m
    }

    modules.forEach(module => {
      // config
      let curConfig = options[module.name]
      let moduleConfig = module
      if (isObj(curConfig) && isObj(moduleConfig)) {
        Object.assign(moduleConfig, curConfig)
      }

      module.moduleInspectResult = null
      module.forbidden = null
      if (typeof module.inspect === 'function') {
        let inspector = new Inspector(module.name)
        module.inspect(inspector.add.bind(inspector))
      } else {
        module.type = 'fn'
      }
      module.exclude = initExcludeRule(module, modules)

      if (module.tab) {
        module.tab.module = module

        // add activeItem prop
        module.tab.props = module.tab.props ? Object.assign(module.tab.props, {activeItem: [String, Boolean], forbidden: Boolean}) : {activeItem: [String, Boolean], forbidden: Boolean}
        module.tabName = `tab-${module.name}`
        components[module.tabName] = module.tab
      }
      if (options.icons && options.icons[module.name]) {
        module.icon = options.icons[module.name]
      }
      module.hasTab = !!module.tab

      // prevent vue sync
      delete module.tab

      modulesMap[module.name] = module
    })

    // i18n
    const i18n = {'zh-cn': i18nZhCn, 'en-us': i18nEnUs}
    const customI18n = options.i18n || {}
    Object.keys(customI18n).forEach((key) => {
      i18n[key] = i18n[key] ? Object.assign(i18n[key], customI18n[key]) : customI18n[key]
    })
    const language = options.language || 'en-us'
    const locale = i18n[language]

    // shortcut
    options.shortcut = Object.assign(buildInShortcut, options.shortcut || {})
    const shortcut = {}
    Object.keys(options.shortcut).forEach(key => {
      let item = options.shortcut[key]
      let keyCode = item.keyCode
      shortcut[keyCode] = shortcut[keyCode] || []
      shortcut[keyCode].push(item)
      item.name = key
    })

    // merge commands
    if (isObj(options.commands)) {
      Object.assign(buildInCommands, options.commands)
    }

    // spellcheck
    const spellcheck = options.spellcheck || false

    const compo = mixin(editor, {
      data () {
        return {modules, locale, shortcut, modulesMap, spellcheck, constantConfig}
      },
      components
    })
    Object.assign(this, compo)
  }

  /**
   * global install
   * @param Vue
   * @param options
   */
  static install(Vue, options = {}) {
    Vue.component(options.name || 'my-vue-editor', new Editor(options))
  }
}

export default Editor

// to change Babel6 export's result
module.exports = Editor

