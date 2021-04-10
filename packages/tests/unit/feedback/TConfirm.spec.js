// 1. 属性检查，hasHeaderDivide、isShowClose、value、title、content、type、label、cancelText、confirmText是否起作用
// 2. onShow（）、onHide()、onCancel()、onConfirm()、onClose()是否回调

import { mount, shallowMount } from "@vue/test-utils";
import { TConfirm, TButton } from "../../../inter";
import Vue from "vue";
Vue.use(TConfirm);
Vue.use(TButton);

describe("TConfirm.vue", () => {
  const wrapper = mount(TConfirm, {});

  it("测试value可见", () => {
    expect(wrapper.contains(".tui-confirm")).toBe(false);
  });
  it("测试测试默认样式：：", () => {
    wrapper.setProps({ isShow: true });
    return Vue.nextTick().then(function() {
      // 子组件如果是v-if则用现在的，如果是v-show，则需要用wrapper.find('.tui-confirm').isVisible()来判断
      expect(wrapper.contains(".tui-confirm")).toBe(true);
      expect(wrapper.contains(".tui-confirm_header--close")).toBe(false);
      expect(wrapper.contains(".tui-confirm_header--two")).toBe(true);
      expect(wrapper.find(".tui-button-plain-positive").text()).toBe("确定");
    });
  });
  it("测试样式2：", () => {
    wrapper.setProps({
      isShow: true,
      type: 2,
      hasHeaderDivide: true,
      isShowClose: true,
      cancelText: "取消按钮",
      confirmText: "确定按钮"
    });

    return Vue.nextTick().then(function() {
      // 子组件如果是v-if则用现在的，如果是v-show，则需要用wrapper.find('.tui-confirm').isVisible()来判断
      expect(wrapper.contains(".tui-confirm")).toBe(true);
      expect(wrapper.contains(".tui-confirm_header_close")).toBe(true);
      expect(wrapper.contains(".tui-confirm_header--two")).toBe(false);
      expect(wrapper.find(".tui-button-plain-negative").text()).toBe(
        "取消按钮"
      );
      expect(wrapper.find(".tui-button-plain-positive").text()).toBe(
        "确定按钮"
      );
    });
  });
  it("测试样式3：", () => {
    wrapper.setProps({
      isShow: true,
      type: 3,
      label: "选我"
    });
    return Vue.nextTick().then(function() {
      expect(wrapper.contains(".tui-confirm-radio")).toBe(true);
      expect(wrapper.find(".radio-label").text()).toBe("选我");
    });
  });
  it("测试回调方法：", () => {
    // TODO 这块暂时靠人工测试
    // wrapper.find(".tui-button-plain-positive").trigger("click");
    // setTimeout(_ => {
    //   console.log("TDX", wrapper.find(".tui-confirm").isVisible());
    //   done();
    // }, 500);
  });
});
