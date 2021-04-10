### TScroller

#### 使用指南

```JavaScript
import { TScroller } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | ------------------------------ | -------- | ------------------------------ |
| stretch     | 拉伸范围                       | Number   |   100                          |
| threshold   | 距离底部多远开始加载            | Number   |   100                          |
| pulldownTxt | 下拉刷新文案                   | String   |   下拉刷新                      |
| isLoading   | 是否处于加载中                 | Boolean  |  false                         | 
| isUnMore    | 是否没有更多了（需要自己判断）   | Boolean  |   true                         |
| unloadMoreTxt | 没有更多数据展示的文案        | Boolean  |  没有更多了                       |   
| scrollTo    | 滚动到指定位置，只能设置为负数   | Number  |  1                       |   
 
#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| loadMore   | 上拉加载回调    | @loadMore="loadMore"      |
| pulldown   | 下拉刷新回调    | @pulldown="pulldown"      |
| scrollToCbk | 与scrollTo配合，回调事件    | @scrollToCbk="scrollToCbk" |