export default {
  name: 'bold',
  icon: 'fa fa-bold',
  handler: function (rh) {
    rh.editor.execCommand('bold')
  },
  inspect (add) {
    add('tag', 'STRONG').add('tag', 'B').add('style',{'font-weight': 'bold'})
  }
}
