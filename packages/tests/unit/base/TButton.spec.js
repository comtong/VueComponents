import { shallowMount, mount } from "@vue/test-utils";
import { TButton } from "../../../inter";
import Vue from "vue";
Vue.use(TButton);

describe("TButton.vue", () => {
  it("测试默认样式：", () => {
    const wrapper = shallowMount(TButton);
    expect(wrapper.classes("tui-button-plain-positive")).toBe(true);
  });
  it("测试属性negative：", () => {
    const wrapper = shallowMount(TButton, {
      propsData: {
        negative: true
      }
    });
    expect(wrapper.classes("tui-button-plain-negative")).toBe(true);
  });
  it("测试属性type：", () => {
    const wrapper = shallowMount(TButton, {
      propsData: {
        type: "black"
      }
    });
    expect(wrapper.classes("tui-button-black-positive")).toBe(true);
  });
  it("测试属性type和negative：", () => {
    const wrapper = shallowMount(TButton, {
      propsData: {
        type: "black",
        negative: true
      }
    });
    expect(wrapper.classes("tui-button-black-negative")).toBe(true);
  });
  it("测试属性mini：", () => {
    const wrapper = shallowMount(TButton, {
      propsData: {
        mini: true
      }
    });
    expect(wrapper.element.style.width).toBe("75px");
  });
  it("测试title：", () => {
    const wrapper = shallowMount(TButton, {
      propsData: {
        title: "标题"
      }
    });
    expect(wrapper.text()).toBe("标题");
  });
  it("测试点击事件onClick", done => {
    let result = 0;
    const Component = {
      template: `
        <t-button @onClick="handleClick"></t-button>
      `,
      methods: {
        handleClick(evt) {
          result = 1;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.find("button").trigger("click");
    // 注意，因为防抖默认点击事件要200毫秒以上才有作用，否则是不起作用的
    setTimeout(_ => {
      expect(result).toBe(1);
      done();
    }, 300);
  });
  it("测试disable", done => {
    let result = 0;
    const Component = {
      template: `
        <t-button @onClick="handleClick" disabled></t-button>
      `,
      methods: {
        handleClick(evt) {
          result = 1;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.find("button").trigger("click");
    // 注意，因为防抖默认点击事件要200毫秒以上才有作用，否则是不起作用的
    setTimeout(_ => {
      expect(result).toBe(0);
      done();
    }, 300);
  });
  it("测试防抖", done => {
    let result = 0;
    const Component = {
      template: `
        <t-button @onClick="handleClick"></t-button>
      `,
      methods: {
        handleClick(evt) {
          result++;
        }
      }
    };
    const wrapper = mount(Component);
    wrapper.find("button").trigger("click");
    wrapper.find("button").trigger("click");
    setTimeout(_ => {
      wrapper.find("button").trigger("click");
      setTimeout(_ => {
        expect(result).toBe(2);
        done();
      }, 300);
    }, 300);
  });
});
