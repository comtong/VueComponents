<template>
  <div>
    <p>点击后属性值可变：</p>
    <t-switch
      v-model="model_value"
      :valueMap="['N', 'Y']"
      @onChange="changeMessage"
    >
    </t-switch>
    <p>属性受控：</p>
    <p>随机函数决定点击后是否改变开关值:{{ ifChange }}</p>
    <t-switch
      :type="'passive'"
      :value="msg_switch"
      :valueMap="['N', 'Y']"
      @onChange="randomChange"
    >
    </t-switch>
  </div>
</template>
<script>
import { TSwitch } from "packages/inter";
export default {
  components: {
    TSwitch
  },
  data() {
    return {
      model_value: "Y",
      msg_switch: "Y",
      ifChange: ""
    };
  },
  methods: {
    changeMessage(value) {
      console.log(value);
    },
    randomChange(value) {
      this.ifChange = Boolean(Math.round(Math.random()));
      if (this.ifChange) {
        this.msg_switch = value;
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
