# my-vue-editor
A rich text editor based on Vue2.x
<a href="https://github.com/BetaSu/my-vue-editor/blob/master/README_CN.md">中文文档</a><br>
## demo
<a href="https://betasu.github.io/my-vue-editor/dist/">click here to see demo</a><br>
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
<my-vue-editor @change='ctnChange' @imageUpload='imageUpload'></my-vue-editor>
```
## Configuration
 
| Items        | Type           | Description  | 
| ------------- |:-------------:| -----:|
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
| inspect      | Function | 模块检测，当光标处在列表中时，列表模块高亮，即列表模块被检测到，这是通过其UL标签作为检测依据<br>函数的第一个参数为add方法，通过调用add方法来增加模块的检测依据，当有多个检测依据时请链式调用add<br>add方法第一个参数标示通过什么途径检测，可选'tag' 'style' 'attribute'<br>当参数1为'tag'时，参数2请传入一个标签名字符串<br>当参数1为'style'时，参数2为以styleName为key，styleValue为value的对象。注意styleName请使用驼峰形式（如：fontSize），当styleValue有多个时请使用Array的形式<br>当参数1为'attribute'时，参数2为以attribute名为key，attribute值为value的对象，注意若希望值为任何值都满足时传入''（如：add('attribute', {'data-todo': ''})）|
| handler      | Function | 点击模块时执行的操作<br>参数1为range-handler实例，通过实例可以取得当前编辑器的Vue实例以及操作range的方法<br>我们并不推荐直接在handler中操作range，而是应该将range操作封装为command，在handler中通过编辑器实例下的execCommand方法调用command|
| tab      | Vue instance | 常规的模块使用handler来处理点击，如果你希望实现UI（font模块的下拉列表）或者逻辑更复杂（align模块的左中右切换）的模块，请使用tab|
| init      | Function |对应编辑器组件生命周期的created，参数1为编辑器实例<br>注意这时execCommand方法还不能使用|
| mounted      | Function | 对应编辑器组件生命周期的mounted|
| updated      | Function | 对应编辑器组件生命周期的updated|
| destroyed      | Function | 对应编辑器组件生命周期的beforeDestroy|
