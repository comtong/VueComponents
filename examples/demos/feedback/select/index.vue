<template>
  <t-select
    dafaultValue="123"
    :popupTitle="title"
    :options="options"
    @onChooseItem="onChooseItem"
  ></t-select>
</template>
<script>
import { TSelect } from "packages/inter";
export default {
  components: {
    TSelect
  },
  data() {
    return {
      title: "请选择信用卡",
      options: ["招行信用卡", "建行信用卡", "交行信用卡 "]
    };
  },
  methods: {
    onChooseItem(option) {
      this.$tToast.show({
        type: "fail",
        text: "你选择了" + option,
        time: 2000,
        width: "9rem"
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
