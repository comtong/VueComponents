### TAuthConfirm

#### 使用指南

```JavaScript
import { TAuthConfirm } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                      | 类型     | 默认值 |
| ----------- | ------------------------ | -------- |------------------------------ |
| value       | v-model绑定，控制组件是否显示            |  String   | ""     |
| icon       | 车牌图标,传入前需先require()            |  String   | ""     |
| phone       | 手机号            |  String   | ""     |
| vplNumber       | 车牌号            |  String   | "" |          
|  authType      |  授权类型："normalAuth"普通授权 "nosenseAuth"开通无感授权        | String   | "nosenseAuth"   |
|  checkNosense      |  是否具有无感开通选项        | Boolean   | false   |



#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onConfirm  |用户点击确认触发          | @onConfirm="onConfirm"      |
| onCancel  |用户点击取消触发          | @onCancel="onCancel"      |
| onClickAgreement  |用户点击协议触发 | @onClickAgreement="onClickAgreement"|