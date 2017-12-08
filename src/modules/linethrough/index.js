export default {
  name: 'linethrough',
  icon: 'fa fa-strikethrough',
  handler: function (rh) {
    rh.editor.execCommand('strikeThrough')
  },
  inspect (add) {
    add('tag', 'STRIKE').add('style', {'text-decoration-line': 'line-through'})
  }
}
