<template>
  <div
    @click="onSendCaptcha"
    slot="right"
    class="tui-send_captcha"
    :style="[currentCaptchaStyle, styles]"
  >
    <span v-html="captchaText"></span>
  </div>
</template>
<script>
import utils from "../../../../../utils";
export default {
  name: "t-captcha",
  props: {
    countdownTime: {
      type: Number,
      default: 120
    },
    // 阶段1的文案
    status1Text: {
      type: String,
      default: "获取验证码"
    },
    // 阶段2的文案
    status2Text: {
      type: String,
      default: "重新获取"
    },
    // 阶段2的文案后缀，比如需要有括号的，那么captchaTextStatusTwo为重新获取（,这个值为）,如此可以灵活变通
    status2TextSuffix: {
      type: String,
      default: ""
    },
    // 阶段3的文案
    status3Text: {
      type: String,
      default: "重新获取"
    },
    border: {
      type: String,
      default: "1px solid #5995ef"
    },
    borderRadius: {
      type: String,
      default: "4px"
    },
    color: {
      type: String,
      default: "#5995ef"
    },
    width: String
  },
  data() {
    return {
      captchaStatus: 1, // 验证码状态 1 表示未发送， 2 表示已发送，倒计时中 3 表示已发送倒计时结束
      countdown: 0,
      nowTime: 0, //切换到后台时的时刻
      timeGap: 0 //应用在后台的时间长度
    };
  },
  computed: {
    currentCaptchaStyle() {
      return {
        border: this.border,
        borderRadius: this.borderRadius,
        color: this.color
      };
    },
    captchaText() {
      let text = "";
      if (this.captchaStatus === 1) {
        text = this.status1Text;
      } else if (this.captchaStatus === 2) {
        text = this.status2Text + this.countdown + this.status2TextSuffix;
      } else {
        text = this.status3Text;
      }
      return text;
    },
    widthComputed() {
      let maxLength = utils.getCharNum(
        this.status2Text + this.countdownTime + this.status2TextSuffix
      );
      if (maxLength < this.status1Text.length) {
        maxLength = utils.getCharNum(this.status1Text);
      }
      if (maxLength < this.status3Text.length) {
        maxLength = utils.getCharNum(this.status3Text);
      }
      return maxLength / 2 + 1 + "em";
    },
    styles() {
      let width = this.width ? this.width : this.widthComputed;
      if (this.captchaStatus === 2) {
        return {
          width: width,
          opacity: 0.3
        };
      }
      return { width: width };
    }
  },
  methods: {
    onSendCaptcha() {
      if (this.captchaStatus === 1 || this.captchaStatus === 3) {
        this.$emit("onSendCaptcha", () => {
          this.captchaStatus = 2;
          this.countdown = this.countdownTime;
          this.timer = setInterval(() => {
            //当timeGap大于0，说明应用有切换到后台，这时要减去后台时间
            if (this.timeGap > 0) {
              this.countdown = this.countdown - this.timeGap;
              this.timeGap = 0;
            }
            this.countdown--;
            if (this.countdown <= 0) {
              this.finishCaptcha();
            }
          }, 1000);
        });
      }
    },
    finishCaptcha() {
      if (this.timer !== undefined) {
        clearInterval(this.timer);
        this.timer = undefined;
      }
      this.captchaStatus = 3;
      this.countdown = 0;
    },
    //处理后台计时
    backstageTimer() {
      //监听页面是否可见状态
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          //这里写切换到后台的时候要保存的东西
          this.nowTime = new Date().valueOf();
        } else {
          //这里写重后台返回来的时候触发的方法
          this.timeGap = Math.round(
            (new Date().valueOf() - this.nowTime) / 1000
          );
        }
      });
    }
  },
  destroyed() {
    this.finishCaptcha();
  },
  mounted() {
    this.backstageTimer();
  }
};
</script>
<style lang="less" scoped>
.tui-send_captcha {
  height: 30px;
  margin-left: 15px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  span {
    white-space: nowrap;
  }
}
</style>
