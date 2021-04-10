### CmbCellDatePicker

#### 使用指南

```JavaScript
import { CmbCellDatePicker } from '@lw33/tui'
```

#### CmbDatePicker

| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | -----------------------------  | -------- | ------------------------------ |
| label       | 文本框前面的标签                 | String   |                                |
| type        | 时间格式(YYYY-MM-DD, YYYY-MM-DD HH:mm, HH:mm)  | String   | YYYY-MM-DD                    |
| title       | 标题                                    | String   |                     |
| cancelText | 取消文案                                | String   | "取消"                   |
| confirmText| 确定文案                                | String   | "确定"                   |
| startDate   | 限定最小时间                          | String   |  2019-12-13       |
| endDate     | 限定最大时间                          | String   |  2020-12-13       |

##### format格式
YYYY-MM-DD 
YYYY-MM-DD HH-mm
YYYY-MM-DD HH
YYYY-MM-DD A (A代表上午下午)
MM-DD
HH-mm

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onChange  | 改变         | @onChange="onChange"      |
| onShow   | 显示          | @onShow="onShow"      |
| onHide   | 消失          | @onHide="onHide"      |
| onConfirm  | 点击确定      | @onConfirm="onConfirm"      |
| onCancel | 点击取消        | @onCancel="onCancel"    |
