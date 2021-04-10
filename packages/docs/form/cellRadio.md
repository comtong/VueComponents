### TRadio

#### 使用指南

```JavaScript
import { TCellRadio } from '@lw33/tui'
```
#### TRadio属性

| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | -----------------------------  | -------- | ------------------------------ |
| label       | 文本内容   |  String   | ""                           |
| options    | radio数组             |  Array  | []                          |
| defaultValue | 默认值             |  Object  | { type: String, default: "100"}                       |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onChange  |改变事件         | @onChange="onChange"      |