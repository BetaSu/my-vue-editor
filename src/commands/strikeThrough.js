import commands from './index'

export default function (rh, arg) {
  let s = rh.getSelection()
  if (!s.isCollapsed) {
    document.execCommand('strikeThrough', false, arg)
    return
  } else {
    let node = s.focusNode
    let row = rh.getRow(node)
    let nodeCtn = node.innerText || node.nodeValue

    // the outermost strikeThrough tag
    let strikeThrough = rh.findSpecialAncestor(node, 'STRIKE', false, row) || rh.findSpecialAncestorByStyle(node, {
        'textDecorationLine': 'line-through'
      }, false, row)
    let existStyle = rh.findExistTagTillBorder(node, ['U', 'I', 'B', 'STRONG'], row)
    if (!strikeThrough) {
      existStyle.push('STRIKE')
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
      rh.insertAfter(newText, strikeThrough)
      s.collapse(newText, 1)
    }
  }
}
