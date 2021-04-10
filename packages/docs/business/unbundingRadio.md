### TUnbundingRadio

#### 使用指南

```JavaScript
import { TUnbundingRadio } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                      | 类型     | 默认值 |
| ----------- | ------------------------ | -------- |------------------------------ |
| vpls      | 车牌号数组            |  Array   | []     |
| value      | v-model绑定，控制组件显示            |  Boolean   | false     |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |

| onUnbunding  |用户点击解绑触发,带参value，表示用户选择的车牌号          | @onUnbunding="onUnbunding"      |
| onCancel  |用户点击取消触发          | @onCancel="onCancel"      |