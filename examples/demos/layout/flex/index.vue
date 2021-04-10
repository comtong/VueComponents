<template>
  <div>
    <t-flex justifyContent="space-between" :gutter="20" direction="row">
      <t-flex-item :flexGrow="1"
        ><div class="item">第一个</div></t-flex-item
      >
      <t-flex-item :flexGrow="2"
        ><div class="item">第二个</div></t-flex-item
      >
      <t-flex-item :flexGrow="2"
        ><div class="item">第三个</div></t-flex-item
      >
    </t-flex>
    <t-flex justifyContent="space-around" :gutter="20" direction="row">
      <t-flex-item><div class="item">第一个</div></t-flex-item>
      <t-flex-item><div class="item">第二个</div></t-flex-item>
      <t-flex-item><div class="item">第三个</div></t-flex-item>
    </t-flex>
  </div>
</template>
<script>
// import * as components from "packages/index";
import { TFlex, TFlexItem } from "packages/inter";
export default {
  components: {
    TFlex,
    TFlexItem
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.item {
  background-color: yellow;
  width: 100%;
}
</style>
