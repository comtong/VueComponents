### TPicker

#### 使用指南

```JavaScript
import { TPicker } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                                      | 类型     | 默认值                         |
| ----------- | --------------------------------------| -------- | ------------------------------ |
| show        | 是否展示                                | boolean  | 默认 false                    |
| data        | 非联动具体数据                          | array   | []                    |
| relationData| 联动模式下具体数据                          | array   | []                    |
| columns     | 联动模式下的列数，如果不指定，则表示不联动 | number  |  默认 false                 |
| title       | 标题                                    | String   |                     |
| cancelText | 取消文案                                | String   | "取消"                   |
| confirmText| 确定文案                                | String   | "确定"                   |
| defaultValue| 默认的值                                | Array   | []                  |

##### data格式
```vue
不联动：[ [ "中国","美国","日本" ], [ "陆军","空军","海军" ]]

联动：
let map = new Map();
    map.set("root", ["中国", "美国", "日本"]);
    map.set("中国", ["江苏", "浙江", "广东", "河南"]);
    map.set("美国", ["纽约", "洛杉矶", "华盛顿"]);
    map.set("日本", ["东京", "北海道", "名古屋"]);
    map.set("广州", ["深圳", "广州", "惠州"]);
    map.set("浙江", ["杭州", "绍兴", "宁波"]);
    map.set("江苏", ["南京", "苏州", "徐州"]);
    map.set("纽约", ["纽约"]);
注意：格式必须保持一致
```

##### defaultValue格式
```vue
[ "中国","江苏","南京" ]
```


#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onShow   | 显示        | @onShow="onShow"      |
| onHide   | 消失        | @onHide="onHide"      |
| onConfirm  | 点击确定      | @onConfirm="onConfirm"      |
| onCancel | 点击取消        | @onCancel="onCancel"    |
| onChoose | 每一列选中  | @onChoose="onChoose" |

##### 注意
onChoose 参数依次是self, value, index, chooseValue
onConfirm参数是chooseValue
chooseValue格式与defaultVaule一致
