import insertImage from './insertImage'
import fontSize from './fontSize'
import paste from './paste'
import enter from './enter'
import underline from './underline'
import strikeThrough from './strikeThrough'
import italic from './italic'
import bold from './bold'
import quote from './quote'
import todo from './todo'
import keydown from './keydown'
import deleteModule from './delete'
import justifyRight from './justifyRight'
import justifyLeft from './justifyLeft'
import justifyCenter from './justifyCenter'
import {isObj} from '../util'
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
    commands['forceInsertHTML'](rh, arg)
  },
  /*
   * insertHTML would insert DOM as row's child
   * forceInsertHTML would insert DOM as anchorNode of range 
   **/
  'forceInsertHTML' (rh, arg) {
    let v = rh.newRow()
    let s = rh.getSelection()
    v.innerHTML = arg
    if (v.hasChildNodes()) {
      for (let i = 0; i < v.childNodes.length; i++) {
        let curNode = v.childNodes[i]
        rh.range.deleteContents()
        rh.range.insertNode(curNode)
        s.collapse(curNode, 1)
      }
    }
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
      // cancel todo indent
      if (node.getAttribute('data-editor-todo')) {
        return
      }
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

    let outdentResult
    nodeList.forEach(node => {
      outdentResult = doOutdent(node.nodeName, node)
    })
    return outdentResult

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
          if (curPercent === 0) return 'NO_NEED_OUTDENT'
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
  'insertUnorderedList' (rh, arg) {
    // do not insert ul into a row
    document.execCommand('insertUnorderedList', false, null)
    let startNode = rh.getSelection().anchorNode
    let row = rh.getRow(startNode)
    let s = rh.getSelection()

    // startNode is edit zone
    if (!row) return

    row = rh.createWrapperForInline(row, constant.ROW_TAG)

    if (row) {
      // let ul be a row
      let maybeIsUl = row.firstElementChild
      if (maybeIsUl && maybeIsUl.nodeName === 'UL' && row.nodeName !== 'UL') {
        row.parentNode.replaceChild(maybeIsUl, row)
        row = maybeIsUl
      }

      // remove br
      if (row.nextSibling && row.nextSibling.nodeName === 'BR') {
        row.nextSibling.parentNode.removeChild(row.nextSibling)
      }

      // special treatment for ul>li, to let module inspect run
      // if ul and ol is bind into a module's tab, this should be change
      if (s.isCollapsed && !rh.editor.modulesMap['ul'].moduleInspectResult) {
        commands['insertHTML'](rh, '&#8203;')
      }
      return
    } else {
      let startNode = rh.getSelection().anchorNode
      if (startNode === rh.editZone()) {
        row = rh.newRow({br: true})
        commands['insertHTML'](rh, row.outerHTML)
      }
    }
  },
  'insertOrderedList' (rh, arg) {
    // do not insert ul into a row
    document.execCommand('insertOrderedList', false, null)
    let s = rh.getSelection()
    let startNode = rh.getSelection().anchorNode
    let row = rh.getRow(startNode)

    // startNode is edit zone
    if (!row) return

    row = rh.createWrapperForInline(row, constant.ROW_TAG)

    if (row) {
      // let ul be a row
      let maybeIsUl = row.firstElementChild
      if (maybeIsUl && maybeIsUl.nodeName === 'OL' && row.nodeName !== 'OL') {
        row.parentNode.replaceChild(maybeIsUl, row)
        row = maybeIsUl
      }

      // remove br
      if (row.nextSibling && row.nextSibling.nodeName === 'BR') {
        row.nextSibling.parentNode.removeChild(row.nextSibling)
      }

      // special treatment for ul>li, to let module inspect run
      // if ul and ol is bind into a module's tab, this should be change
      if (s.isCollapsed && !rh.editor.modulesMap['ol'].moduleInspectResult) {
        commands['insertHTML'](rh, '&#8203;')
      }
      return
    } else {
      let startNode = rh.getSelection().anchorNode
      if (startNode === rh.editZone()) {
        row = rh.newRow({br: true})
        commands['insertHTML'](rh, row.outerHTML)
      }
    }
  }
}
commands.insertImage = insertImage
commands.fontSize = fontSize
commands.delete = deleteModule
commands.paste = paste
commands.enter = enter
commands.keydown = keydown
commands.underline = underline
commands.strikeThrough = strikeThrough
commands.bold = bold
commands.italic = italic
commands.justifyLeft = justifyLeft
commands.justifyCenter = justifyCenter
commands.justifyRight = justifyRight
Object.assign(commands, quote, todo)

export default commands
