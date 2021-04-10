### TConfirm

#### 使用指南

```JavaScript
import { TConfirm } from '@lw33/tui'
```

#### 属性 

| 参数        | 说明                                      | 类型     | 默认值                         |
| ----------- | --------------------------------------| -------- | ------------------------------ |
| isShow       | 是否展示（双向绑定）                     | Boolean   | false                       |
| title       | 标题(原则上不能大于20个字)               | String   |                        |
| content     | 内容,支持html格式                        | String   |                      |
| isShowClose | 是否展示右上角close按钮                 | boolean   | false                  |
| hasHeaderDivide | 是否标题有分割线（两个风格）            | boolean   | false                  |
| confirmText | 确定文案                                | String   | 确定                   |
| cancelText  | 取消文案                                | String   | 取消                   |
| label       | check按钮的文案                         | boolean   | true                   |
| type      | 样式1为一个确定按钮，样式2为取消、确定按钮，样式3为一个单选按钮和确定按钮  | Number   | 


#### 插槽


| 名称        | 说明                          | 
| ----------- | --------------------------   |
| default(默认插槽)  | 内容插槽（confirm中的内容可以换成任意内容）                    |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onShow   | 显示        | @onShow="onShow"      |
| onHide   | 消失        | @onHide="onHide"      |
| onConfirm  | 点击确定      | @onConfirm="onConfirm"      |
| onCancel | 点击取消        | @onCancel="onCancel"    |
| onClose  | 点击关闭        | @onClose="onClose"    |

#### 插件方式改变

```JavaScript
import { TConfirmPlugin } from '@lw33/tui'
let options = {
  title: "样式三",
  content: this.content,
  isShowClose: true,
  label: "不再提示",
  type: 3,
  onConfirm: function(isChecked) {
    console.log("测试：", isChecked);
  }
};
this.$tui.confirm.show(options);
```
