<template>
  <div>
    <div>
      <t-button plain @onClick="onClickThree" title="弹出toast"></t-button>
    </div>
  </div>
</template>
<script>
import { TButton } from "packages/inter";
export default {
  components: {
    TButton
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {},
  methods: {
    onClickThree() {
      this.$tui.toast.show({
        type: "fail",
        text: "哈哈哈哈哈哈哈哈啊哈哈哈",
        time: 2000,
        width: "9rem"
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
