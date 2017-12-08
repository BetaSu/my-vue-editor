export default {
  name: 'underline',
  icon: 'fa fa-underline',
  handler (rh) {
    rh.editor.execCommand('underline')
  },
  inspect (add) {
    add('tag', 'U').add('style', {'text-decoration-line': 'underline'})
  }
}
