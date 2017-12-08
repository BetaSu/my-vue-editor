export default {
  name: 'quote',
  icon: 'fa fa-quote-right',
  show: true,
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
