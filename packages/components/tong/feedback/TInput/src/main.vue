<template>
  <input :class="classes" v-model="curValue" :style="inputStyle"/>
</template>
<script>
export default {
  name: "t-input",
  model: {
    prop: "value",
    event: "update"
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    theClass: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      curValue: this.value
    };
  },
  computed: {
    // 因为这个是直接input作为最外层，所以也是起作用的，不需要加deep，比如TCellCountdown这个组件，则主要加deep才行
    classes() {
      return this.theClass ? this.theClass : "tui-input";
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
      return {};
    }
  },
  watch: {
    value(val) {
      if (val !== this.curValue) {
        this.curValue = val;
      }
    },
    curValue(val) {
      this.$emit("update", val);
    }
  }
};
</script>
<style lang="less" scoped>
@import "~styles/tui/widget/input.less";
</style>
