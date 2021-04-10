/**
 * 测试案例
 * 1、 判断属性：stretch、threshold、pulldownTxt、isLoading、loadMoreTxt、loadMoreTxt、scrollTo是否起作用，包括默认值
 * 2、 上拉与下拉加载后的数据刷新
 */

import { shallowMount, mount } from "@vue/test-utils";
import { TScroller } from "../../../inter";
//const TSwitch = components.TSwitch;
import Vue from "vue";
Vue.use(TScroller);

describe("TScroller.vue", () => {
  it("测试Boolean类型属性value的值为true：", () => {
    const wrapper = shallowMount(TScroller, {
      propsData: {
        pulldownTxt: "下拉测试",
        unloadMoreTxt: "没有更多测试"
      }
    });
    expect(wrapper.find(".tui-vert-pulldown-txt").text()).toBe("下拉测试");
    expect(wrapper.find(".tui-vert-unloadmore-txt").text()).toBe(
      "没有更多测试"
    );
  });
});
