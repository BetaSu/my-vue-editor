export default {
  name: 'quote',
  icon: 'iui-icon iui-icon-quote',
  show: true,
  type: 'block',
  mounted (editor) {
    editor.execCommand('initQuote')
  },
  handler: function (rh, module) {
    let isInQuote = rh.editor.activeModules.includes(module.name)
    rh.editor.execCommand('quote', isInQuote)
  },
  inspect (add) {
    add('attribute', {
      'data-editor-quote': ''
    })
  }
}
