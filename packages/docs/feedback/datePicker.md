### TDatePicker

#### 使用指南

```JavaScript
import { TDatePicker } from '@lw33/tui'
```

#### TDatePicker

| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | -----------------------------  | -------- | ------------------------------ |
| type        | 时间格式(YYYY-MM-DD, YYYY-MM-DD HH:mm, HH:mm)  | String   | YYYY-MM-DD                    |
| title       | 标题                                    | String   |                     |
| cancelText | 取消文案                                | String   | "取消"                   |
| confirmText| 确定文案                                | String   | "确定"                   |
| startDate   | 限定最小时间                          | String   |  2019-12-13       |
| endDate     | 限定最大时间                          | String   |  2020-12-13       |

<!-- | minYear    | 最小年份                                | Number   | 1990                   |
| maxYear    | 最大年份                                | Number   | 2030                   |
| minMonth    | 最小月份                                | Number   | 1                   |
| maxMonth    | 最大月份                                | Number   | "12"                   |
| minHour    | 最小小时                                | Number   | 0                   |
| maxHour    | 最大小时                                | Number   | 24                   |
| yearModel   | 年份模板(比如{value}年)               | String   | {value}        |
| monthModel  | 月份模板(比如{value}月)               | String   | {value}        |
| dayModel    | 日期模板(比如{value}日)               | String   | {value}        |
| hourModel   | 小时模板(比如{value}时)               | String   | {value}        |
| minuteModel | 分钟模板(比如{value}分)               | String   | {value}        | -->

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


#### 插件形式
```JavaScript
let option = {
  title: "年月日",
  type: "YYYY-MM-DD",
  defaultValue: "2018-02-03",
  cancelText: "测试取消",
  onConfirm: function(val) {
    console.log("tdx:", val);
  }
};
this.$tui.datePicker.show(option);
```