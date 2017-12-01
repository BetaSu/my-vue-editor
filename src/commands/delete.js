import commands from './index'
import constant from '../constant-config'

export default function (rh, e) {
  // restore first row
  let node = rh.range.commonAncestorContainer
  let value = node.nodeValue || node.innerText
  console.log('delete', node, e)
  let curRange = rh.getRange() || rh.range

  // cancel list when li is empty
  if ((rh.findSpecialAncestor(node, 'li')) && rh.range.collapsed && rh.range.startOffset === 0) {
    e.preventDefault()
    let ulOrOl = rh.findSpecialAncestor(node, 'ul') || rh.findSpecialAncestor(node, 'ol')
    if (ulOrOl.nodeName === 'UL') {
      commands['insertUnorderedList'](rh, e)
    }
    if (ulOrOl.nodeName === 'OL') {
      commands['insertOrderedList'](rh, e)
    }
    return afterDelete(rh)
  }
  let row = rh.getRow(node)

  // node is edit zone
  if (!row) return afterDelete(rh)

  // handle &#8203;
  if (node.nodeType === Node.TEXT_NODE && curRange.collapsed) {
    let endOffset = curRange.endOffset - 1 >= 0 ? curRange.endOffset - 1 : 0
    let startOffset = endOffset
    while (node.nodeValue !== undefined && node.nodeValue[startOffset] && node.nodeValue[startOffset].match(/\u200B/)) {
      startOffset--
    }
    let s = rh.getSelection()
    const newRange = document.createRange()
    newRange.setStart(node, startOffset + 1)
    newRange.setEnd(node, endOffset + 1)
    s.removeAllRanges()
    s.addRange(newRange)
    document.execCommand('forwardDelete', false)
    return afterDelete(rh)
  }

  // empty row
  if (rh.range.collapsed && ((node === row && rh.range.startOffset === 0) || (row.innerHTML.replace(/<br>/g, '') === '' && rh.range.startOffset === 1))) {
    let firstRow = rh.editZone().firstElementChild

    // first row cancel indent
    if (firstRow === row) {
      commands.outdent(rh, null)
      e.preventDefault()
      return afterDelete(rh)
    }
  }

  // row has content, cursor is at at start of the node, do outdent
  if (rh.range.collapsed && value && rh.range.startOffset === 0 && (node === row.fistElementChild || node === row.firstChild)) {
    commands.outdent(rh, null)
    e.preventDefault()
    return afterDelete(rh)
  }

  // empty row
  if (row.innerHTML.replace(/<br>/g, '') === '') {
    // get previous row with content
    let preRow = rh.getPreviousRow(row)

    // cursor focus on previous row's input if previous row is todo
    if (preRow && preRow.dataset && preRow.dataset.editorTodo) {
      row.parentNode.removeChild(row)
      let input = preRow.querySelector('input[type="text"]')
      if (input) {
        e.preventDefault()
        input.focus()
      }
      return afterDelete(rh)
    }
  }
}

// handle more &#8203; after delete
function afterDelete(rh) {
  setTimeout(() => {
    let curRange = rh.getRange() || rh.range
    let node = curRange.commonAncestorContainer
    if (node.nodeType === Node.TEXT_NODE && curRange.collapsed) {
      let endOffset = curRange.endOffset - 1 >= 0 ? curRange.endOffset - 1 : 0
      let startOffset = endOffset
      while (node.nodeValue !== undefined && node.nodeValue[startOffset] && node.nodeValue[startOffset].match(/\u200B/)) {
        startOffset--
      }
      if (startOffset !== endOffset) {
        try {
          let s = rh.getSelection()
          const newRange = document.createRange()
          newRange.setStart(node, startOffset)
          newRange.setEnd(node, endOffset + 1)
          s.removeAllRanges()
          s.addRange(newRange)
          document.execCommand('forwardDelete', false)
        } catch (e) {}
      }
    }
  })
}
