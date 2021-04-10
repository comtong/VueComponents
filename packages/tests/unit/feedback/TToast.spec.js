import { shallowMount, mount } from "@vue/test-utils";
import { TToast } from "../../../inter";
import Vue from "vue";
Vue.use(TToast);

describe("TToast.vue", () => {
  it("测试默认样式：", () => {
    const wrapper = shallowMount(TToast);
    expect(wrapper.classes("cmb-toast")).toBe(true);
  });
  it("测试toast文字：", () => {
    const wrapper = shallowMount(TToast, {
      propsData: {
        showToast: true,
        text: "哈哈"
      }
    });
    expect(wrapper.text()).toBe("哈哈");
  });
});
