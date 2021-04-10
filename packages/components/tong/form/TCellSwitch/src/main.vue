<template>
  <t-cell :label="label" :line="true">
    <t-switch
      v-model="model_value"
      :disable="disable"
      @onChange="_onChange"
      :valueMap="valueMap"
      :type="type"
      :switchOnColor="switchOnColor"
      :switchOffColor="switchOffColor"
    ></t-switch>
  </t-cell>
</template>
<script>
import TCell from "../../../layout/TCell";
import TSwitch from "../../../feedback/TSwitch";
export default {
  props: {
    label: String,
    disable: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    valueMap: {
      default: () => {
        [false, true];
      },
      type: Array
    },
    type: String,
    switchOnColor: String,
    switchOffColor: String
  },
  components: {
    TCell,
    TSwitch
  },
  watch: {
    value(val) {
      this.model_value = val;
    }
  },
  data() {
    return {
      model_value: this.value
    };
  },
  methods: {
    _onChange(val) {
      if (this.type === "default") {
        this.$emit("input", val);
      }
      this.$emit("onChange", val);
    }
  }
};
</script>
<style lang="less" scoped></style>
