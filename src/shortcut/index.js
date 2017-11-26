export default {
  outdent: {
    keyCode: 9,
    shiftKey: true,
    handler (editor, e) {
      e.preventDefault()
      editor.execCommand('outdent')
    }
  },
  indent: {
    keyCode: 9,
    handler (editor, e) {
      e.preventDefault()
      editor.execCommand('indent')
    }
  },
  delete: {
    keyCode: 8,
    handler (editor, e) {
      editor.execCommand('delete', e, true)
    }
  },
  enter: {
    keyCode: 13,
    handler (editor, e) {
      editor.execCommand('enter', e, true)
    }
  }
}
