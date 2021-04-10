import { shallowMount, mount } from "@vue/test-utils";
import { TGrid, TGridItem } from "../../../inter";
import Vue from "vue";
Vue.use(TGrid);
Vue.use(TGridItem);

const testRadio = `
<div>
  <cmb-grid gutter="20" :col="3" class="grid" showDivider>
  <cmb-grid-item
    label="测试"
    height="100px"
  ></cmb-grid-item>
  </cmb-grid>
</div>
`;

describe("TGrid.vue", () => {
  it("测试属性:label：", () => {
    // let result = 0;
    const Component = {
      data() {
        return {
          itemList: ["测试1", "测试2", "测试3", "测试4", "测试5"]
        };
      },
      components: {
        TGrid,
        TGridItem
      },
      template: testRadio
    };
    const wrapper = mount(Component);
    expect(wrapper.find(".tui-grid-item").text()).toBe("测试");
  });
});
