### 车牌输入键盘

#### 使用指南

```JavaScript
// 插件形式调用
import { TVplKeyboardPlugin } from '@lw33/tui'
Vue.use(TVplKeyboardPlugin)
```



#### 代码演示

展示带车牌输入框键盘

```JavaScript
const onChangeVplKb = (value, index, newpower) => {
	// 处理改变事件
};
this.$vplkb.show({
    showVplView: true, //显示车牌输入框
    value: '浙A12345',  //初始车牌
    index: 0,           //默认选中位置
    newpower: false,    //是否为新能源车牌
    onChangeVpl: onChangeVplKb,
    version: '2'
});
```



展示键盘（车牌输入框自己实现）

```JavaScript
const onChangeVplKb = (value, index, newpower) => {
	// 处理改变事件
};
this.$vplkb.show({
    showVplView: false, //显示车牌输入框
    value: '浙A12345',  //初始车牌
    index: 0,           //默认选中位置
    newpower: false,    //是否为新能源车牌
    onChangeVpl: onChangeVplKb,
    version: '2'
});
```



#### Options

通过函数调用`$vplkb`时，支持传入以下选项：

| 参数        | 说明               | 类型     | 默认值                         |
| ----------- | ------------------ | -------- | ------------------------------ |
| title       | 车牌输入框标题     | String   | "请输入您的车牌"               |
| buttonTitle | 车牌输入框按钮标题 | String   | "完成"                         |
| showVplView | 是否显示车牌输入框 | Boolean  | true                           |
| kbTitle     | 键盘按钮标题       | String   | "隐藏"                         |
| value       | 当前车牌           | String   | ""                             |
| index       | 当前选中车牌位置   | Number   | 0                              |
| newpower    | 是否为新能源车牌   | Boolean  | false                          |
| onChangeVpl | 输入响应事件       | Function | (value, index, newpower) => {} |
| onCancel    | 取消输入响应事件   | Function | ()=>{}                         |
| onComplete  | 完成输入响应事件   | Function | (value)=>{}                    |
| version     | 键盘版本           | String   | "1"                            |

#### Props
| 参数        | 说明               | 类型     | 默认值                         |
| ----------- | ------------------ | -------- | ------------------------------ |
| title       | 车牌输入框标题     | String   | "请输入您的车牌"               |
| buttonTitle | 车牌输入框按钮标题 | String   | "完成"                         |
| showVplView | 是否显示车牌输入框 | Boolean  | true                           |
| kbTitle     | 键盘按钮标题       | String   | "隐藏"                         |
| value       | 当前车牌           | String   | ""                             |
| index       | 当前选中车牌位置   | Number   | 0                              |
| newpower    | 是否为新能源车牌   | Boolean  | false                          |
| version     | 键盘版本           | String   | "1"                            |


#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| show   | 显示键盘         | this.$vplkb.show(options) |
| hide   | 隐藏键盘         | this.$vplkb.hide()        |
| isShow | 键盘显示状况     | this.$vplkb.isShow()      |
| props  | 直接修改键盘属性 | this.$vplkb.props(props)  |
