# my-vue-editor
基于Vue2.x的富文本编辑器
## demo
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
| 配置项     | 参数类型| 说明   |例子|
|  modules  |  Array | 需要引入的内置模块 | ['font', 'bold', 'italic', 'underline', 'linethrough',] |
| 张三| 18| 女      |
| 小明| 23| 男      |
 
