import { mount } from "@vue/test-utils";
import { TRadio, TRadioGroup } from "../../../inter";
import Vue from "vue";
Vue.use(TRadio);
Vue.use(TRadioGroup);
const testRadio = `
<div>
  <cmb-radio-group v-model="value" id="group"  :direction="direction" :disabled="allDisabled" @onChange="onChange" >
    <cmb-radio id="a" :value="'first'" :label="'第一个选项'" :disabled="firstDisabled" @onClick="onClick"></cmb-radio>
    <cmb-radio id="b" :value="'second'" :label="'第二个选项'" @onClick="onClick"></cmb-radio>
    <cmb-radio id="c" :value="'third'" :label="'第三个选项'" @onClick="onClick"></cmb-radio>
  </cmb-radio-group>
</div>
`;
describe("TRadio.vue", () => {
  it("测试TRadioGroup的value可修改：", () => {
    let result = "";
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "",
          allDisabled: false,
          firstDisabled: false
        };
      },
      watch: {
        value: function(val) {
          result = val;
        }
      },
      methods: {
        onChange() {},
        onClick() {}
      }
    };
    const wrapper = mount(Component);
    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe("first");
    }, 20);
  });
  it("测试TRadioGroup的direction值为horizontal：", () => {
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "horizontal",
          allDisabled: false,
          firstDisabled: false
        };
      },
      methods: {
        onChange() {},
        onClick() {}
      }
    };
    const wrapper = mount(Component);
    expect(wrapper.find(".tui-radio-group").classes("horizontal")).toBe(true);
  });
  it("测试TRadioGroup的type值为labelFirst：", () => {
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          type: "labelFirst",
          allDisabled: false,
          direction: "",
          firstDisabled: false
        };
      },
      methods: {
        onChange() {},
        onClick() {}
      }
    };
    const wrapper = mount(Component);
    setTimeout(() => {
      expect(wrapper.find(".tui-radio").classes("label-first")).toBe(true);
    }, 20);
  });
  it("测试TRadioGroup的direction的默认值，vertical：", () => {
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: false,
          firstDisabled: false
        };
      },
      methods: {
        onChange() {},
        onClick() {}
      }
    };
    const wrapper = mount(Component);
    expect(wrapper.find(".tui-radio-group").classes("vertical")).toBe(true);
  });
  it("测试TRadioGroup的onClick事件：", () => {
    let result = 0;
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: false,
          firstDisabled: false
        };
      },
      methods: {
        onClick() {
          result = result + 1;
        },
        onChange() {}
      }
    };
    const wrapper = mount(Component);

    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
      wrapper.find("#b").trigger("click");
      setTimeout(() => {
        expect(result).toBe(2);
        wrapper.find("#c").trigger("click");
        setTimeout(() => {
          expect(result).toBe(3);
        }, 20);
      }, 20);
    }, 20);
  });
  it("测试disable下的onClick事件：", async () => {
    let result = 0;
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: false,
          firstDisabled: true
        };
      },
      methods: {
        onClick() {
          result++;
        },
        onChange() {}
      }
    };
    const wrapper = mount(Component);
    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(0);
      wrapper.find("#b").trigger("click");
      setTimeout(() => {
        expect(result).toBe(1);
        wrapper.find("#c").trigger("click");
        setTimeout(() => {
          expect(result).toBe(2);
        }, 20);
      }, 20);
    }, 20);
  });
  it("测试allDisable下的onClick事件：", async () => {
    let result = 0;
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: true,
          firstDisabled: false
        };
      },
      methods: {
        onClick() {
          result = 1;
        },
        onChange() {}
      }
    };
    const wrapper = mount(Component);

    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(0);
      wrapper.find("#b").trigger("click");
      setTimeout(() => {
        expect(result).toBe(0);
        wrapper.find("#c").trigger("click");
        setTimeout(() => {
          expect(result).toBe(0);
        }, 20);
      }, 20);
    }, 20);
  });
  it("测试TRadio的onChange事件：", async () => {
    let result = 0;
    let getValue = "";
    let getThisValue = "";
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: false,
          firstDisabled: false
        };
      },
      methods: {
        onChange(val) {
          result++;
          getValue = val;
          getThisValue = this.value;
        },
        onClick() {}
      }
    };
    const wrapper = mount(Component);

    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(1);
      expect(getValue).toBe("first");
      expect(getThisValue).toBe("first");
      wrapper.find("#a").trigger("click");
      setTimeout(() => {
        expect(result).toBe(1);
        expect(getValue).toBe("first");
        expect(getThisValue).toBe("first");
        wrapper.find("#b").trigger("click");
        setTimeout(() => {
          expect(result).toBe(2);
          expect(getValue).toBe("second");
          expect(getThisValue).toBe("second");
          wrapper.find("#c").trigger("click");
          setTimeout(() => {
            expect(result).toBe(3);
            expect(getValue).toBe("third");
            expect(getThisValue).toBe("third");
          }, 20);
        }, 20);
      }, 20);
    }, 20);
  });
  it("测试disable下的onChange事件：", async () => {
    let result = 0;
    let getValue = "";
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: false,
          firstDisabled: true
        };
      },
      methods: {
        onChange(val) {
          result++;
          getValue = val;
        },

        onClick() {}
      }
    };
    const wrapper = mount(Component);
    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(0);
      expect(getValue).toBe("second");
      wrapper.find("#b").trigger("click");
      setTimeout(() => {
        expect(result).toBe(0);
        expect(getValue).toBe("second");
        wrapper.find("#c").trigger("click");
        setTimeout(() => {
          expect(result).toBe(1);
          expect(getValue).toBe("third");
        }, 20);
      }, 20);
    }, 20);
  });
  it("测试alldisable下的onChange事件：", async () => {
    let result = 0;
    let getValue = "";
    const Component = {
      template: testRadio,
      data() {
        return {
          value: "second",
          direction: "vertical",
          allDisabled: true,
          firstDisabled: false
        };
      },
      methods: {
        onChange(val) {
          result++;
          getValue = val;
        },

        onClick() {}
      }
    };
    const wrapper = mount(Component);
    wrapper.find("#a").trigger("click");
    setTimeout(() => {
      expect(result).toBe(0);
      expect(getValue).toBe("second");
      wrapper.find("#b").trigger("click");
      setTimeout(() => {
        expect(result).toBe(0);
        expect(getValue).toBe("second");
        wrapper.find("#c").trigger("click");
        setTimeout(() => {
          expect(result).toBe(0);
          expect(getValue).toBe("second");
        }, 20);
      }, 20);
    }, 20);
  });
});
