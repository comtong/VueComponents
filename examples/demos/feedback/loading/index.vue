<template>
  <div>
    <t-button
      plain
      @onClick="showLoadingByPlugin"
      title="显示loading(2s后关闭)---插件形式"
    ></t-button>
    <div class="cut"></div>
    <t-button
      plain
      @onClick="showLoadingByComponent"
      title="显示loading(2s后关闭)----组件形式"
    ></t-button>
    <t-loading :showLoading="showLoading"></t-loading>
  </div>
</template>
<script>
import { TLoading, TButton } from "packages/inter";
import { setTimeout } from "timers";

export default {
  components: {
    TButton,
    TLoading
  },
  data() {
    return {
      showLoading: false
    };
  },
  methods: {
    showLoadingByPlugin() {
      this.$tui.loading.show({
        text: "加载中..."
      });
      setTimeout(() => {
        this.$tui.loading.close();
      }, 2000);
    },
    showLoadingByComponent() {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
      }, 2000);
    }
  }
};
</script>
<style lang="less" scoped>
.cut {
  margin-top: 10px;
}
</style>
