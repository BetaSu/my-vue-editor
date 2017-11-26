export default {
  name: 'linethrough',
  icon: 'iui-icon iui-icon-linethrough',
  handler: function (rh) {
    rh.editor.execCommand('strikeThrough')
  },
  inspect (add) {
    add('tag', 'STRIKE').add('style', {'text-decoration-line': 'line-through'})
  }
}
