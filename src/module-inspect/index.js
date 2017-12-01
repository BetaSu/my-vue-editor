import { isObj } from '../util'
import RH from '../range-handler'
/*
 * Inspect and highlight module
 **/
class Inspector {
  constructor (moduleName) {
    this.moduleName = moduleName
  }

  add (type, param) {
    let moduleName = this.moduleName
    if (typeof moduleName !== 'string') {
      throw new Error('moduleName must be string')
    }
    switch (type) {
      case 'tag':
        if (typeof param !== 'string') {
          throw new Error('inspector for tag can only receive a string param which stand for tag name')
        }
        Inspector.tagMap[param.toUpperCase()] = moduleName
        break
      case 'style':
        if (!isObj(param)) {
          throw new Error('inspector for style can only receive a object param')
        }
        Inspector.styles[moduleName] = param
        break
      case 'attribute':
        if (!isObj(param)) {
          throw new Error('inspector for attribute can only receive a object param')
        }
        Inspector.attributes[moduleName] = param
        break
      default:
        throw new Error('unknown inspector type')
    }
    return this
  }

  inspect_tag (node) {
    let result = []
    while (node && node !== RH.prototype.editZone()) {
      let inspectResult = Inspector.tagMap[node.nodeName]
      if (inspectResult && !result.includes(inspectResult)) {
        result.push(inspectResult)
      }
      node = node.parentNode
    }
    return result
  }

  inspect_style (node) {
    let result = []
    while (node && node !== RH.prototype.editZone()) {
      if (!node.style) break
      Object.keys(Inspector.styles).forEach(moduleName => {
        let moduleStyle = Inspector.styles[moduleName]
        Object.keys(moduleStyle).forEach(item => {
          let curValue = moduleStyle[item]
          if (typeof curValue === 'string' && node.style[item] === curValue) {
            if (!result.includes(moduleName)) {
              result.push(moduleName)
              Inspector.activeItems[moduleName] = curValue
            }
          }
          if (Array.isArray(curValue)) {
            curValue.forEach(val => {
              if (node.style[item] === val) {
                if (!result.includes(moduleName)) {
                  result.push(moduleName)
                  Inspector.activeItems[moduleName] = val
                }
              }
            })
          }
        })
      })
      node = node.parentNode
    }
    return result
  }

  inspect_attribute (node) {
    let result = []
    while (node && node !== RH.prototype.editZone()) {
      if (!node.getAttribute) break
      Object.keys(Inspector.attributes).forEach(moduleName => {
        let moduleAttr = Inspector.attributes[moduleName]
        Object.keys(moduleAttr).forEach(item => {
          let value = moduleAttr[item]
          let nodeVal = node.getAttribute(item)
          if (Array.isArray(value)) {
            value.forEach(val => {
              if (nodeVal === val) {
                if (!result.includes(moduleName)) {
                  result.push(moduleName)
                  Inspector.activeItems[moduleName] = val
                }
              }
            })
          }
          if (typeof value === 'string' && nodeVal === value || nodeVal !== null) {
            if (!result.includes(moduleName)) {
              result.push(moduleName)
              Inspector.activeItems[moduleName] = value
            }
          }
        })
      })
      node = node.parentNode
    }
    return result
  }
}

Inspector.tagMap = {}
Inspector.styles = {}
Inspector.attributes = {}
Inspector.activeItems = {}

Inspector.run = (type, nodeList) => {
  let fn = Inspector.prototype['inspect_' + type]
  let result = []
  if (typeof fn === 'function' && Array.isArray(nodeList)) {
    nodeList.forEach(node => {
      result.push(fn(node))
    })
  }
  return result
}

Inspector.removeDuplate = function (list) {
  // merge same module inspect result
  let sameStyleMap = {}
  list.forEach(m => {
    if (typeof m === 'string') {
      sameStyleMap[m] = sameStyleMap[m] ? sameStyleMap[m] + 1 : 1
    }
    if (Array.isArray(m)) {
      m = Array.from(new Set(m))
      m.forEach(am => {
        sameStyleMap[am] = sameStyleMap[am] ? sameStyleMap[am] + 1 : 1
      })
    }
  })
  let mergedStyle = []
  Object.keys(sameStyleMap).forEach(m => {
    if (sameStyleMap[m] === list.length) {
      mergedStyle.push(m)
    }
  })
  return mergedStyle
}


export default Inspector
