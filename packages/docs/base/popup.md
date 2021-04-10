### TPopup

#### 使用指南

```JavaScript
import { TPopup } from '@lw33/tui'
```

#### 属性


| 参数        | 说明               | 类型     | 默认值                         |
| ----------- | ------------------| -------- | ------------------------------ |
| position    | 出现位置           | String   | 默认为bottom，可选类型为'bottom','top','left','right'|
| show        | 是否展示           | boolean  | 默认 false                    |
| showOverlay  | 是否显示遮罩      | boolean   | 默认 true                    |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| clickOverlay | 遮罩层被点击  | @clickOverlay="clickOverlay"    |