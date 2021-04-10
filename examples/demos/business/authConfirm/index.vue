<template>
  <div>
    <t-button :title="'点击打开授权弹窗'" @onClick="onClick"></t-button>
    <t-auth-confirm
      v-model="show"
      :icon="icon"
      :phone="phone"
      :authType="'normalAuth'"
      :checkNosense="true"
      :vplNumber="vplNumber"
      @onConfirm="onConfirm"
      @onCancel="onCancel"
      @onClickAgreement="onClickAgreement"
    ></t-auth-confirm>
  </div>
</template>

<script>
import { TAuthConfirm, TButton } from "packages/inter";
export default {
  components: { TButton, TAuthConfirm },
  data: function() {
    return {
      show: false,
      icon: require("./assets/icon_default car@2x.png"),
      phone: "135****1234",
      vplNumber: "粤A·036C1"
    };
  },
  created() {},
  methods: {
    onClick() {
      this.show = true;
    },
    onConfirm({ changeNosense }) {
      console.log(changeNosense);
    },
    onCancel() {},
    onClickAgreement() {}
  }
};
</script>

<style scoped lang="less">
.vpl-view {
  width: 90%;
}
</style>
