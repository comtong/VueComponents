<template>
  <t-cell-input
    v-model="value"
    :label="label"
    :textAlign="textAlign"
    v-bind="$attrs"
    v-on="inputListeners"
  >
    <t-captcha
      slot="right"
      @onSendCaptcha="onSendCaptcha"
      :countdownTime="countdownTime"
      :status1Text="captchaStatus1Text"
      :status2Text="captchaStatus2Text"
      :status2TextSuffix="captchaStatus2TextSuffix"
      :status3Text="captchaStatus3Text"
      :border="captchaBorder"
      :borderRadius="captchaBorderRadius"
      :color="captchaColor"
      :width="captchaWidth"
    ></t-captcha>
  </t-cell-input>
</template>
<script>
import { TCaptcha, TCellInput } from "../../../../../inter";
export default {
  name: "t-cell-captcha",
  components: {
    TCellInput,
    TCaptcha
  },
  props: {
    value: String,
    label: String,
    textAlign: {
      type: String,
      default: "left"
    },
    countdownTime: {
      type: Number,
      default: 120
    },
    // 阶段1的文案
    captchaStatus1Text: {
      type: String,
      default: "获取验证码"
    },
    // 阶段2的文案
    captchaStatus2Text: {
      type: String,
      default: "重新获取"
    },
    // 阶段2的文案后缀，比如需要有括号的，那么captchaTextStatusTwo为重新获取（,这个值为）,如此可以灵活变通
    captchaStatus2TextSuffix: {
      type: String,
      default: ""
    },
    // 阶段3的文案
    captchaStatus3Text: {
      type: String,
      default: "重新获取"
    },
    captchaBorder: {
      type: String,
      default: "1px solid #5995ef"
    },
    captchaBorderRadius: {
      type: String,
      default: "4px"
    },
    captchaColor: {
      type: String,
      default: "#5995ef"
    },
    captchaWidth: String
  },
  inheritAttrs: false,
  data() {
    return {};
  },
  computed: {
    inputListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  },
  methods: {
    onSendCaptcha(func) {
      this.$emit("onSendCaptcha", func);
    }
  }
};
</script>
<style lang="less" scoped></style>
