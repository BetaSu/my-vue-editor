import commands from './index'

export default function (rh, arg) {
  // through font tag
  if (rh.range.collapsed) {
    let node = rh.range.commonAncestorContainer
    let row = rh.getRow(node)
    if (row) {
      commands.insertHTML(rh, '<font>&#8203;</font>')
      document.execCommand('styleWithCSS', false, false)
      document.execCommand('fontSize', false, arg)
      return
    }
  } else {
    document.execCommand('styleWithCSS', false, false)
    document.execCommand('fontSize', false, arg)
  }
}
