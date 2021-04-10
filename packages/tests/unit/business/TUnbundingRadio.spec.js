import { shallowMount, mount } from "@vue/test-utils";
import { TUnbundingRadio } from "../../../inter";
import Vue from "vue";
Vue.use(TUnbundingRadio);

describe("TUnbundingRadio.vue", () => {
  it("测试属性vpls：", () => {
    let vpls = ["1111", "2222", "3333"];
    const wrapper = shallowMount(TUnbundingRadio, {
      propsData: {
        vpls: vpls
      }
    });
    setTimeout(() => {
      expect(wrapper.findAll(".radio-item")[0].value()).toBe("1111");
    }, 300);
  });
  it("测试方法onUnbunding：", () => {
    let result = 0;
    let vpls = ["1111", "2222", "3333"];
    const Component = {
      template: `
        <cmb-unbunding-radio v-model="show"  @onUnbunding="onUnbunding"></cmb-unbunding-radio>
      `,
      data() {
        return {
          show: false,
          vpls: vpls
        };
      },
      mounted() {
        this.show = true;
      },
      methods: {
        onUnbunding(val) {
          result = val;
        }
      }
    };
    let wrapper = mount(Component);
    setTimeout(() => {
      wrapper.findAll(".tui-radio")[0].trigger("click");
    }, 300);
    setTimeout(() => {
      wrapper.find("#buttonConfirm").trigger("click");
    }, 400);

    setTimeout(() => {
      expect(result).toBe("1111");
    }, 600);
  });
  it("测试方法onCancel：", () => {
    let result = 0;
    let vpls = ["1111", "2222", "3333"];
    const Component = {
      template: `
        <cmb-unbunding-radio v-model="show"  @onCancel="onCancel"></cmb-unbunding-radio>
      `,
      data() {
        return {
          show: false,
          vpls: vpls
        };
      },
      mounted() {
        this.show = true;
      },
      methods: {
        onCancel() {
          result = 1;
        }
      }
    };
    let wrapper = mount(Component);
    setTimeout(() => {
      wrapper.find("#buttonCancel").trigger("click");
    }, 300);

    setTimeout(() => {
      expect(result).toBe(1);
    }, 600);
  });
});
