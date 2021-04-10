### TRadio

#### 使用指南

```JavaScript
import { TRadio, TRadioGroup } from '@lw33/tui'
```
#### TRadio属性

| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | -----------------------------  | -------- | ------------------------------ |
| value       | 该选项的值                    | String   | ""                           |
| label       | 文本内容   |  String   | ""                           |
| disabled    | 是否禁用                         |  boolean  | ""                           |


#### TRadioGroup属性

| 参数        | 说明                        | 类型     | 默认值                         |
| ----------- | --------------------------- | -------- | ------------------------------ |
| value       | 用v-model绑定               | String   | ""                           |
| direction   | 水平或者垂直，可选项为vertical、horizontal              | String   | ""                           |
| disabled    | 是否全部禁用                |  boolean   | ""                           |
| type    | 文字在前还是文字在后,可选项为  labelFirst、labelLast           |  String   | "labelFirst"                           |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onClick  | 点击事件         | @onClick="onClick"      |
| onChange  |改变事件         | @onChange="onChange"      |