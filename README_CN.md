# my-vue-editor
基于Vue2.x的富文本编辑器<br>
<a href="https://github.com/BetaSu/my-vue-editor/blob/master/README.md">For English</a><br>
## Demo
<a href="https://betasu.github.io/my-vue-editor/dist/index.html">点击这里查看demo</a><br>
更多demo请参考example目录
## 简介
我们的编辑器基于<a href="https://github.com/PeakTai/vue-html5-editor">vue-html5-editor</a>二次开发。感谢其作者<a href="https://github.com/PeakTai">PeakTai</a>提供了一个简洁的富文本编辑器插件，我们在其基础上重写了原生的方法，并扩展了功能。
## 安装
```javascript
npm install my-vue-editor
``` 
作为插件引入
```javascript
import Vue from 'vue'
import myVueEditor from 'my-vue-editor'
Vue.use(myVueEditor, options)
``` 
全局引入
```html
<script src="serverpath/vue.js"></script>
<script src="serverpath/dist/my-vue-editor.js"></script>
``` 
通过全局变量myVueEditor安装
 ```javascript
 Vue.use(myVueEditor, options)
 ```
使用
```html
<my-vue-editor :content="content" @change='ctnChange' @imageUpload='imageUpload'></my-vue-editor>
```
## 配置
 
| 配置项        | 参数类型           | 说明  | 
| ------------- |:-------------:| :-----|
| name      | String | 自定义组件名，默认为my-vue-editor | 
| modules      | Array | 需要使用的模块 | 
| icons    | Object      | 覆盖指定模块的Icon |
| commands | Object      | 自定义指令 |
| shortcut | Object      | 自定义快捷键 | 
| extendModules | Array      | 自定义模块 |
| 任何内置模块名 | Object      | 覆盖对应内置模块的属性 |
### 一个例子
```javascript
Vue.use(myVueEditor, {
  // 覆盖内置模块的图标
  icons: {
    image: 'iui-icon iui-icon-pic',
    indent: 'iui-icon iui-icon-insert'
  },
  // 使用的模块
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
    // 这是一个自定义的模块
    'customSave'
  ],
  // 覆盖image模块的相关配置
  image: {
    maxSize: 5120 * 1024,
    imgOccupyNewRow: true,
    compress: {
      width: 1600,
      height: 1600,
      quality: 0.8
    }
  },
  // 覆盖font模块的相关配置
  font: {
    config: {
      'xx-large': {
        fontSize: 6,
        name: '大号'
      },
      'medium': {
        fontSize: 3,
        name: '中号'
      },
      'small': {
        fontSize: 2,
        name: '小号'
      },
      default: 'medium'
    },
    // 将font模块的模块检测机制修改为通过style的模块检测
    inspect (add) {
      add('style', {
        fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
      }).add('tag', 'font')
    }
  },
  // 覆盖ul模块的相关配置
  ul: {
    // 当ul模块被检测到时，使除了他自己以外其他所有有模块检测机制的模块被禁用
    exclude: 'ALL_BUT_MYSELF',
    // 当ul模块被点击时，执行如下方法
    handler (rh) {
     console.log('i am ul!')
     rh.editor.execCommand('insertUnorderedList')  
    }
  },
  // 当quote模块被检测到时，使image todo ul 这3个模块禁用
  quote: {
    exclude: ['image', 'todo', 'ul']
  },
  // 自定义一个名为getAllTexts的指令，执行时会打印出当前range对象下的所有文本节点
  commands: {
    getAllTexts (rh, arg) {
      console.log(rh.getAllTextNodeInRange())
    }
  },
  shortcut: {
    // 自定义一个保存快捷键，当按下command + s 时，执行save函数
    saveNote: {
      metaKey: true,
      keyCode: 83,
      handler (editor) {
        save()
      }
    }
  },
  // 自定义一个模块，当点击该模块图标时会弹出一个窗口
  extendModules: [{
     name: 'smile',
     icon: 'iui iui-icon-smile'
     handler (rh) {
      alert('smile~~')
     }
  }]
})
```

## 事件
| 事件名        | 说明          |
| ------------- |:-------------|
| change      | 当编辑器内容变化时触发，参数为最新内容 |
| imageUpload  | 上传图片时触发，参数包括图片相应数据，<br>replaceSrcAfterUploadFinish函数（用于当上传成功时将img的src属性由base64格式替换为服务器返回的url）<br>deleteImgWhenUploadFail函数（用于当上传失败时候调用删除当前图片）|
## 修改内置模块
在配置项中添加以内置模块名（所有内置模块及他们的配置项请在源码src/modules目录下查看）为key的参数，将覆盖内置模块的原有属性
### 以image模块为例
```javascript
Vue.user(myVueEditor, {
  image: {
    // 修改image模块的图标
    icon: 'iui-pic',
    // 覆盖原有的压缩参数，时图片上传时不进行压缩
    compress: null,
    // 不能重复上传同一张图片
    canUploadSameImage: false
  }
})
```
## 自定义模块
通过extendModules配置项扩展模块
我们提供一些通用的模块配置项

| 配置项        | 类型          | 说明   |
| ------------- |:-------------|:------------|
| name      | String | 模块的名称|
| icon      | String | 模块图标的className，默认使用fontAwesome图标|
| exclude      | String Array | 当模块被检测到时，需要禁用的模块<br>值为'ALL'表示禁用所有模块，包括自己<br>值为'ALL_BUT_MYSELF'表示禁用除自己以外的所有模块<br>值为Array时，传入需要禁用的模块名|
| inspect      | Function | 模块检测，当光标处在列表中时，列表模块高亮，即列表模块被检测到，这是通过其UL标签作为检测依据<br>函数的第一个参数为add方法，通过调用add方法来增加模块的检测依据，当有多个检测依据时请链式调用add<br>add方法第一个参数标示通过什么途径检测，可选'tag' 'style' 'attribute'<br>当参数1为'tag'时，参数2请传入一个标签名字符串<br>当参数1为'style'时，参数2为以styleName为key，styleValue为value的对象。注意styleName请使用驼峰形式（如：fontSize），当styleValue有多个时请使用Array的形式<br>当参数1为'attribute'时，参数2为以attribute名为key，attribute值为value的对象，注意若希望值为任何值都满足时传入''（如：add('attribute', {'data-todo': ''})）|
| handler      | Function | 点击模块时执行的操作<br>参数1为range-handler实例，通过实例可以取得当前编辑器的Vue实例以及操作range的方法<br>我们并不推荐直接在handler中操作range，而是应该将range操作封装为command，在handler中通过编辑器实例下的execCommand方法调用command|
| tab      | Vue instance | 常规的模块使用handler来处理点击，如果你希望实现UI（font模块的下拉列表）或者逻辑更复杂（align模块的左中右切换）的模块，请使用tab|
| init      | Function |对应编辑器组件生命周期的created，参数1为编辑器实例<br>注意这时execCommand方法还不能使用|
| mounted      | Function | 对应编辑器组件生命周期的mounted|
| updated      | Function | 对应编辑器组件生命周期的updated|
| destroyed      | Function | 对应编辑器组件生命周期的beforeDestroy|
