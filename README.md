# my-vue-editor
基于Vue2.x的富文本编辑器
## demo
<a href="https://betasu.github.io/my-vue-editor/dist/">点击这里查看demo</a>
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

## 事件
| 事件名        | 说明          |
| ------------- |:-------------|
| change      | 当编辑器内容变化时触发，参数为最新当内容 |
| imageUpload  | 上传图片时触发，参数包括图片相应数据，<br>replaceSrcAfterUploadFinish函数（用于当上传成功时将img的src属性由base64格式替换为服务器返回的url）<br>deleteImgWhenUploadFail函数（用于当上传失败时候调用删除当前图片）|
## 自定义模块

