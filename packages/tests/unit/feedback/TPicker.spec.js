/**
 * 自测案例
 * 1. 是否展示（第五点onShow回调即可证明，否则v-show不好测）
 * 2. data传值（联动和非联动，default值是否有效）
 * 3. title、cancelText、confirmText传值
 * 4. 模拟滑动  // 这个暂时需要手工测试
 * 5. 点击事件的回调onShow、onHide、onConfirm、onCancel、onChoose
 */

import { shallowMount, mount } from "@vue/test-utils";
import { TPicker } from "../../../inter";
import Vue from "vue";
Vue.use(TPicker);

let listData = [
  ["2019", "2020", "2021", "2022", "2023"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
];
let relationData = new Map();
relationData.set("root", ["中国", "美国", "日本"]);
relationData.set("中国", ["江苏", "浙江", "广东", "河南"]);
relationData.set("美国", ["纽约", "洛杉矶", "华盛顿"]);
relationData.set("日本", ["东京", "北海道", "名古屋"]);
relationData.set("广东", ["深圳", "广州"]);
relationData.set("浙江", ["杭州", "绍兴", "宁波"]);
relationData.set("江苏", ["南京", "苏州", "徐州"]);
relationData.set("纽约", ["纽约"]);
let col = 3;

describe("TPicker.vue", () => {
  it("测试非级联：", () => {
    const wrapper = mount(TPicker, {
      propsData: {
        data: listData
      }
    });
    expect(wrapper.findAll(".tui-picker_list").length).toBe(2);
    expect(wrapper.findAll(".tui-picker_item").length).toBe(17);
  });
  it("测试title以及取消确定按钮：", () => {
    const wrapper = mount(TPicker, {
      propsData: {
        title: "标题",
        cancelText: "测试取消",
        confirmText: "测试确定"
      }
    });
    expect(wrapper.find(".tui-picker_cancel-btn").text()).toBe("测试取消");
    expect(wrapper.find(".tui-picker_confirm-btn").text()).toBe("测试确定");
  });
  it("测试级联：", done => {
    const wrapper = mount(TPicker, {
      propsData: {
        relationData: relationData,
        columns: col,
        show: true
      }
    });
    setTimeout(() => {
      // 等待渲染
      expect(wrapper.findAll(".tui-picker_list").length).toBe(3);
      expect(wrapper.findAll(".tui-picker_item").length).toBe(10);
      done();
    }, 1000);
  });
  it("测试级联的default值：", done => {
    const wrapper = mount(TPicker, {
      propsData: {
        relationData: relationData,
        columns: col,
        show: true,
        defaultValue: ["中国", "广东", "深圳"]
      }
    });
    setTimeout(() => {
      // 等待渲染
      expect(wrapper.findAll(".tui-picker_item").length).toBe(9);
      done();
    }, 1000);
  });
  it("测试onShow、onHide、onCancel", () => {
    // let result = 0;
    let tempShow = true;
    let tempCancel = false;
    const Component = {
      template: `
      <cmb-picker
        title="选择"
        v-model="pickerShow"
        :data="data"
        @onHide="onHide"
        @onCancel="onCancel"
      ></cmb-picker>
      `,
      data() {
        return {
          data: listData,
          pickerShow: true
        };
      },
      methods: {
        onHide() {
          tempShow = false;
        },
        onCancel() {
          tempCancel = true;
        }
      }
    };
    let wrapper = mount(Component);
    return Vue.nextTick().then(function() {
      expect(tempShow).toBe(true);
      wrapper.find(".tui-picker_cancel-btn").trigger("click");
      console.log("tempShow", tempShow);
      expect(tempCancel).toBe(true);
      Vue.nextTick(() => {
        expect(tempShow).toBe(false);
      });
    });
  });
  it("测试onConfirm", done => {
    // let result = 0;
    let tempShow = true;
    let tempConfirm = false;
    const Component = {
      template: `
      <cmb-picker
        title="选择"
        v-model="pickerShow"
        :data="data"
        @onHide="onHide"
        @onConfirm="onConfirm"
      ></cmb-picker>
      `,
      data() {
        return {
          data: listData,
          pickerShow: true
        };
      },
      methods: {
        onHide() {
          tempShow = false;
        },
        onConfirm() {
          tempConfirm = true;
        }
      }
    };
    let wrapper = mount(Component);

    setTimeout(() => {
      expect(tempShow).toBe(true);
      wrapper.find(".tui-picker_confirm-btn").trigger("click");
      expect(tempConfirm).toBe(true);
      Vue.nextTick(() => {
        expect(tempShow).toBe(false);
      });
      done();
    }, 300);
  });
});
