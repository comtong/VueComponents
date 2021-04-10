### TCellCountdown

#### 使用指南

```JavaScript
import { TCellCountdown } from '@lw33/tui'
```

#### 属性

| 参数        | 说明                            | 类型     | 默认值                         |
| ----------- | ------------------------------ | -------- | ------------------------------ |
| countdownTime| 倒计时时间                     | number   |                                |
| status1Text      | 发送验证码前的文案         | String   |  获取验证码                    |
| status2Text      | 正在发送验证码的文案(倒计时会自己加上)   | String   |  重新获取                    |
| status2TextSuffix| 正在发送验证码的文案后缀，主要是因为如果需要括号，比如"重新获取（120）"  | String   |        |
| status3Text    | 发送验证码结束后的文案        | String   |重新获取    |
| border    | 验证码边框样式      | String   |   1px solid #5995ef            |
| borderRadius | 验证码边框圆角      | String   |   4px          |
| color   | 验证码文字颜色      | String   |   #5995ef           |
| width   | 验证码宽度       | String   |   #5995ef           |

补充属性

注： 另外input相关的属性可以直接在此组件上定义，比如maxlength="6"

@onSendCaptcha="onSendCaptcha"

#### Event

| 事件   | 说明             | 例子                      |
| ------ | ---------------- | ------------------------- |
| onSendCaptcha   | 点击发送验证码    | @onSendCaptcha="onSendCaptcha"      |

注：此事件参数是一个函数，需要在发送验证码请求发送后调用，例子如下
```JavaScript
onSendCaptcha(func) {
  setTimeout(function() {
    func();
  }, 3000);
}
```