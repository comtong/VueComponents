<template>
  <t-grid gutter="20">
    <t-grid-item
      v-for="(item, index) in itemList"
      :key="index"
      :label="item"
      height="100px"
    ></t-grid-item>
  </t-grid>
</template>
<script>
export default {
  data() {
    return {
      itemList: ["测试1", "测试2", "测试3", "测试4", "测试5"]
    };
  }
};
</script>
<style lang="less" scoped></style>
