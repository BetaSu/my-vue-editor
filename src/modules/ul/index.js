export default {
  name: 'ul',
  icon: 'iui-icon iui-icon-list',
  handler: function (rh) {
    rh.editor.execCommand('insertUnorderedList')
  },
  inspect (add) {
    add('tag', 'UL').add('tag', 'LI')
  }
}
