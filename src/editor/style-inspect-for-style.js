/*
 * style means module which add a style attribute in target element
 * like title, subtitle , main ......
 **/
// todo 待定的修改
let config = {
  'HEADING': {
    fontSize: 'xx-large',
    lineHeight: '1.4',
    name: '大标题'
  },
  'SUB_HEADING': {
    fontSize: 'x-large',
    lineHeight: '1.4',
    name: '副标题'
  },
  'SMALL_HEADING': {
    fontSize: 'large',
    lineHeight: '1.5',
    name: '小标题'
  },
  'MAIN': {
    fontSize: 'medium',
    lineHeight: '1.5',
    name: '正文'
  }
}

const styleNeedInspect = ['fontSize']

export default function (node) {
  let result = []
  while (node && ((node.dataset && node.dataset.editor !== 'content') || !node.dataset)) {
    styleNeedInspect.forEach(styleName => {
      if (!node.style) return
      let nodeStyle = node.style[styleName]
      Object.keys(config).forEach(moduleName => {
        if (config[moduleName][styleName] === nodeStyle) {
          result.push(moduleName)
        }
      })
    })
    node = node.parentNode
  }
  return result
}
