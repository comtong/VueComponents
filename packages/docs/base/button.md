### TButton

#### 使用指南

```JavaScript
import { TButton } from '@lw33/tui'
```

#### 属性


| 参数        | 说明               | 类型     | 默认值                         |
| ----------- | ------------------ | -------- | ------------------------------ |
| title       | 按钮名称          | String   |                                |
| type        | 按钮类型          | String   | 可选类型为plain、black，默认plain|
| disabled    | 是否可以点击      | Boolean  | false                           |
| negative    | 是否是消极按钮    | Boolean   | false                         |
| mini        | 是否是小按钮      | Boolean   | false                         |
| isNeedDebounce| 是否需要防抖    | Boolean   | true                           |
| waitTime    | 防抖等待时间      | number    | 100毫秒                        |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onClick | 点击事件        | @onClick="handleClick"  |