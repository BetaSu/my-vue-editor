import commands from './index'

export default function (rh, arg) {
  let s = rh.getSelection()
  if (!s.isCollapsed) {
    document.execCommand('styleWithCSS', false, false)
    document.execCommand('underline', false, arg)
    return
  } else {
    let node = s.focusNode
    let row = rh.getRow(node)
    let nodeCtn = node.innerText || node.nodeValue

    // the outermost underline tag
    let underline = rh.findSpecialAncestor(node, 'u', false, row) || rh.findSpecialAncestorByStyle(node, {
        'textDecorationLine': 'underline'
      }, false, row)
    let existStyle = rh.findExistTagTillBorder(node, ['STRIKE', 'I', 'B', 'STRONG'], row)
    let fontSize = rh.findSpecialAncestorStyle(node, 'fontSize', true, row)
    if (!underline) {
      existStyle.push('U')
    }
    if (existStyle.length) {
      let newDOM = rh.createNestDOMThroughList(existStyle)
      let v = rh.newRow()
      if (fontSize) {
        let span = document.createElement('span')
        span.style.fontSize = fontSize
        v.appendChild(span)
        span.appendChild(newDOM.dom)
      } else {
        v.appendChild(newDOM.dom)
      }
      commands.insertHTML(rh, v.innerHTML)
      let deepestNode = document.getElementById(newDOM.deepestId)
      s.collapse(deepestNode, 1)
      deepestNode.removeAttribute('id')
    } else {
      let newText = document.createElement('span')
      newText.style.fontSize = fontSize
      newText.innerHTML = '&#8203;'
      rh.insertAfter(newText, underline)
      s.collapse(newText, 1)
    }
  }
}
