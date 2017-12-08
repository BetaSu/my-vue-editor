import commands from './index'

const q = {
  // only set contenteditable:false in parent node can child node trigger keydown listener
  'quote' (rh, isInQuote) {
    let node = rh.range.commonAncestorContainer
    if (isInQuote) {
      node = node.nodeType === Node.TEXT_NODE ? node.parentNode : node
      let quote = rh.findSpecialAncestor(node, '[data-editor-quote]')
      if (quote) {
        let texts = rh.getDescendantTextNodes(quote)
        let quoteRows = []
        let rows = Array.from(quote.querySelector('[data-editor-quote-block').children)
        texts.forEach(text => {
          // find row in current quote row
          // let row = rh.findSpecialAncestor(text, constant.ROW_TAG, false, quote)
          let row
          rows.forEach(curRow => {
            if (curRow.contains(text)) {
              row = curRow
            }
          })
          if (!quoteRows.includes(row)) {
            quoteRows.push(row)
          }
        })
        quoteRows.forEach((qr, index) => {
          if (index === 0) {
            quote.parentNode.replaceChild(qr, quote)
          } else {
            rh.insertAfter(qr, quoteRows[index - 1])
          }
        })
        let s = rh.getSelection()
        if (quoteRows.length) {
          const range = document.createRange()
          range.setStart(quoteRows[0], 0)
          range.setEnd(quoteRows[quoteRows.length - 1], 1)
          s.removeAllRanges()
          s.addRange(range)
        } else {
          // it's a empty quote
          let newRow = rh.newRow({br: true})
          quote.parentNode.replaceChild(newRow, quote)
          s.collapse(newRow, 1)
        }
      }
      return
    }
    const texts = rh.getAllTextNodesInRange()
    let curRow = rh.getRow(node)

    // is at a empty row without row element, then create a row
    // or texts has no common parent row
    if (!curRow && !texts.length) {
      let v = rh.newRow()
      let newRow = rh.newRow({br: true})
      v.appendChild(newRow)
      commands.insertHTML(rh, newRow.outerHTML)
      let s = rh.getSelection()
      texts.push(s.focusNode)
    }
    if (!texts.length) {
      texts.push(curRow)
    }

    let container = rh.newRow()
    let quote = document.createElement('section')
    let quoteBlock = rh.newRow({tag: 'div'})
    quoteBlock.setAttribute('data-editor-quote-block', rh.createRandomId('quoteblock'))
    quote.appendChild(quoteBlock)
    let id = rh.createRandomId('quote')
    quote.setAttribute('data-editor-quote', id)
    quote.setAttribute('contenteditable', 'false')
    let quoteRows = []
    texts.forEach((text, index) => {
      let curRow = rh.getRow(text)

      // create a row for text without row
      if (!curRow && text.nodeValue) {
        curRow = rh.newRow()
        curRow.appendChild(text)
      }
      if (curRow && !quoteRows.includes(curRow)) {
        quoteRows.push(curRow)
      }
    })
    let anchorRow
    quoteRows.forEach((qr, index) => {
      if (index !== quoteRows.length - 1) {
        quoteBlock.appendChild(qr)
        return
      }
      quoteBlock.appendChild(qr.cloneNode(true))
      anchorRow = qr
    })

    if (anchorRow.parentNode) {
      anchorRow.parentNode.replaceChild(quote, anchorRow)
    } else {
      // current row is created and has no parent
      let v = rh.newRow()
      v.appendChild(quote)
      rh.range.deleteContents()
      commands['insertHTML'](rh, v.innerHTML)
    }
    const curQuote = document.querySelector(`[data-editor-quote='${id}']`)
    if (!curQuote.lastElementChild) return
    rh.getSelection().collapse(curQuote.lastElementChild, curQuote.lastElementChild.innerText ? 1 : 0)
  },
  'initQuote' (rh, arg) {
    document.addEventListener('keydown', e => {
      let quote = rh.findSpecialAncestor(e.target, '[data-editor-quote]')
      if (quote) {
        let s = rh.getSelection()
        let node = s.anchorNode
        let ctn = node.innerText || node.nodeValue
        if (e.keyCode === 13) {
          if (ctn.replace('\n', '') === '') {
            e.preventDefault()
            let newRow = rh.newRow({br: true})
            rh.insertAfter(newRow, quote)
            if (node.parentNode.children.length > 1) {
              node.parentNode.removeChild(node)
            }
            rh.getSelection().collapse(newRow, 0)
            return
          }
        }
        if (e.keyCode === 8) {

          // cursor may at row or at quote block , so there are two judgement conditions
          if (s.isCollapsed && (s.focusOffset === 0 || (node.contains(s.baseNode) && (rh.isEmptyNode(s.baseNode)) && s.focusOffset === 1))) {
            let rows = Array.from(quote.querySelector('[data-editor-quote-block]').children)

            // empty quote
            if (!rows.length) {
              e.preventDefault()
              let newRow = rh.newRow({br: true})
              quote.parentNode.replaceChild(newRow, quote)
              rh.getSelection().collapse(newRow, 1)
              return
            }

            rows.forEach((row, index) => {

              // row and node has father-child relationship
              if ((row === node || row.contains(node) || node.contains(row)) && index === 0) {

                // only have one empty row in quote,then delete the quote
                if (rows.length === 1 && rh.isEmptyNode(row)) {
                  e.preventDefault()
                  let newRow = rh.newRow({br: true})
                  quote.parentNode.replaceChild(newRow, quote)
                  rh.getSelection().collapse(newRow, 1)
                  return
                } else {

                  // first row have content and previous element exist, then move cursor to previous element
                  let preRow = rh.getPreviousRow(quote)
                  if (preRow) {
                    e.preventDefault()

                    // previous row is a quote
                    if (preRow.getAttribute('data-editor-quote')) {
                      let lastEle = Array.from(preRow.querySelector('[data-editor-quote-block]').children).pop()
                      try {
                        rh.getSelection().collapse(lastEle, 1)
                      } catch (e) {
                        rh.getSelection().collapse(lastEle, 0)
                      }
                      return
                    }

                    // previous row is a todo
                    if (preRow.getAttribute('data-editor-todo')) {
                      let input = preRow.querySelector('[type="text"]')
                      if (input) {
                        e.preventDefault()
                        input.focus()
                      }
                      return
                    }

                    // previous row is a row
                    try {
                      rh.getSelection().collapse(preRow, 1)
                    } catch (e) {
                      rh.getSelection().collapse(preRow, 0)
                    }
                    return
                  }
                }
              }
            })
          }
        }
      }
    })
  }
}

export default q
