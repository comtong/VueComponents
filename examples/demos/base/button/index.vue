<template>
  <div>
    <div class="title"><h4>t-button</h4></div>
    <div class="block">
      <t-button
        title="默认样式"
        @onClick="onButtonClick"
        @click.stop="buttonClick"
      ></t-button>
    </div>
    <div class="block">
      <t-button disabled title="不可点击样式"></t-button>
    </div>
    <div class="block">
      <t-button negative title="幽灵按钮模式"></t-button>
    </div>
    <div class="block">
      <t-button negative disabled title="幽灵按钮不可点击"></t-button>
    </div>
    <div class="group">
      <div class="btn">
        <t-button negative title="取消"></t-button>
      </div>
      <div class="btn">
        <t-button title="确定"></t-button>
      </div>
    </div>
    <div class="group">
      <div class="btn">
        <t-button negative type="black" title="取消"></t-button>
      </div>
      <div class="btn">
        <t-button type="black" title="确定"></t-button>
      </div>
    </div>
  </div>
</template>
<script>
// 这个地方想办法直接从package的index中引入
import { TButton } from "packages/inter";
export default {
  components: {
    TButton
  },
  data() {
    return {};
  },
  methods: {
    onButtonClick() {
      this.$tui.toast.show({
        text: "点击111"
      });
    },
    buttonClick() {
      this.$tToast.show({
        text: "点击222"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  margin-left: 15px;
}
.block {
  margin-top: 20px;
  padding: 0 15px;
}
.group {
  margin-top: 20px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  .btn {
    width: calc((100% - 15px) / 2);
  }
}
</style>
