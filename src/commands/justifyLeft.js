import commands from './index'

export default function (rh, arg) {
  let texts = rh.getAllTextNodesInRange()
  if (!texts.length) {
    let s = rh.getSelection()
    if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
      texts.push(s.baseNode)
    } else {
      document.execCommand('insertHTML', false, '&#8203;')
      if (s.baseNode && s.baseNode.nodeType === Node.TEXT_NODE) {
        texts.push(s.baseNode)
      }
    }
  }
  texts.forEach(text => {
    let curRow = rh.getRow(text)
    if (!curRow) {
      let newRow = rh.newRow()
      newRow.innerText = text.nodeValue
      let nextSibling = text.nextSibling
      text.parentNode.replaceChild(newRow, text)
      if (nextSibling && nextSibling.nodeName === 'BR') {
        nextSibling.parentNode.removeChild(nextSibling)
      }
    }
    document.execCommand('justifyLeft', false)
  })
}
