import lrz from 'lrz'

const insertImage = function (rh, arg) {
  // forbidden logic
  let forbidden = false
  let actives = rh.editor.activeModules
  actives.forEach(name => {
    let module = rh.editor.modulesMap[name]
    if (module && module.exclude && module.exclude.includes('image')) {
      forbidden = true
    }
  })
  if (forbidden) return

  let returnData = {
    origin: arg
  }
  let editor = rh.editor
  let config = editor.modulesMap['image']
  if (!config) {
    throw new Error('image config load fail')
  }
  if (arg instanceof File) {
    handleFile(arg)
  }
  if (typeof arg === 'string') {
    document.execCommand('insertImage', false, arg)
  }

  function handleFile(file) {
    if (config.compress) {
      config.compress.fieldName = config.fieldName || 'image'
      lrz(file, config.compress).then(rst => {
        if (rst.file.size > config.maxSize) {
          Object.assign(returnData, {
            status: 'exceed size limit, after compress',
            statusCode: 3
          }, rst)
          editor.$emit('imageUpload', returnData)
        } else {
          Object.assign(returnData, rst)
          let imgId = rh.createRandomId('img')
          insertBase64(returnData.base64, imgId)
        }
      }).catch(err => {
        Object.assign(returnData, {
          status: err,
          statusCode: 2
        })
        editor.$emit('imageUpload', returnData)
      })
    } else {
      if (file.size > config.maxSize) {
        editor.$emit('imageUpload', Object.assign(returnData, {
          status: 'exceed size limit, without compress',
          statusCode: 3
        }))
      } else {
        let formData = new FormData()
        formData.append(config.fieldName, file, file.name)
        returnData.formData = formData
        const reader = new FileReader()
        reader.onload = (e) => {
          let imgId = rh.createRandomId('img')
          insertBase64(e.target.result, imgId)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  function insertBase64 (base64, id) {
    let dom = `<img src="${base64}" data-editor-img="${id}">`
    if (config.imgOccupyNewRow) {
      let node = rh.range.commonAncestorContainer
      let curRow = rh.forceGetRow(node)
      if (curRow) {
        let sibling = curRow.nextElementSibling
        let newRow = rh.newRow({contenteditable: false})
        newRow.innerHTML = dom
        rh.insertAfter(newRow, curRow)
        if (!sibling) {
          sibling = rh.newRow({br: true})
          rh.insertAfter(sibling, newRow)
        }
        try {
          rh.getSelection().collapse(sibling, 1)
        } catch (e) {
          rh.getSelection().collapse(sibling, 0)
        }
      }
    } else {
      editor.execCommand('insertHTML', dom, true)
    }
    editor.saveCurrentRange()
    editor.$emit('imageUpload', Object.assign(returnData, {
      status: 'everything fine',
      statusCode: 2,
      base64,
      replaceSrcAfterUploadFinish: replaceImg(id),
      deleteImgWhenUploadFail: deleteImg(id)
    }))
  }

  // replace image's base64 src to url after upload finish
  function replaceImg (id) {
    return function (src) {
      let target = document.querySelector(`img[data-editor-img='${id}']`)
      if (target) {
        target.setAttribute('src', src)
        target.removeAttribute('data-editor-img')
        editor.$emit('change', editor.$refs.content.innerHTML)
      }
    }
  }

  // delete image after upload fail
  function deleteImg (id) {
    return function () {
      let target = document.querySelector(`img[data-editor-img='${id}']`)
      if (target) {
        target.parentNode.removeChild(target)
        editor.$emit('change', editor.$refs.content.innerHTML)
      }
    }
  }
}

export default insertImage
