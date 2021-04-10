// 1. 属性检查，value、label、textAlign、countdownTime、captchaTextStatusOne、captchaTextStatusTwo、
// captchaTextStatusTwoSuffix、captchaTextStatusThree、captchaStyle是否起作用
// 2. onSendCaptcha()是否回调

import { mount } from "@vue/test-utils";
import { TCellCaptcha } from "../../../inter";
import Vue from "vue";
Vue.use(TCellCaptcha);

describe("TCellCaptcha.vue", () => {
  const wrapper = mount(TCellCaptcha, {});
  it("测试样式：", () => {
    wrapper.setProps({
      label: "测试标题",
      captchaStatus1Text: "测试发送验证码"
    });
    return Vue.nextTick().then(function() {
      expect(wrapper.find(".tui-cell_title").text()).toBe("测试标题");
      expect(wrapper.find(".tui-send_captcha").text()).toBe("测试发送验证码");
    });
  });
  it("测试onSendCaptcha、countdownTime", () => {
    const Component = {
      template: `
      <cmb-cell-captcha
        @onSendCaptcha="onSendCaptcha"
        :countdownTime="90"
        label="验证码"
      ></cmb-cell-captcha>
      `,
      data() {
        return {};
      },
      methods: {
        onSendCaptcha(func) {
          func();
        }
      }
    };
    let wrapper = mount(Component);
    return Vue.nextTick().then(function() {
      wrapper.find(".tui-send_captcha").trigger("click");
      Vue.nextTick(() => {
        expect(wrapper.find(".tui-send_captcha").text()).toBe("重新获取90");
      });
    });
  });
});
