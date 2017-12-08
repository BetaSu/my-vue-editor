import commands from './index'

export default function (rh, arg) {
  if (rh.range.collapsed) {
    let s =rh.getSelection()
    let node = s.baseNode
    let row = rh.getRow(node)
    if (row) {
      // delete current span element to keep line-height run correct
      if (rh.isEmptyNode(node) && node.parentNode.nodeName === 'SPAN') {
        document.execCommand('delete', false)
      }
      commands.insertHTML(rh, '&#8203;')
      const range = document.createRange()
      range.setStart(s.focusNode, s.anchorOffset - 1)
      range.setEnd(s.focusNode, s.focusOffset)
      s.removeAllRanges()
      s.addRange(range)
      document.execCommand('styleWithCSS', false, true)
      document.execCommand('fontSize', false, arg)
      s.collapse(s.focusNode, 1)
      return
    }
  } else {
    document.execCommand('styleWithCSS', false, true)
    document.execCommand('fontSize', false, arg)
  }
}
