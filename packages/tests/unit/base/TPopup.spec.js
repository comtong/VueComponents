import { shallowMount, mount } from "@vue/test-utils";
import { TPopup } from "../../../inter";
import Vue from "vue";
Vue.use(TPopup);

describe("TPopup.vue", () => {
  it("测试默认样式：", () => {
    // TODO 后续补充
    const wrapper = shallowMount(TPopup);
    console.log(wrapper);
  });
});
