### TBanner

#### 使用指南

```vue
import { TBanner } from '@lw33/tui'
```

#### 属性


| 参数        | 说明               | 类型     | 默认值                         |
| ----------- | ------------------ | -------- | ------------------------------ |
| dataList    | 传入的数据        | Array     |                                |
| bannerType  | banner的类型      | String    | 可选类型为primary、noedge，默认primary|

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onBannerClick | 点击事件        | @onBannerClick="handleClick"  |