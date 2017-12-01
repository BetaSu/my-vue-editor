import commands from './index'

export default function (rh, arg) {
  let s = rh.getSelection()
  if (!s.isCollapsed) {
    document.execCommand('bold', false, arg)
    return
  } else {
    let node = s.focusNode
    let row = rh.getRow(node)

    // the outermost bold tag
    let bold = rh.findSpecialAncestor(node, 'strong') || rh.findSpecialAncestor(node, 'b') || rh.findSpecialAncestorByStyle(node, {
        'fontWeight': 'bold'
      })
    let existStyle = rh.findExistTagTillBorder(node, ['STRIKE', 'I', 'U'], row)
    if (!bold) {
      existStyle.push('B')
    }
    if (existStyle.length) {
      let newDOM = rh.createNestDOMThroughList(existStyle)
      let v = rh.newRow()
      v.appendChild(newDOM.dom)
      commands.insertHTML(rh, v.innerHTML)
      let deepestNode = document.getElementById(newDOM.deepestId)
      s.collapse(deepestNode, 1)
      deepestNode.removeAttribute('id')
    } else {
      let newText = document.createElement('font')
      newText.innerHTML = '&#8203;'
      rh.insertAfter(newText, bold)
      s.collapse(newText, 1)
    }
  }
}
