import { shallowMount, mount } from "@vue/test-utils";
import { TActionSheet } from "../../../inter";
import Vue from "vue";
Vue.use(TActionSheet);

describe("TActionSheet.vue", () => {
  it("测试属性show：", () => {
    const wrapper = shallowMount(TActionSheet, {
      propsData: {
        value: true
      }
    });
    setTimeout(() => {
      expect(wrapper.classes("cmb-actionsheet-cover")).toBe(true);
    }, 300);
  });
  it("测试属性showCancel为true：", () => {
    const wrapper = shallowMount(TActionSheet, {
      propsData: {
        showCancel: true
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".item-cancel").text()).toBe("取消");
    }, 300);
  });
  it("测试属性showCancel为false：", () => {
    const wrapper = shallowMount(TActionSheet, {
      propsData: {
        showCancel: false
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".item-cancel").text()).toBe(null);
    }, 300);
  });
  it("测试属性cancelText：", () => {
    const wrapper = shallowMount(TActionSheet, {
      propsData: {
        cancelText: "cancel文字"
      }
    });
    setTimeout(() => {
      expect(wrapper.find(".item-cancel").text()).toBe("cancel文字");
    }, 300);
  });
  it("测试属性menus：", () => {
    let menus = ["第一个", "第二个"];
    const wrapper = shallowMount(TActionSheet, {
      propsData: {
        menus: menus
      }
    });
    setTimeout(() => {
      expect(wrapper.findAll(".item-text")[0].text()).toBe("第一个");
    }, 300);
  });
  it("测试方法onShow：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-action-sheet  v-model="show" @onShow="onShow"></cmb-action-sheet>
      `,
      data() {
        return {
          show: false
        };
      },
      mounted() {
        setTimeout(() => {
          this.show = true;
        }, 300);
      },
      methods: {
        onShow() {
          result = 1;
        }
      }
    };
    mount(Component);
    expect(result).toBe(0);
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试属性onHide：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-action-sheet v-model="show" @onHide="onHide"></cmb-action-sheet>
      `,
      data() {
        return {
          show: true
        };
      },
      mounted() {
        setTimeout(() => {
          this.show = false;
        }, 300);
      },
      methods: {
        onHide() {
          result = 1;
        }
      }
    };
    mount(Component);
    expect(result).toBe(0);
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试属性onClickMenu：", () => {
    let result = 0;
    let menus = ["第一个", "第二个"];
    const Component = {
      template: `
        <cmb-action-sheet v-model="show" :menus="menus" @onClickMenu="onClickMenu"></cmb-action-sheet>
      `,
      data() {
        return {
          show: true,
          menus: menus
        };
      },
      methods: {
        onClickMenu() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    expect(result).toBe(0);
    setTimeout(() => {
      wrapper.find("#第一个").trigger("click");
    }, 300);

    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试属性onClickCancel：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-action-sheet v-model="show" @onClickCancel="onClickCancel"></cmb-action-sheet>
      `,
      data() {
        return {
          show: true
        };
      },
      methods: {
        onClickCancel() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    expect(result).toBe(0);
    wrapper.find(".item-cancel").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
  it("测试属性onClickMask：", () => {
    let result = 0;
    const Component = {
      template: `
        <cmb-action-sheet v-model="show" @onClickMask="onClickMask"></cmb-action-sheet>
      `,
      data() {
        return {
          show: true
        };
      },
      methods: {
        onClickMask() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    expect(result).toBe(0);
    wrapper.find(".cmb-actionsheet-cover").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
});
