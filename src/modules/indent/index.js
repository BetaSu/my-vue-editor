export default {
  name: 'indent',
  icon: 'iui-icon iui-icon-insert',
  type: 'fn',
  handler: function (rh) {
    rh.editor.execCommand('indent')
  }
}
