export default {
  name: 'underline',
  icon: 'iui-icon iui-icon-underline',
  show: true,
  handler: function (rh, module) {
    if (module.moduleInspectResult) {
      module.moduleInspectResult = false
    }
    rh.editor.execCommand('underline')
  },
  inspect (add) {
    add('tag', 'U').add('style', {'text-decoration-line': 'underline'})
  }
}
