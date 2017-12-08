/*
 * directive drag and drop pic
 **/

export default {
  bind (el, binding, vnode) {
    let editor = vnode.context
    let onDragOver = e => {
      e.preventDefault()
      const selection = window.getSelection ? window.getSelection() : document.getSelection()
      try {
        selection.collapse(e.target, 1)
      } catch (e) {
        selection.collapse(e.target, 0)
      }
      editor.saveCurrentRange()
      editor.moduleInspect()
    }
    let onDragLeave = e => {
      e.preventDefault()
    }

    let onDrop = e => {
      const selection = window.getSelection ? window.getSelection() : document.getSelection()
      if (e.dataTransfer && e.dataTransfer.files) {
        e.preventDefault()
        console.log(e.target)
        let files = e.dataTransfer.files
        for (let i = 0; i< files.length; i ++) {
          let curFile = files[i]
          if (curFile.size && curFile.type.includes('image')) {
            binding.value(curFile)
          }
        }
      }
    }

    // el.addEventListener('dragenter', onDragEnter, false)
    el.addEventListener('dragover', onDragOver, false)
    el.addEventListener('dragleave', onDragLeave, false)
    el.addEventListener('drop', onDrop, false)

    el.__dragOverHandler = onDragOver
    el.__dragLeaveHandler = onDragLeave
    el.__dropHandler = onDrop
  },
  unbind (el, binding) {
    el.removeEventListener('dragover', el.__dragOverHandler)
    el.removeEventListener('dragleave', el.__dragLeaveHandler)
    el.removeEventListener('drop', el.__dropHandler)
    delete el.__dragOverHandler
    delete el.__dragLeaveHandler
    delete el.__dropHandler
  }
}
