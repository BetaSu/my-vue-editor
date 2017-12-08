import commands from './index'

export default function (rh, e) {
  if (rh.range.collapsed) {
    let node = rh.range.commonAncestorContainer

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
}
