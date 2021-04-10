### TActionsheet

#### 使用指南

```JavaScript
import { TActionsheet } from '@lw33/tui'
```

#### 属性 


| 参数        | 说明                                      | 类型     | 默认值                         |
| ----------- | --------------------------------------| -------- | ------------------------------ |
| value        | 是否显示（v-model绑定）                 | boolean   | false                      |
| showCancel  | 是否展示cancel                             | boolean   |                      |
| cancelText  | cancel文字                             | String   |                   |
| menus       | 内容数组                                | Array   | []                   |


#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onShow   | 显示        | @onShow="onShow"      |
| onHide   | 消失        | @onHide="onHide"      |
| onClickMenu  | 点击菜单。参数item，当前选中的menu     | @onClickMenu="onClickMenu"      |
| onClickCancel | 点击取消        | @onClickCancel="onClickCancel"    |
| onClickMask | 点击遮罩层        | @onClickMask="onClickMask"    |

#### 插件方式展示
```JavaScript
import { TActionsheetPlugin } from '@lw33/tui'

Vue.use(TActionsheetPlugin)

this.$tui.actionSheet.show({
  showCancel: [Boolean],
  menus: [Array],
  onShow: [Function],
  onHide: [Function],
  onClickMenu: [Function],
  onClickCancel: [Function],
  onClickMask: [Function]
})
```