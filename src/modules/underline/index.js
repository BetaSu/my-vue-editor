export default {
  name: 'underline',
  icon: 'iui-icon iui-icon-underline',
  handler: function (rh, module) {
    rh.editor.execCommand('underline')
  },
  inspect (add) {
    add('tag', 'U').add('style', {'text-decoration-line': 'underline'})
  }
}
