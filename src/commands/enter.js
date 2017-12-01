import commands from './index'

export default function (rh, e) {
  console.log('enter')
  if (rh.range.collapsed) {
    let node = rh.range.commonAncestorContainer

    // rewrite li enter logic
    if (rh.findSpecialAncestor(node, 'li') && node.innerText && node.innerText.replace(/\n/g, '') === '') {
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
