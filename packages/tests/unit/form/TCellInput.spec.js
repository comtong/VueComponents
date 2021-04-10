// 测试属性 placeholed和readonly这种很难测

import { shallowMount, mount } from "@vue/test-utils";
import { TCellInput } from "../../../inter";
import Vue from "vue";
Vue.use(TCellInput);

describe("TCellInput.vue", () => {
  const wrapper = mount(TCellInput, {});
  it("测试默认样式：", () => {
    wrapper.setProps({ label: "测试标题" });
    return Vue.nextTick().then(function() {
      // expect(wrapper.contains(".tui-confirm")).toBe(true);
      expect(wrapper.find(".tui-cell_title").text()).toBe("测试标题");
    });
  });
});
