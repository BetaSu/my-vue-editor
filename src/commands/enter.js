import commands from './index'

export default function (rh, e) {
  let node = rh.range.commonAncestorContainer
  if (rh.range.collapsed) {

    // rewrite li enter logic
    if (rh.findSpecialAncestor(node, 'li') && rh.isEmptyNode(node)) {
      e.preventDefault()
      let ulOrOl = rh.findSpecialAncestor(node, 'ul') || rh.findSpecialAncestor(node, 'ol')
      if (ulOrOl.nodeName === 'UL') {
        commands['insertUnorderedList'](rh, e)
      }
      if (ulOrOl.nodeName === 'OL') {
        commands['insertOrderedList'](rh, e)
      }
    }
  }
  afterEnter(rh, e)
}

function afterEnter(rh, e) {
  setTimeout(function () {
    let node = rh.getSelection().baseNode
    let row = rh.getRow(node)
    // clear new row's indent
    if (row) {
      row.style.marginLeft = ''
      row.style.marginRight = ''
    }
  })
}
