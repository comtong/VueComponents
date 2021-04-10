### TFlex

#### 使用指南

```JavaScript
import { TFlex, TFlexItem } from '@lw33/tui'
```

#### flex属性


| 参数        | 说明                      | 类型     | 默认值                         |
| ----------- | ------------------------ | -------- | ------------------------------ |
| gutter      | 间隙像素大小              |  number   | 0                           |
| direction   | flex的flex-direction     | String   | 默认row，水平方向，起点在左     |
| justify     | flex的justify-content    | String   | flex-start                     |
| align       | flex的align-items属性     | String   |stretch                     |
| flexWrap    | flex的flex-wrap属性       | boolean  | 默认nowrap                    |

#### flex-item属性


| 参数        | 说明                                | 类型     | 默认值                         |
| ----------- | ----------------------------------- | -------- | ------------------------------ |
| basis       | flex-basis（分配多余空间占据的大小）  |  number   | 0                           |
| order       | 排序（数值月越小越靠前）               | String   | 0     |