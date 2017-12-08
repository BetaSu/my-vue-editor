export default {
  name: 'indent',
  icon: 'fa fa-outdent',
  type: 'fn',
  handler: function (rh) {
    rh.editor.execCommand('outdent')
  }
}
