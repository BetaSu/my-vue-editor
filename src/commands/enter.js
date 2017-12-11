import commands from './index'

export default function (rh, e) {
  let node = rh.range.commonAncestorContainer
  let row = rh.getRow(node)
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

  // clear new row's indent
  if (row) {
    e.preventDefault()
    let newRow = rh.newRow({br: true})
    // restore align
    newRow.style.textAlign = row.style.textAlign
    rh.insertAfter(newRow, row)
    rh.getSelection().collapse(newRow, 1)
  }
}
