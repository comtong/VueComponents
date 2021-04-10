### TSelect

#### 使用指南

```JavaScript
import { TSelect } from '@lw33/tui'
```

#### TSelect属性

| 参数          | 说明               | 类型     | 默认值                         |
| ------------- | ------------------| -------- | ------------------------------ |
| title         | 标题               | String   |                               |
| cancelText   | 取消的按钮内容      | String  |                               |
| confirmText  | 确定的按钮内容      | String   |                              |
| showHeader   | 是否展示上面的      | boolean | 默认 false                    |
| options       | 选项内容           | Array   | []                           |

#### TSelectItem属性


| 参数          | 说明               | 类型     | 默认值                         |
| ------------- | ------------------| -------- | ------------------------------ |
| disabled      | 是否可选           |  boolean   |    false                           |

#### 插槽


| 名称        | 说明                          | 
| ----------- | --------------------------   |
| select-item  | select的每个选项               |

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onCancel  | 取消        | @onCancel="onCancel"      |
| onConfirm | 确定        | @onConfirm="onConfirm"    |
| onSelectItem | 选择item  | @onSelectItem="onSelectItem" |