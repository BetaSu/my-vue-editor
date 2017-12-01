import commands from './index'

const q = {
  // only set contenteditable:false in parent node can child node trigger keydown listener
  'quote' (rh, isInQuote) {
    console.log('quote!')
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
      }
      return
    }
    const texts = rh.getAllTextNodesInRange()
    let curRow = rh.getRow(node)

    // is at a empty row without row element, then create a row
    if (!curRow) {
      let v = rh.newRow()
      let newRow = rh.newRow({br: true})
      v.appendChild(newRow)
      commands.insertHTML(rh, newRow.outerHTML)
      let s = rh.getSelection()
      texts.push(s.focusNode)
    } else if (!texts.length) {
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
    // container.appendChild(quote)
    // let aNode = rh.range.commonAncestorContainer
    // // if range is not at edit zone, insertHTML would run fail
    // if (aNode !== rh.editZone()) {
    //   aNode.parentNode.removeChild(aNode)
    // }
    // commands['insertHTML'](rh, container.innerHTML)
    anchorRow.parentNode.replaceChild(quote, anchorRow)
    const curQuote = document.querySelector(`[data-editor-quote='${id}']`)
    if (!curQuote.lastElementChild) return
    rh.getSelection().collapse(curQuote.lastElementChild, curQuote.lastElementChild.innerText ? 1 : 0)
  },
  'initQuote' (rh, arg) {
    document.addEventListener('keydown', e => {
      let quote = rh.findSpecialAncestor(e.target, '[data-editor-quote]')
      if (quote) {
        console.log('init quote')
        let s = rh.getSelection()
        let node = s.anchorNode
        let ctn = node.innerText || node.nodeValue
        if (e.keyCode === 13) {
          if (ctn.replace('\n', '') === '') {
            e.preventDefault()
            let sibling = quote.nextSibling
            if (!sibling || sibling.innerHTML === '') {
              sibling = rh.newRow({
                br: true
              })
              rh.insertAfter(sibling, quote)
            }
            node.parentNode.removeChild(node)
            rh.getSelection().collapse(sibling, 0)
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
