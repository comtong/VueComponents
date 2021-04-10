import { shallowMount, mount } from "@vue/test-utils";
import { TSwitch } from "../../../inter";
//const TSwitch = components.TSwitch;
import Vue from "vue";
Vue.use(TSwitch);

describe("TSwitch.vue", () => {
  it("测试Boolean类型属性value的值为true：", () => {
    const wrapper = shallowMount(TSwitch, {
      propsData: {
        value: true
      }
    });
    expect(wrapper.classes("switch-on")).toBe(true);
  }),
    it("测试Boolean类型属性value的值为false：", () => {
      const wrapper = shallowMount(TSwitch, {
        propsData: {
          value: false
        }
      });
      expect(wrapper.classes("switch-off")).toBe(true);
    }),
    // it("测试未设置ValueMap时，为value赋String类型的值：", () => {
    //   const wrapper = shallowMount(TSwitch, {
    //     propsData: {
    //       value: "S"
    //     }
    //   });
    //   expect(wrapper.classes("switch-off")).toBe(false);
    //   expect(wrapper.classes("switch-on")).toBe(false);
    // }),
    it("测试String类型属性value的值为ValueMap的第一个值：", () => {
      const wrapper = shallowMount(TSwitch, {
        propsData: {
          value: "U",
          valueMap: ["U", "S"]
        }
      });
      expect(wrapper.classes("switch-off")).toBe(true);
    });
  it("测试String类型属性value的值为ValueMap的第二个值：", () => {
    const wrapper = shallowMount(TSwitch, {
      propsData: {
        value: "S",
        valueMap: ["U", "S"]
      }
    });
    expect(wrapper.classes("switch-on")).toBe(true);
  });
  it("测试type为default：", done => {
    let result = 0;
    const Component = {
      template: `
        <cmb-switch @onChange="handleClick" :type="'default'" v-model="cmbValue" :valueMap="['U','S']"></cmb-switch>
      `,
      data() {
        return {
          cmbValue: "U"
        };
      },
      methods: {
        handleClick(val) {
          result = val;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.find("img").trigger("click");
    // 注意，因为防抖默认点击事件要200毫秒以上才有作用，否则是不起作用的
    setTimeout(() => {
      expect(result).toBe("S");
      expect(wrapper.classes("switch-on")).toBe(true);
      done();
    }, 300);
  });
  it("测试type为passive：", () => {
    let getClickValue = 0;
    let getClickRawValue = "";
    let afterChange = "";
    const Component = {
      template: `
        <div>
        <cmb-switch @onChange="handleClick" :type="'passive'" :value="value" :valueMap="['U','S']"></cmb-switch>
        <button @click="changeValue"></button>
        </div>
        `,
      data() {
        return {
          value: "U"
        };
      },
      methods: {
        handleClick(val) {
          getClickRawValue = this.value;
          getClickValue = val;
        },
        changeValue() {
          this.value = "S";
          afterChange = this.value;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.find("img").trigger("click");

    expect(getClickValue).toBe("S");
    expect(getClickRawValue).toBe("U");
    expect(wrapper.find("img").classes("switch-off")).toBe(true);

    wrapper.find("button").trigger("click");
    expect(afterChange).toBe("S");
    // 因为组件按钮会在下一个周期才能打开，所以延时后测试样式是否改变
    setTimeout(() => {
      expect(wrapper.find("img").classes("switch-on")).toBe(true);
    }, 300);
  });
  it("测试disable", done => {
    let result = 0;
    const Component = {
      template: `
        <cmb-switch @onChange="handleClick" :disabled="true"></cmb-switch>
      `,
      methods: {
        handleClick() {
          result = 1;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.trigger("click");
    // 注意，因为防抖默认点击事件要200毫秒以上才有作用，否则是不起作用的
    setTimeout(() => {
      expect(result).toBe(0);
      done();
    }, 300);
  });
});
