export default {
  name: 'itodo',
  icon: 'iui-icon iui-icon-checked-line',
  exclude: 'ALL_BUT_MYSELF',
  mounted (editor) {
    editor.execCommand('initiTodo')
  },
  handler (rh) {
    rh.editor.execCommand('itodo', {
      insertAfter: rh.range.commonAncestorContainer,
      placeholder: '待办事项'
    })
  },
  inspect (add) {
    add('attribute', {
      'data-editor-todo': ''
    })
  }
}
