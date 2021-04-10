import { shallowMount, mount } from "@vue/test-utils";
import { TAuthConfirm } from "../../../inter";
import Vue from "vue";
Vue.use(TAuthConfirm);

describe("TAuthConfirm.vue", () => {
  it("测试属性phone：", () => {
    let phoneNumber = "123123132";
    const wrapper = shallowMount(TAuthConfirm, {
      propsData: {
        phone: phoneNumber
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".phone").text()).toBe(phoneNumber);
    }, 300);
  });
  it("测试属性vplNumber：", () => {
    let vplNumber = "123123132";
    const wrapper = shallowMount(TAuthConfirm, {
      propsData: {
        phone: vplNumber
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".vpl").text()).toBe(vplNumber);
    }, 300);
  });
  it("测试属性authType为nosenseAuth：", () => {
    let authType = "nosenseAuth";
    const wrapper = shallowMount(TAuthConfirm, {
      propsData: {
        authType: authType
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".text").text()).toBe(
        "获取您的手机号码，绑定车牌，以为您提供停车缴费服务。确定为车牌开通无感支付并授权"
      );
    }, 300);
  });
  it("测试属性authType为normalAuth：", () => {
    let authType = "normalAuth";
    const wrapper = shallowMount(TAuthConfirm, {
      propsData: {
        authType: authType
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".text").text()).toBe(
        "获取您的手机号码，绑定车牌，以为您提供停车缴费服务"
      );
    }, 300);
  });
  it("测试方法onConfirm：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-auth-confirm v-model="show"  @onConfirm="onConfirm"></cmb-auth-confirm>
      `,
      data() {
        return {
          show: false
        };
      },
      mounted() {
        this.show = true;
      },
      methods: {
        onConfirm() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    wrapper.find("#confirmButton").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试方法onCancel：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-auth-confirm v-model="show"  @onCancel="onCancel"></cmb-auth-confirm>
      `,
      data() {
        return {
          show: false
        };
      },
      mounted() {
        this.show = true;
      },
      methods: {
        onCancel() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    wrapper.find("#cancelButton").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试方法onClickAgreement：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-auth-confirm v-model="show"  @onClickAgreement="onClickAgreement"></cmb-auth-confirm>
      `,
      data() {
        return {
          show: false
        };
      },
      mounted() {
        this.show = true;
      },
      methods: {
        onClickAgreement() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    wrapper.find(".agreement-link").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
});
