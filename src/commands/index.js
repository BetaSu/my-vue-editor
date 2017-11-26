import insertImage from './insertImage'
import fontSize from './fontSize'
import { isObj } from '../util'
import constant from '../constant-config'

const commands = {
  /*
   * add a style attribute in range(have bug)
   * @param {obj} arg include
   *      key: style name
   *      value: style value
   **/
  addStyle (rh, arg) {
    function doAdd(node) {
      Object.keys(arg).forEach(styleName => {
        node.style[styleName] = arg[styleName]
      })
    }
    if (!isObj(arg)) return
    const textNodes = rh.getAllTextNodesInRange()
    if (!textNodes.length) {
      if (rh.range.collapsed) {
        let node = rh.range.commonAncestorContainer
        if (node.nodeType === Node.ELEMENT_NODE) {
          doAdd(node)
          return
        }
      }
    }
    if (rh.range.collapsed && textNodes.length === 1) {
      let node = textNodes[0].parentNode
      if (node) {
        if (node === rh.editZone()) {
          let newRow = rh.newRow({tag: 'p'})
          newRow.innerText = textNodes[0].nodeValue
          node.replaceChild(newRow, textNodes[0])
          doAdd(newRow)
          return
        }
        doAdd(node)
        return
      }
    }
    if (textNodes.length === 1 && textNodes[0] === rh.range.startContainer
      && textNodes[0] === rh.range.endContainer) {
      const textNode = textNodes[0]
      if (rh.range.startOffset === 0
        && rh.range.endOffset === textNode.textContent.length) {
        if (textNode.parentNode.childNodes.length === 1
          && rh.isInlineElement(textNode.parentNode)) {
          doAdd(textNode.parentNode)
          return
        }
        const span = document.createElement('span')
        doAdd(span)
        textNode.parentNode.insertBefore(span, textNode)
        span.appendChild(textNode)
        return
      }
      const span = document.createElement('span')
      span.innerText = textNode.textContent.substring(
        rh.range.startOffset, rh.range.endOffset)
      doAdd(span)
      const frontPart = document.createTextNode(
        textNode.textContent.substring(0, rh.range.startOffset))
      textNode.parentNode.insertBefore(frontPart, textNode)
      textNode.parentNode.insertBefore(span, textNode)
      textNode.textContent = textNode.textContent.substring(rh.range.endOffset)
      rh.range.setStart(span, 0)
      rh.range.setEnd(span, 1)
      return
    }

    textNodes.forEach((textNode) => {
      if (textNode === rh.range.startContainer) {
        if (rh.range.startOffset === 0) {
          if (textNode.parentNode.childNodes.length === 1
            && rh.isInlineElement(textNode.parentNode)) {
            doAdd(textNode.parentNode)
          } else {
            const span = document.createElement('span')
            doAdd(span)
            textNode.parentNode.insertBefore(span, textNode)
            span.appendChild(textNode)
          }
          return
        }
        const span = document.createElement('span')
        textNode.textContent = textNode.textContent.substring(
          0, rh.range.startOffset)
        doAdd(span)
        textNode.parentNode.insertBefore(span, textNode)
        rh.range.setStart(textNode, 0)
        return
      }
      if (textNode === rh.range.endContainer) {
        if (rh.range.endOffset === textNode.textContent.length) {
          if (textNode.parentNode.childNodes.length === 1
            && rh.isInlineElement(textNode.parentNode)) {
            doAdd(textNode.parentNode)
          } else {
            const span = document.createElement('span')
            doAdd(span)
            textNode.parentNode.insertBefore(span, textNode)
            span.appendChild(textNode)
          }
          return
        }
        const span = document.createElement('span')
        textNode.textContent = textNode.textContent.substring(rh.range.endOffset)
        doAdd(span)
        textNode.parentNode.insertBefore(span, textNode)
        span.appendChild(textNode)
        rh.range.setStart(textNode, textNode.textContent.length)
        return
      }
      if (textNode.parentNode.childNodes.length === 1
        && rh.isInlineElement(textNode.parentNode)) {
        doAdd(textNode.parentNode)
        return
      }

      const span = document.createElement('span')
      doAdd(span)
      textNode.parentNode.insertBefore(span, textNode)
      span.appendChild(textNode)
    })
    return
  },
  'formatBlock' (rh, arg) {
    if (document.execCommand('formatBlock', false, arg)) {
      return
    }
    // hack
    const element = document.createElement(arg)
    rh.range.surroundContents(element)
    return
  },
  'lineHeight' (rh, arg) {
    const textNodes = rh.getAllTextNodesInRange()
    textNodes.forEach((textNode) => {
      const parentBlock = rh.getParentBlockNode(textNode)
      if (parentBlock) {
        parentBlock.style.lineHeight = arg
      }
    })
    return
  },
  'insertHTML' (rh, arg) {
    if (document.execCommand('insertHTML', false, arg)) {
      return
    }
    // hack
    const fragment = document.createDocumentFragment()
    const div = document.createElement('div')
    div.innerHTML = arg
    if (div.hasChildNodes()) {
      for (let i = 0; i < div.childNodes.length; i++) {
        fragment.appendChild(div.childNodes[i].cloneNode(true))
      }
    }
    rh.range.deleteContents()
    rh.range.insertNode(fragment)
    return
  },
  'indent' (rh, arg) {
    let nodeList = []
    if (rh.range.collapsed) {
      weighting(rh.range.commonAncestorContainer)
    } else {
      let texts = rh.getAllTextNodesInRange()
      texts.forEach(text => {
        weighting(text)
      })
    }

    nodeList.forEach(node => {
      doIndent(node.nodeName, node)
    })

    function weighting(text) {
      let node = rh.findSpecialAncestor(text, 'li') || rh.findSpecialAncestor(text, constant.ROW_TAG)
      if (node && !nodeList.includes(node)) {
        nodeList.push(node)
      }
    }

    function doIndent(type, node) {
      switch (type) {
        case 'LI':
          let curLevel = rh.howManyNestAncestorSameTag(node, 'UL') || rh.howManyNestAncestorSameTag(node, 'OL')
          if (curLevel >= constant.MAX_INDENT_LEVEL) break
          document.execCommand('indent', false, arg)
          break
        case constant.ROW_TAG_UPPERCASE:
          let curPercent = node.style[constant.INDENT_STYLE_NAME] || '0'
          curPercent = Number(curPercent.replace('%', ''))
          node.style[constant.INDENT_STYLE_NAME] = ''
          node.style[constant.OUTDENT_STYLE_NAME] = ''
          if (curPercent / constant.INDENT_WIDTH_PERCENT >= constant.MAX_INDENT_LEVEL) {
            node.style[constant.INDENT_STYLE_NAME] = curPercent + '%'
            return
          }
          node.style[constant.INDENT_STYLE_NAME] = curPercent + constant.INDENT_WIDTH_PERCENT + '%'
      }
    }
  },
  'outdent' (rh, arg) {
    let nodeList = []
    if (rh.range.collapsed) {
      weighting(rh.range.commonAncestorContainer)
    } else {
      let texts = rh.getAllTextNodesInRange()
      texts.forEach(text => {
        weighting(text)
      })
    }

    nodeList.forEach(node => {
      doOutdent(node.nodeName, node)
    })

    function weighting(text) {
      let node = rh.findSpecialAncestor(text, 'li') || rh.findSpecialAncestor(text, constant.ROW_TAG)
      if (node && !nodeList.includes(node)) {
        nodeList.push(node)
      }
    }

    function doOutdent(type, node) {
      switch (type) {
        case 'LI':
          document.execCommand('outdent', false, arg)
          break
        case constant.ROW_TAG_UPPERCASE:
          let curPercent = node.style[constant.INDENT_STYLE_NAME] || '0'
          curPercent = Number(curPercent.replace('%', ''))
          if (curPercent === 0) return
          node.style[constant.INDENT_STYLE_NAME] = ''
          node.style[constant.OUTDENT_STYLE_NAME] = ''
          let targetIndent = curPercent - constant.INDENT_WIDTH_PERCENT
          if (targetIndent < 0) {
            node.style[constant.INDENT_STYLE_NAME] = ''
          } else {
            node.style[constant.INDENT_STYLE_NAME] = targetIndent + '%'
          }
      }
    }
  },
  // only set contenteditable:false in parent node can child node trigger keydown listener
  'quote' (rh, isInQuote) {
    console.log('quote!')
    if (isInQuote) {
      let node = rh.range.commonAncestorContainer
      node = node.nodeType === Node.TEXT_NODE ? node.parentNode : node
      let quote = rh.findSpecialAncestor(node, '[data-editor-quote]')
      if (quote) {
        let texts = rh.getDescendantTextNodes(quote)
        let quoteRows = []
        texts.forEach(text => {
          // find row in current quote row
          let row = rh.findSpecialAncestor(text, constant.ROW_TAG, false, quote)
          // maybe have bug
          // if (!row) {
          //   row = rh.findSpecialAncestor(text, 'div', false, quote)
          // }
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
    if (!texts.length) {
      texts.push(document.createTextNode(''))
    }

    let container = rh.newRow()
    let br = document.createElement('br')
    let quoteBlock = document.createElement('section')
    let quoteBlockDiv = rh.newRow({tag: 'div'})
    quoteBlock.appendChild(quoteBlockDiv)
    let id = rh.createRandomId('quote')
    quoteBlock.setAttribute('data-editor-quote', id)
    quoteBlock.setAttribute('contenteditable', 'false')
    let quoteRows = []
    texts.forEach((text, index) => {
      if (!text.parentNode) {
        quoteRows.push(rh.newRow({br: true}))
        return
      }
      let curRow = rh.getRow(text)
      if (curRow && !quoteRows.includes(curRow)) {
        quoteRows.push(curRow)
      }
    })
    quoteRows.forEach(qr => {
      quoteBlockDiv.appendChild(qr)
    })
    container.appendChild(quoteBlock)
    container.appendChild(br)
    let aNode = rh.range.commonAncestorContainer
    // if range is not at edit zone, insertHTML would run fail
    if (aNode !== rh.editZone()) {
      aNode.parentNode.removeChild(aNode)
    }
    commands['insertHTML'](rh, container.innerHTML)
    const quote = document.querySelector(`[data-editor-quote='${id}']`)
    if (!quote.lastElementChild) return
    rh.getSelection().collapse(quote.lastElementChild, quote.lastElementChild.innerText ? 1 : 0)
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
          if (ctn.replace('\n', '') === '' &&
            (node.parentNode === quote || (node.parentNode.nodeName === 'DIV' && node === node.parentNode.firstElementChild))) {
            let newRow = rh.newRow({br: true})
            quote.parentNode.replaceChild(newRow, quote)
            rh.getSelection().collapse(newRow, 1)
            return
          }
          if (s.isCollapsed && s.focusOffset === 0) {
            let quoteRow = rh.findSpecialAncestor(node, constant.ROW_TAG, false, quote)
            let rows = Array.from(quoteRow.parentNode.children)
            rows.forEach((row, index) => {
              if (row === quoteRow && index === 0) {
                e.preventDefault()
                let preRow = rh.getRow(quote.previousElementSibling)
                if (preRow) {
                  rh.getSelection().collapse(preRow, 0)
                }
              }
            })
          }
        }
      }
    })
  },
  'todo' (rh, afterWhich) {
    let row = rh.newRow({
      br: true
    })
    afterWhich = rh.getRow(afterWhich || rh.range.commonAncestorContainer)
    if (afterWhich && afterWhich !== rh.editZone()) {
      let targetIndex
      let startIndex
      let list = afterWhich.parentNode.childNodes
      list.forEach((child, index) => {
        if (child === afterWhich) {
          startIndex = index
          if (startIndex === list.length - 1) {
            targetIndex = list.length
          }
          return
        }
        if (startIndex !== undefined && targetIndex === undefined) {
          if (child && child.getAttribute('data-editor-todo')) {
            targetIndex = index
          }
        }
      })
      targetIndex = targetIndex === undefined ? startIndex + 1 : targetIndex
      afterWhich.parentNode.insertBefore(row, list[targetIndex])
      rh.getSelection().collapse(row, 0)
    } else {
      afterWhich.appendChild(row, 0)
      rh.getSelection().collapse(row, 0)
    }
    let todoId = rh.createRandomId('todo')
    commands['insertHTML'](rh, `<${constant.ROW_TAG} data-editor-todo=${todoId} contenteditable="false"><input type="checkbox"/><input type="text" placeholder="待办事项"></${constant.ROW_TAG}><br>`)
    document.querySelector(`[data-editor-todo='${todoId}'] input[type=text]`).focus()
    if (row) {
      let br = row.querySelector('br')
      row.removeChild(br)
    }
    commands['initTodo'](rh, afterWhich)
  },
  // init todo logic
  'initTodo' (rh, arg) {
    const checkboxs = document.querySelectorAll('[data-editor-todo]')
    checkboxs.forEach((c, index) => {
      const btn = c.querySelector('[type=checkbox]')
      const ctn = c.querySelector('[type=text]')
      if (c.init) return
      ctnCheckedLogic()

      function ctnCheckedLogic() {
        ctn.setAttribute('data-editor-value', ctn.value)
        if (btn.checked) {
          ctn.style.textDecoration = 'line-through'
          btn.setAttribute('checked', '')
        } else {
          ctn.style.textDecoration = 'none'
          btn.removeAttribute('checked')
        }

      }

      btn.onchange = e => {
        ctnCheckedLogic()
        if (rh.editor && rh.editor.$refs && rh.editor.$refs.content) {
          rh.editor.$emit('change', rh.editor.$refs.content.innerHTML)
        }
      }
      ctn.oninput = e => {
        ctn.setAttribute('data-editor-value', e.target.value)
      }
      ctn.onkeydown = ctn.onkeydown || (e => {
          if (![13, 8].includes(e.keyCode)) return
          let row = c.nextSibling
          if (e.keyCode === 13) {
            if (ctn.value === '') {
              e.preventDefault()
              return deleteTodo()
            }
            commands['todo'](rh, c)
          } else if (e.keyCode === 8) {
            if (ctn.value === '') {
              e.preventDefault()
              e.stopPropagation()
              deleteTodo()
            }
          }

          function deleteTodo() {
            let newRow = rh.newRow({br: true})
            c.parentNode.replaceChild(newRow, c)
            rh.getSelection().collapse(newRow, 1)
          }
        })
      c.init = true
    })
  },
  'underline' (rh, arg) {
    document.execCommand('underline', false, arg)
    // if (!rh.range.collapsed) {
    //   document.execCommand('underline', false, arg)
    // } else {
    //   let text = rh.range.commonAncestorContainer
    //   let node = text
    //   if (text.nodeType === Node.TEXT_NODE) {
    //     if (!text.parentNode.dataset || text.parentNode.dataset !== 'content') {
    //       node = text.parentNode
    //     }
    //   }
    //   console.log('find', rh.findSpecialAncestor(node, 'u'))
    //   if (rh.findSpecialAncestor(node, 'u')) {
    //     console.log(' in')
    //     let ctn = text.nodeValue || text.innerText
    //     // at the end of u
    //     if (rh.getSelection().focusOffset === ctn.length) {
    //       let span = document.createElement('span')
    //       span.innerHTML = '&#8203;'
    //       rh.insertAfter(span, node)
    //       rh.getSelection().collapse(span, 1)
    //       return
    //     } else {
    //       if (ctn.replace(/\u200B/g, '') === '') {
    //         node.parentNode.removeChild(node)
    //         return
    //       }
    //       console.log('middle')
    //       return
    //     }
    //   }
    //   let newUnderline = document.createElement('u')
    //   newUnderline.innerHTML = '&#8203;'
    //   if (text.parentNode) {
    //     rh.insertAfter(newUnderline, text)
    //     rh.getSelection().collapse(newUnderline, 1)
    //   }
    // }
  },
  'insertUnorderedList' (rh, arg) {
    console.log('in')
    // do not insert ul into a row
    document.execCommand('insertUnorderedList', false, null)
    let startNode = rh.getSelection().anchorNode
    let row = rh.getRow(startNode)
    row = rh.createWrapperForInline(row, constant.ROW_TAG)
    if (row) {
      let maybeIsUl = row.firstElementChild
      if (maybeIsUl && maybeIsUl.nodeName === 'UL') {
        row.parentNode.replaceChild(maybeIsUl, row)
      }
    } else {
      let startNode = rh.getSelection().anchorNode
      if (startNode === rh.editZone()) {
        let row = rh.newRow({br: true})
        commands['insertHTML'](rh, row.outerHTML)
      }
    }

    // special treatment for first ul>li at first row,to let style inspect run
    if (startNode.nodeName === 'LI' && startNode.parentNode === rh.editZone().firstElementChild) {
      commands['insertHTML'](rh, '&#8203;')
      startNode.innerHTML = ''
      return
    }
  },
  'insertOrderedList' (rh, arg) {
    // do not insert ol into a row, just let it become a row
    document.execCommand('insertOrderedList', false, null)
    let startNode = rh.getSelection().anchorNode
    let row = rh.getRow(startNode)
    row = rh.createWrapperForInline(row, constant.ROW_TAG)
    if (row) {
      let maybeIsUl = row.firstElementChild
      if (maybeIsUl && maybeIsUl.nodeName === 'OL') {
        row.parentNode.replaceChild(maybeIsUl, row)
      }
    } else {
      let startNode = rh.getSelection().anchorNode
      if (startNode === rh.editZone()) {
        let row = rh.newRow({br: true})
        commands['insertHTML'](rh, row.outerHTML)
      }
    }

    // special treatment for first ul>li at first row,to let style inspect run
    if (startNode.nodeName === 'LI' && startNode.parentNode === rh.editZone().firstElementChild) {
      commands['insertHTML'](rh, '&#8203;')
      startNode.innerHTML = ''
      return
    }
  },
  'delete' (rh, e) {
    // restore first row
    let node = rh.range.commonAncestorContainer
    console.log('delete', node)
    // cancel list when li is empty
    if (node.nodeName === 'LI' && rh.range.collapsed && rh.range.startOffset === 0) {
      e.preventDefault()
      let ulOrOl = rh.findSpecialAncestor(node, 'ul') || rh.findSpecialAncestor(node, 'ol')
      if (ulOrOl.nodeName === 'UL') {
        commands['insertUnorderedList'](rh, e)
      }
      if (ulOrOl.nodeName === 'OL') {
        commands['insertOrderedList'](rh, e)
      }
      return
    }
    node = rh.findSpecialAncestor(node, constant.ROW_TAG)
    if (!node) return
    if (rh.range.collapsed && (rh.range.startOffset === 0 || (node.innerHTML.replace(/<br>/g, '') === '' && rh.range.startOffset === 1))) {
      if (node) {
        let firstRow = rh.editZone().firstElementChild
        if (firstRow.nodeName !== constant.ROW_TAG_UPPERCASE) return
        if (firstRow === node) {
          firstRow.style[constant.INDENT_STYLE_NAME] = ''
          e.preventDefault()
        } else if (firstRow.contains(node)) {
          e.preventDefault()
          let newRow = rh.newRow({br: true, tag: constant.ROW_TAG})
          firstRow.parentNode.replaceChild(newRow, firstRow)
          rh.getSelection().collapse(newRow, 1)
        }
      }
    }

    if (node.innerHTML.replace(/<br>/g, '') === '') {
      // get previous row with content
      let preRow
      let rows = Array.from(node.parentNode.querySelectorAll(constant.ROW_TAG))
      let rowIndex = null
      rows.forEach((row, index) => {
        if (row === node) {
          rowIndex = index
        }
        if (rowIndex === null) {
          if (row.innerHTML.replace(/<br>/g, '') !== '') {
            preRow = row
          }
        }
      })
      // cursor focus on previous row's input if previous row is todo
      if (preRow && preRow.dataset && preRow.dataset.editorTodo) {
        e.preventDefault()
        let input = preRow.querySelector('input[type="text"]')
        if (input) {
          input.focus()
        }
      }
    }
  },
  'enter' (rh, e) {
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
  },
  'keydown' (rh, e) {
    let node = rh.range.commonAncestorContainer

    // to keep text wrap by a row
    if (node.nodeType === Node.TEXT_NODE && node.parentNode === rh.editZone()) {
      let row = rh.newRow()
      row.innerText = node.nodeValue
      node.parentNode.replaceChild(row, node)
      return
    }
  }
}
commands.insertImage = insertImage
commands.fontSize = fontSize

export default commands
