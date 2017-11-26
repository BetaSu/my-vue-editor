/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'hr',
    icon: 'fa fa-minus',
    i18n: 'hr',
    handler(rh) {
        rh.editor.execCommand('insertHorizontalRule')
    }
    // init (editor) {
    //
    // },
    // destroyed(editor){
    //
    // },
}
