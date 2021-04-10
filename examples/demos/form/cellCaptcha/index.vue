<template>
  <div>
    <t-cell-captcha
      value="123"
      @onSendCaptcha="onSendCaptcha"
      maxlength="6"
      type="password"
      placeholder="请输入"
    ></t-cell-captcha>
    <t-cell-captcha
      @onSendCaptcha="onSendCaptcha"
      captchaWidth="120px"
      label="验证码"
    ></t-cell-captcha>
    <t-cell-captcha
      @onSendCaptcha="onSendCaptcha"
      captchaStatus1Text="我要验证码"
      captchaStatus2Text="正在发送("
      captchaStatus2TextSuffix=")"
      captchaStatus3Text="重新发送"
      captchaBorder="1px solid #AC9374"
      captchaColor="#AC9374"
      label="验证码"
    ></t-cell-captcha>
  </div>
</template>
<script>
import { TCellCaptcha } from "packages/inter";
export default {
  components: {
    TCellCaptcha
  },
  data() {
    return {};
  },
  methods: {
    onSendCaptcha(func) {
      setTimeout(function() {
        func();
      }, 3000);
    }
  }
};
</script>
<style lang="less" scoped></style>
