<template>
  <div>
    <h4>默认</h4>
    <div class="container">
      <t-input placeholder="默认" type="password" v-model="result1" @click.native="onClick1"></t-input>
    </div>
    <h4>不能输入</h4>
    <div class="container">
      <t-input placeholder="不能输入" disabled></t-input>
    </div>
    <h4>自定义Class</h4>
    <div class="container">
      <t-input placeholder="默认1" theClass="my-input"></t-input>
    </div>
    <h4>CellInput</h4>
    <t-cell-input placeholder="默认" type="password" v-model="result2" @click.native="onClick2" ></t-cell-input>
  </div>
</template>
<script>
import { TInput, TCellInput } from "packages/inter";
export default {
  components: {
    TInput,
    TCellInput
  },
  data() {
    return {
      isShow: false,
      result1: "",
      result2: ""
    };
  },
  methods: {
    onClick1() {
      console.log("onClick1:", this.result1)
    },
    onClick2() {
      console.log("onClick2:", this.result2)
    },
    onChange(val) {
      console.log("onChange1:", val)
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 46px;
  background-color: white;
  text-align: center;
  line-height: 46px;
}
.my-input {
  height: 36px;
  border-radius: 20px;
  padding-left: 40px;
  padding-right: 40px;
  outline: none;
  background: #ff0 no-repeat 10px center;
  color: #f00;
}
</style>
