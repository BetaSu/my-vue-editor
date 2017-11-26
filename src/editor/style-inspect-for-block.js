/*
 * block means module which crate a new element in the position of cursor
 * like todo,quote,image...
 **/
import RH from '../range-handler'

export default {
  todo (node) {
    return node.getAttribute('data-editor-todo') || node.parentNode.getAttribute('data-editor-todo')
  },
  quote (node) {
    return RH.prototype.findSpecialAncestor(node, '[data-editor-quote]')
  }
}
