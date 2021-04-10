<template>
  <div class="div">
    <t-action-sheet
      v-model="show"
      :showCancel="showCancel"
      :cancelText="'关闭'"
      :menus="menus"
      @onShow="onShow"
      @onHide="onHide"
      @onClickMenu="onClickMenu"
      @onClickCancel="onClickCancel"
      @onClickMask="onClickMask"
    />
    <div>当前show值：{{ show }}</div>
    <div>当前showCancel值：{{ showCancel }}</div>
    <div>当前选择值：{{ value }}</div>
    <button @click="openActionSheet">弹出普通ActionSheet</button>
    <button @click="openPluginActionSheet">弹出plugin版ActionSheet</button>
    <button @click="showCancelTrue">改变showCancel</button>
  </div>
</template>
<script>
import { TActionSheet } from "packages/inter";

export default {
  components: {
    TActionSheet
  },
  data() {
    return {
      menus: ["高德地图", "百度地图", "苹果地图"],
      show: false,
      showCancel: false,
      value: ""
    };
  },
  mounted() {},
  methods: {
    openPluginActionSheet() {
      this.$actionSheet.show({
        showCancel: this.showCancel,
        menus: this.menus,
        onShow: this.onShow,
        onHide: this.onHide,
        onClickMenu: this.onClickMenu,
        onClickCancel: this.onClickCancel,
        onClickMask: this.onClickMask
      });
    },
    openActionSheet() {
      this.show = !this.show;
    },
    showCancelTrue() {
      this.showCancel = !this.showCancel;
    },
    onShow() {
      console.log("onShow");
    },
    onHide() {
      console.log("onHide");
    },
    onClickMenu(item) {
      this.value = item;
      console.log("onClickMenu", item);
    },
    onClickCancel() {
      console.log("onClickCancel");
    },
    onClickMask() {
      console.log("onClickMask");
    }
  }
};
</script>
<style lang="less" scoped>
.div {
  height: 150%;
}
</style>
