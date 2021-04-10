### TButtonTab

#### 使用指南(待使用)

```vue
import { TButtonTab } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                      | 类型     | 默认值                         |
| ----------- | ------------------------ | -------- | ------------------------------ |
| btnTabArray  | 选项卡数组              |  Array   | ""                              |
| selected     | 选中单位的索引          | Number   | 0                               |
| selectedColor| 选中单位的颜色          | String   | "#565656"                       |


#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| setButtonTabItem  | 选中选项卡   | @setButtonTabItem="(index) => { this.selected = index; }"    | 