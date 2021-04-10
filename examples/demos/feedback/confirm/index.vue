<template>
  <div>
    <t-confirm
      v-model="isShow"
      :isShowClose="true"
      title="请选择"
      :content="content"
      :type="1"
    >
    </t-confirm>
    <t-button @onClick="onClick" class="btn">组件方式</t-button>
    <t-confirm
      v-model="isShowTwo"
      :isShowClose="true"
      :hasHeaderDivide="true"
      title="请选择"
      :type="1"
    >
      <template v-slot><div :style="styles">哈哈</div></template>
    </t-confirm>
    <t-button @onClick="onClickHeader" class="btn"
      >组件方式有分割线和插槽</t-button
    >
    <t-button @onClick="onClickOne" class="btn">插件样式1</t-button>
    <t-button @onClick="onClickTwo" class="btn">插件样式2</t-button>
    <t-button @onClick="onClickThree" class="btn">插件样式3</t-button>
  </div>
</template>
<script>
import { TButton, TConfirm } from "packages/inter";

export default {
  components: {
    TConfirm,
    TButton
  },
  data() {
    return {
      isShow: false,
      isShowTwo: false,
      hasHeaderDivide: false,
      styles: { color: "#f00", fontSize: "20px" },
      content:
        "车辆品牌选择、身份证上传、行驶证上传、车牌输入键盘、车牌输入框、地图、城市选择、密码输入框、单图页(空白页、报错页)、数字键盘"
    };
  },
  methods: {
    onClick() {
      this.isShow = true;
    },
    onClickHeader() {
      this.isShowTwo = true;
    },
    onClickOne() {
      let options = {
        title: "样式一",
        content: this.content,
        type: 1
      };
      this.$tui.confirm.show(options);
    },
    onClickTwo() {
      let options = {
        title: "样式二",
        content: this.content,
        type: 2
      };
      this.$tui.confirm.show(options);
    },
    onClickThree() {
      let options = {
        title: "样式三",
        content: this.content,
        isShowClose: true,
        label: "不再提示",
        type: 3,
        onConfirm: function(isChecked) {
          console.log("测试：", isChecked);
        }
      };
      this.$tui.confirm.show(options);
    }
  }
};
</script>
<style lang="less" scoped>
.btn {
  margin: 10px 0;
}
</style>
