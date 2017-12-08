# my-vue-editor
基于Vue2.x的富文本编辑器
## demo
<a href="https://betasu.github.io/my-vue-editor/dist/">点击这里查看demo</a><br>
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
## 配置
 
| 配置项        | 参数类型           | 说明  | 
| ------------- |:-------------:| -----:|
| name      | String | 自定义组件名，默认为my-vue-editor | 
| modules      | Array | 需要引入的内置模块 | 
| icons    | Object      | 覆盖指定模块的Icon |
| commands | Object      | 自定义指令 |
| shortcut | Object      | 自定义快捷键 | 
| extendModules | Array      | 自定义模块 |
| 任何内置模块名 | Object      | 覆盖对应内置模块的属性 |
### 一个例子
```javascript
Vue.user(myVueEditor, {
  // 覆盖内置模块的图标
  icons: {
    image: 'iui-icon iui-icon-pic',
    indent: 'iui-icon iui-icon-insert'
  },
  // 引入的内置模块
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
    'itodo',
    'customSave',
    'customDelete'
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
      })
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
  // 自定义一个名为sayHello的指令
  commands: {
    sayHello (rh, arg) {
      alert('hello!')
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
  }
})
```

## 事件
| 事件名        | 说明          |
| ------------- |:-------------|
| change      | 当编辑器内容变化时触发，参数为最新内容 |
| imageUpload  | 上传图片时触发，参数包括图片相应数据，<br>replaceSrcAfterUploadFinish函数（用于当上传成功时将img的src属性由base64格式替换为服务器返回的url）<br>deleteImgWhenUploadFail函数（用于当上传失败时候调用删除当前图片）|
## 修改内置模块
在配置项中添加以内置模块名（所有内置模块请在源码src/modules目录下查看）为key的参数，将覆盖内置模块的原有属性
### 以image模块为例

      handler (editor) {模块
      handler (editor) {
