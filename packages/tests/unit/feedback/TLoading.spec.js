import { shallowMount, mount } from "@vue/test-utils";
import { TLoading } from "../../../inter";
// import sinon from 'sinon';
import Vue from "vue";
import { wrap } from "module";
Vue.use(TLoading);

describe("TLoading.vue", () => {
  it("测试默认样式：", () => {
    const wrapper = shallowMount(TLoading);
    expect(wrapper.classes("cmb-loading")).toBe(true);
  });
  it("测试默认加载文案为Loading：", () => {
    const wrapper = shallowMount(TLoading, {
      propsData: {
        showLoading: true
      }
    });
    expect(wrapper.text()).toBe("Loading");
  });
  it("测试修改加载文字：", () => {
    const wrapper = shallowMount(TLoading, {
      propsData: {
        showLoading: true,
        text: "加载中"
      }
    });
    expect(wrapper.text()).toBe("加载中");
  });
  it("测试loading样式：", () => {
    const wrapper = shallowMount(TLoading, {
      propsData: {
        showLoading: true,
        text: "加载中"
      }
    });
    expect(wrapper.contains("img")).toBe(true);
  });
});
