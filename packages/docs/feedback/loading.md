### TLoading

#### 使用指南

```JavaScript
import { TLoading } from '@lw33/tui'
```

#### 属性


| 参数        | 说明                      | 类型     | 默认值                         |
| ----------- | ------------------------ | -------- | ------------------------------ |
| text        | 提示文字                  |  String   | ""                           |
| show        | 显示状态 :show绑定        | boolean   | false                           |
| type        | 样式                     | String   | ""                          |

#### 插件方式展示
```JavaScript
import { TLoadingPlugin } from '@lw33/tui'

Vue.use(TLoadingPlugin)

this.$tui.loading.show()

this.$tui.loading.hide()
```