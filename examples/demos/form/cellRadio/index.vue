<template>
  <div>
    <t-cell-radio
      :title="title"
      :options="list"
      @onChange="onChange"
    ></t-cell-radio>
    <div class="radio-container">
      <t-cell-radio :options="list" @onChange="onChange"></t-cell-radio>
    </div>
  </div>
</template>
<script>
import { TCellRadio } from "packages/inter";
export default {
  components: {
    TCellRadio
  },
  data() {
    return {
      title: "请选择",
      list: [
        { value: "100", label: "选择1" },
        { value: "200", label: "选择2" },
        { value: "300", label: "选择3" }
      ]
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
.radio-container {
  margin-top: 20px;
}
</style>
