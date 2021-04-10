<template>
  <div>
    <t-button :title="'点击打开解绑弹窗'" @onClick="onClick"></t-button>

    <t-unbunding-radio
      v-model="show"
      :vpls="vplList"
      @onUnbunding="onUnbunding"
    ></t-unbunding-radio>
  </div>
</template>

<script>
import { TUnbundingRadio, TButton } from "packages/inter";
export default {
  components: { TButton, TUnbundingRadio },
  data: function() {
    return {
      show: false,
      vplList: ["粤B.123456", "粤A.123456"]
    };
  },
  created() {},
  methods: {
    onClick() {
      this.show = true;
    },
    onUnbunding(val) {
      console.log("value", val);
    }
  }
};
</script>

<style scoped lang="less">
.vpl-view {
  width: 90%;
}
</style>
