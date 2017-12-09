import commands from './index'
import constant from '../constant-config'

const t = {
  'todo' (rh, data) {
    let row = rh.newRow({
      br: true
    })
    let curRow = rh.getRow(rh.range.commonAncestorContainer)
    
    // a empty row without row element, create a row element
    if (!curRow) {
      let v = rh.newRow()
      let newRow = rh.newRow({br: true})
      v.appendChild(newRow)
      commands.insertHTML(rh, newRow.outerHTML)
      let s = rh.getSelection()
      curRow = s.focusNode
    }

    // insert todo after this row
    let afterWhich = rh.getRow(data.insertAfter)

    // is afterWhich is a empty row, just insert todo at current row
    if (afterWhich && rh.isEmptyRow(afterWhich)) {
      afterWhich = null
    }
    if (afterWhich) {
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

      // insert todo at current row if it is empty
      if (rh.isEmptyRow(curRow)) {
        rh.collapseAtRow(curRow)
        row = curRow
      } else {
        rh.range.commonAncestorContainer.appendChild(row, 0)
        rh.getSelection().collapse(row, 0)
      }
    }
    let todoId = rh.createRandomId('todo')
    commands['insertHTML'](rh, `<${constant.ROW_TAG} data-editor-todo=${todoId} contenteditable="false"><input type="checkbox"/><input type="text" placeholder="${data.placeholder}"></${constant.ROW_TAG}><br>`)
    document.querySelector(`[data-editor-todo='${todoId}'] input[type=text]`).focus()
    row.parentNode.removeChild(row)
    t['initTodo'](rh, data)
  },
  // init todo logic
  'initTodo' (rh, data) {
    const checkboxs = document.querySelectorAll('[data-editor-todo]')
    checkboxs.forEach((c, index) => {
      const btn = c.querySelector('[type=checkbox]')
      const ctn = c.querySelector('[type=text]')
      if (c.init) return
      ctnCheckedLogic()

      function ctnCheckedLogic() {
        ctn.value = ctn.value || ctn.getAttribute('data-editor-value')
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
            t['todo'](rh, {
              insertAfter: c,
              placeholder: data.placeholder
            })
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
  }
}

export default t
