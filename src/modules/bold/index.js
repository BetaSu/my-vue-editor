export default {
  name: 'bold',
  icon: 'iui-icon iui-icon-bold',
  handler: function (rh) {
    rh.editor.execCommand('bold')
  },
  inspect (add) {
    add('tag', 'STRONG').add('tag', 'B').add('style',{'font-weight': 'bold'})
  }
}
