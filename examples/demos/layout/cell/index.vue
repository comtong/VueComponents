<template>
  <div>
    <t-cell title="标题" value="内容哈哈哈" :line="true"></t-cell>
  </div>
</template>
<script>
import { TCell } from "packages/inter";

export default {
  components: {
    TCell
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
