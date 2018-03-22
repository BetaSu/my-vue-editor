import RH from '../range-handler'
import './style/main.styl'
import template from './editor.html'
import dragPic from './drag-pic'
import Inspector from '../module-inspect'

export default {
  template,
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    },
    height: {
      type: Number,
      default: 300,
      validator(val){
        return val >= 100
      }
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    autoHeight: {
      type: Boolean,
      default: true
    }
  },
  directives: {
    dragPic
  },
  data(){
    return {
      modules: {},
      activeModules: [],
      allActiveModules: [],
      fullScreen: false
    }
  },
  watch: {
    content(val) {
      const content = this.$refs.content.innerHTML
      if (val !== content) {
        this.$refs.content.innerHTML = val
      }
    },
    fullScreen(val){
      const component = this
      if (val) {
        component.parentEl = component.$el.parentNode
        component.nextEl = component.$el.nextSibling
        document.body.appendChild(component.$el)
        return
      }
      if (component.nextEl) {
        component.parentEl.insertBefore(component.$el, component.nextEl)
        return
      }
      component.parentEl.appendChild(component.$el)
    }
  },
  computed: {
    contentStyle(){
      const style = {}
      if (this.fullScreen) {
        style.height = `${window.innerHeight - this.$refs.toolbar.clientHeight - 1}px`
        return style
      }
      if (!this.autoHeight) {
        style.height = `${this.height}px`
        return style
      }
      style['min-height'] = `${this.height}px`
      return style
    }
  },
  methods: {
    getCurActiveModuleItem () {
      return Inspector.activeItems
    },
    clearActiveModuleItem () {
      Inspector.activeItems = {}
    },
    handleDragPic (file) {
      if ((this.modulesMap['image'] && this.modulesMap['image'].drag !== false) || !this.modulesMap['image']) {
        this.saveCurrentRange()
        this.execCommand('insertImage', file)
      }
    },
    toggleFullScreen(){
      this.fullScreen = !this.fullScreen
    },
    enableFullScreen(){
      this.fullScreen = true
    },
    exitFullScreen(){
      this.fullScreen = false
    },
    focus(){
      this.$refs.content.focus()
    },
    blur(){
      this.$refs.content.blur()
    },
    execCommand(command, arg, execOnly){
      if (!execOnly) {
        this.restoreSelection()
      }
      if (this.range) {
        new RH(this.range, this).execCommand(command, arg)
      }
      this.$emit('change', this.$refs.content.innerHTML)
    },
    saveCurrentRange(){
      const selection = window.getSelection ? window.getSelection() : document.getSelection()
      const content = this.$refs.content
      if (!selection.rangeCount || !content) {
        return
      }
      for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(0)
        let start = range.startContainer
        let end = range.endContainer
        // for IE11 : node.contains(textNode) always return false
        start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start
        end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end
        if (content.contains(start) && content.contains(end)) {
          this.range = range
          break
        }
      }
    },
    restoreSelection(){
      const selection = window.getSelection ? window.getSelection() : document.getSelection()
      selection.removeAllRanges()
      if (this.range) {
        selection.addRange(this.range)
      } else {
        const content = this.$refs.content
        const row = RH.prototype.newRow({br: true})
        const range = document.createRange()
        content.appendChild(row)
        range.setStart(row, 0)
        range.setEnd(row, 0)
        selection.addRange(range)
        this.range = range
      }
    },
    activeModule(module){
      if (module.forbidden) return
      if (typeof module.handler === 'function') {
        module.handler(new RH(this.range, this), module)
        this.$nextTick(() => {
          this.saveCurrentRange()
          this.moduleInspect()
        })
        return
      }
    },
    moduleInspect () {
      if (this.range) {
        this.clearActiveModuleItem()
        this.activeModules = []
        this.allActiveModules = []
        let rh = new RH(this.range, this)
        let texts = rh.getAllTextNodesInRange()
        if (texts.length === 0 && this.range.collapsed) {
          texts.push(this.range.commonAncestorContainer)
        }
        // texts duplicate removal
        let textAftetDR = []
        texts.forEach(text => {
          if (text.nodeType === Node.TEXT_NODE && text.parentNode !== rh.editZone()) {
            text = text.parentNode
          }
          if (!textAftetDR.includes(text)) {
            textAftetDR.push(text)
          }
        })

        let tagResult = Inspector.run('tag', textAftetDR)
        let tagResultRD = Inspector.removeDuplate(tagResult)

        let styleResult = Inspector.run('style', textAftetDR)
        let styleResultRD = Inspector.removeDuplate(styleResult)

        let attributeResult = Inspector.run('attribute', textAftetDR)
        let attributeResultRD = Inspector.removeDuplate(attributeResult)

        this.allActiveModules = tagResult.concat(styleResult, attributeResult)
        this.activeModules = Array.from(new Set(tagResultRD.concat(styleResultRD, attributeResultRD)))

        // reset
        this.modules.forEach(module => {
          module.forbidden = false
          module.moduleInspectResult = false
        })

        // handle forbidden logic
        if (this.allActiveModules.length) {
          let excludeList = []
          this.allActiveModules.forEach(m => {
            if (Array.isArray(m)) {
              m.forEach(moduleName => {
                let curModule = this.modulesMap[moduleName]
                excludeList = excludeList.concat(curModule.exclude)
              })
            }
          })
          excludeList = Array.from(new Set(excludeList))
          excludeList.forEach(exc => {
            let excModule = this.modulesMap[exc]
            if (excModule && excModule.type !== 'fn') {
              excModule.forbidden = true
            }
          })
        }

        // handle highlight logic
        if (this.activeModules.length) {
          this.modules.forEach(module => {
            module.moduleInspectResult = false
            let moduleName = module.name
            if (this.activeModules.includes(moduleName)) {
              module.moduleInspectResult = true
              let curModuleActiveItem = this.getCurActiveModuleItem()[moduleName]
              if (typeof curModuleActiveItem === 'string') {
                module.moduleInspectResult = curModuleActiveItem || 'ALL'
              }
            }
          })
        }
      }
    }
  },
  created(){
    this.modules.forEach((module) => {
      if (typeof module.init === 'function') {
        module.init(this)
      }
    })
  },
  mounted(){
    const content = this.$refs.content
    const toolbar = this.$refs.toolbar
    content.innerHTML = this.content
    // add eventListener at document to handle selection
    document.addEventListener('mouseup', e => {
      this.saveCurrentRange()
      this.moduleInspect()
    }, false)
    // toolbar.addEventListener('mousedown', this.saveCurrentRange, false)
    content.addEventListener('keyup', e => {
      this.$emit('change', content.innerHTML)
      this.saveCurrentRange()
      this.moduleInspect()
    }, false)
    content.addEventListener('mouseout', e => {
      this.saveCurrentRange()
    }, false)
    content.addEventListener('paste', e => {
      this.execCommand('paste', e, true)
      let common = this.range.commonAncestorContainer
      if (common) {
        if (common.nodeType === Node.TEXT_NODE) {
          common = common.parentNode
        }
        if (common.scrollIntoView) {
          common.scrollIntoView(false)
        }
      }
    })
    this.touchHandler = (e) => {
      if (content.contains(e.target)) {
        this.saveCurrentRange()
        this.moduleInspect()
      }
    }
    window.addEventListener('touchend', this.touchHandler, false)

    // before exec command
    // let text be a row
    RH.prototype.before((command,  rh, arg) => {
      let node = rh.range.commonAncestorContainer
      // handle editor with no content
      if (rh.isEmptyNode(node) && node === rh.editZone()) {
        let firstChild = node.firstElementChild
        if (firstChild && firstChild.nodeName === 'BR') {
          node.removeChild(firstChild)
        }
        let newRow = rh.newRow({br: true})
        node.appendChild(newRow)
        rh.getSelection().collapse(newRow, 1)
        return
      }
      let texts = rh.getAllTextNodesInRange()
      texts.forEach(text => {
        if (!rh.isEmptyNode(text)) {
          rh.textToRow(text)
        }
      })
      if (texts.length) {
        rh.editor.saveCurrentRange()
      }
    })

    // handle shortcut
    content.addEventListener('keydown', e => {
      this.execCommand('keydown', e, true)
      let item = this.shortcut[e.keyCode]
      if (item && item.length) {
        item.forEach(s => {
          if (e.keyCode === s.keyCode && e.altKey === !!s.altKey && e.ctrlKey === !!s.ctrlKey && e.metaKey === !!s.metaKey && e.shiftKey === !!s.shiftKey) {
            if (typeof s.handler === 'function') {
              this.saveCurrentRange()
              s.handler(this, e)
            }
          }
        })
      }
    }, false)

    this.$nextTick(() => {
      this.modules.forEach((module) => {
        if (typeof module.mounted === 'function') {
          module.mounted(this)
        }
      })
    })
  },
  updated(){
    this.modules.forEach((module) => {
      if (typeof module.updated === 'function') {
        module.updated(this)
      }
    })
  },
  beforeDestroy(){
    window.removeEventListener('touchend', this.touchHandler)
    this.modules.forEach((module) => {
      if (typeof module.destroyed === 'function') {
        module.destroyed(this)
      }
    })
  }
}
