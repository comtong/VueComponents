/**
 * 自测案例
 * 1. 是否展示
 * 2. data传值（类型YYYY-MM-DD，YYYY-MM-DD HH:mm, HH:mm, default值是否有效）
 * 3. title、cancelText、confirmText传值
 * 4. 模拟滑动  // 这个暂时需要手工测试
 * 5. 点击事件的回调onShow、onHide、onConfirm、onCancel、onChoose
 */

import { mount } from "@vue/test-utils";
import { TDatePicker } from "../../../inter";
import Vue from "vue";
Vue.use(TDatePicker);

describe("TDataPicker.vue", () => {
  it("测试title以及取消确定按钮：", () => {
    const wrapper = mount(TDatePicker, {
      propsData: {
        title: "标题",
        cancelText: "测试取消",
        confirmText: "测试确定"
      }
    });
    expect(wrapper.find(".tui-picker_cancel-btn").text()).toBe("测试取消");
    expect(wrapper.find(".tui-picker_confirm-btn").text()).toBe("测试确定");
  });
});
