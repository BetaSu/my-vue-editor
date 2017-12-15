# my-vue-editor
A rich text editor based on Vue2.x<br>
<a href="https://github.com/BetaSu/my-vue-editor/blob/master/README_CN.md">中文文档</a><br>
## Demo
<a href="https://betasu.github.io/my-vue-editor/dist/index.html">click here to see demo</a><br>
More demo please refer to the example directory
## Introduction
Our editor is based on <a href="https://github.com/PeakTai/vue-html5-editor">vue-html5-editor</a> secondary development. Thanks to its author <a href="https://github.com/PeakTai">PeakTai</a> for providing a concise rich text editor plug-in, on the basis of which we have rewritten the native method and extended the functionality.
## Install
```javascript
npm install my-vue-editor
``` 
Introduced as a plug-in
```javascript
import Vue from 'vue'
import myVueEditor from 'my-vue-editor'
Vue.use(myVueEditor, options)
``` 
Global introduction
```html
<script src="serverpath/vue.js"></script>
<script src="serverpath/dist/my-vue-editor.js"></script>
``` 
Installed by the global variable myVueEditor
 ```javascript
 Vue.use(myVueEditor, options)
 ```
Use
```html
<my-vue-editor :content="content" @change='ctnChange' @imageUpload='imageUpload'></my-vue-editor>
```
## Configuration
 
| Items        | Type           | Description  | 
| ------------- |:-------------:|:-----|
| name      | String | Custom component name, the default is my-vue-editor | 
| modules      | Array | Modules need to use | 
| icons    | Object      | Covering the specified module's icon |
| commands | Object      | Custom command |
| shortcut | Object      | Custom shortcut | 
| extendModules | Array      | Custom module |
| Any built-in module name | Object      | Overwrite the properties of the corresponding built-in module |
### example
```javascript
Vue.use(myVueEditor, {
  // Overlay built-in module's icon
  icons: {
    image: 'iui-icon iui-icon-pic',
    indent: 'iui-icon iui-icon-insert'
  },
  // Modules in use
  modules: [
    'font',
    'bold',
    'italic',
    'underline',
    'linethrough',
    'ul',
    'indent',
    'align',
    'image',
    'quote',
    'todo',
    // This is a custom module
    'customSave'
  ],
  // Overlay image module's configuration
  image: {
    maxSize: 5120 * 1024,
    imgOccupyNewRow: true,
    compress: {
      width: 1600,
      height: 1600,
      quality: 0.8
    }
  },
  // Overlay font module's configuration
  font: {
    config: {
      'xx-large': {
        fontSize: 6,
        name: 'H1'
      },
      'medium': {
        fontSize: 3,
        name: 'H2'
      },
      'small': {
        fontSize: 2,
        name: 'H3'
      },
      default: 'medium'
    },
    // Modify the font module's module inspect mechanism to inspect via style and tag name
    inspect (add) {
      add('style', {
        fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
      }).add('tag', 'font')
    }
  },
  // Overlay ul module's configuration
  ul: {
    // When the ul module is inspected, disabled all but itself
    exclude: 'ALL_BUT_MYSELF',
    // When the ul module is clicked, execute the following method
    handler (rh) {
     console.log('i am ul!')
     rh.editor.execCommand('insertUnorderedList')  
    }
  },
  // When the ul module is inspected, disabled image, todo and ul module
  quote: {
    exclude: ['image', 'todo', 'ul']
  },
  // Customize an command named getAllTexts that prints out all the text nodes under the current range object
  commands: {
    getAllTexts (rh, arg) {
      console.log(rh.getAllTextNodeInRange())
    }
  },
  shortcut: {
    // Custom a shortcut key, when you press the command + s, execute the save function
    saveNote: {
      metaKey: true,
      keyCode: 83,
      handler (editor) {
        save()
      }
    }
  },
  // Customize a module, a alert pops up when you click on the module icon
  extendModules: [{
     name: 'smile',
     icon: 'iui iui-icon-smile'
     handler (rh) {
      alert('smile~~')
     }
  }]
})
```

## Event
| Event name        | Description          |
| ------------- |:-------------|
| change      | Trigger when editor content changes, parameter is up-to-date content data |
| imageUpload  | Trigger when uploading images, parameters include the corresponding data of the image，<br>replaceSrcAfterUploadFinish:Used to replace the src attribute of img from the base64 format to the url returned by the server when the upload is successful）<br>deleteImgWhenUploadFail:Used to delete the current picture when the upload fails|
## Modify the built-in module
Add a parameter with a built-in module's name as it's key, will cover the built-in module's original properties(See all built-in modules and their configuration items in src/modules directory）
### Take the image module as an example
```javascript
Vue.user(myVueEditor, {
  image: {
    // Modify the image module's icon
    icon: 'iui-pic',
    // Cover the original compression parameters, so that the image is not compressed when uploaded
    compress: null,
    // Can not upload the same image repeatedly
    canUploadSameImage: false
  }
})
```
## Cutom module
Extend the module with the extendModules configuration item
We provide some common module configuration items

| Item        | Type          | Description   |
| ------------- |:-------------|:------------|
| name      | String | module's name|
| icon      | String | module icon's className，The fontAwesome icon is used by default|
| exclude      | String Array | disabled modules When current module is inspected<br>When value is 'ALL' means disable all modules include current module<br>When value is'ALL_BUT_MYSELF', means disabled all modules but current module<br>When value is type of Array, Input module name to be disabled|
| inspect      | Function | module inspect，When the cursor is in the list, the list module is highlighted, that is, the list module is inspected, which is based on its UL label as a test basis<br>The first argument to the function is a method named add, which called to add the module's inspection basis. When there are multiple inspection bases, please call chaining<br>The first parameter of the add method indicates what path to test. The optional is 'tag' 'style' and 'attribute'<br>When parameter 1 is 'tag', parameter 2 passes in a tag name string<br>When parameter 1 is 'style', parameter 2 is an object with styleName as key and styleValue as value. Note styleName use the hump form（ex：fontSize），When there are multiple styleValue please use the form of Array<br>When parameter 1 is 'attribute', parameter 2 is an object whose key is attribute name and attribute value is value, and note that if any value is desired, pass in ''（ex：add('attribute', {'data-todo': ''})）|
| handler      | Function | What to do when you click the module<br>Parameter 1 is range-handler instance, through which can you get the Vue instance of the current editor and the method to operate range<br>We do not recommend operating range directly in the handler, but should encapsulate the range action as a command, calling the command via the execCommand method under the editor instance in the handler|
| tab      | Vue instance | Conventional modules use handlers for handling clicks, and if you want to implement UI (drop-down list of font modules) or more complex logic (left-to-right switching of align modules), use tab|
| init      | Function |Corresponds to the editor component life cycle created, the parameter 1 is the editor instance. Note that the execCommand method can not be used at this time|
| mounted      | Function | Corresponds to the editor component life cycle mounted, the parameter 1 is the editor instance.|
| updated      | Function | Corresponds to the editor component life cycle updated, the parameter 1 is the editor instance.|
| destroyed      | Function | Corresponds to the editor component life cycle beforeDestroy, the parameter 1 is the editor instance.|
