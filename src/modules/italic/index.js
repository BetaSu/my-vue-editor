export default {
  name: 'italic',
  icon: 'iui-icon iui-icon-italic',
  handler (rh) {
    rh.editor.execCommand('italic')
  },
  inspect (add) {
    add('tag', 'I').add('style', {'fontStyle': 'italic'})
  }
}
