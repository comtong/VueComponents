### TSwitch

#### 使用指南

```JavaScript
import { TSwitch } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                      | 类型     | 默认值                         |
| ----------- | ------------------------ | -------- | ------------------------------ |
| label       | 文本内容   |  String   | ""                           |
| type       | 可选参数为：default、passive。值为default时，点击可改变组件value值；值为passive时，该组件为受控组件，组件的value值完全受控于父组件            |  String   | default                           |
| disabled       | 左边标题文字            |  Boolean   | false                           |
| value       | type为default时，用v-model绑定              | String 、Number、Boolean  | false                           |
| valueMap       |               | String   | ""                           |


#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |

| onChange  |改变事件，点击时触发。参数value，与点击前相反            | @onChange="onChange"      |