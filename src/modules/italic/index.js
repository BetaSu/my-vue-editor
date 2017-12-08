export default {
  name: 'italic',
  icon: 'fa fa-italic',
  handler (rh) {
    rh.editor.execCommand('italic')
  },
  inspect (add) {
    add('tag', 'I').add('style', {'fontStyle': 'italic'})
  }
}
