export default {
  name: 'ul',
  icon: 'fa fa-list-ul',
  handler: function (rh) {
    rh.editor.execCommand('insertUnorderedList')
  },
  inspect (add) {
    add('tag', 'UL')
  }
}
