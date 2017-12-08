export default {
  name: 'ol',
  icon: 'fa fa-list-ol',
  handler: function (rh) {
    rh.editor.execCommand('insertOrderedList')
  },
  inspect (add) {
    add('tag', 'OL')
  }
}
