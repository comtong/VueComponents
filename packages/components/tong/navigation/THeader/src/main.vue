<template>
  <div class="tui-header">
    <div class="back" @click="onBackClick">
      <t-icon type="back"></t-icon>
    </div>
    <div class="title">{{ title }}</div>
    <div class="menu"></div>
  </div>
</template>
<script>
import TIcon from "../../../base/TIcon";
export default {
  name: "t-header",
  props: {
    title: String,
    color: String
  },
  components: {
    TIcon
  },
  data() {
    return {};
  },
  methods: {
    onBackClick() {
      this.$emit("onBackClick");
    }
  }
};
</script>
<style lang="less" scoped>
.tui-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  background: white;
  position: fixed;
  font-size: 16px;
  top: 0px;
  z-index: 100;
  .back {
    width: 46px;
    height: 46px;
    text-align: center;
    line-height: 46px;
  }
  .title {
    text-align: center;
    width: auto;
    margin: auto;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .menu {
    width: 46px;
    height: 46px;
  }
}
</style>
