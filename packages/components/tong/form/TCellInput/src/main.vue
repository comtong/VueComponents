<template>
  <t-cell :label="label">
    <t-input
      v-bind="$attrs"
      v-on="inputListeners"
      v-model="curValue"
      :textAlign="textAlign"
    ></t-input>
    <div class="tui-right">
      <slot name="right"></slot>
    </div>
  </t-cell>
</template>
<script>
import TCell from "../../../layout/TCell";
import TInput from "../../../feedback/TInput";
export default {
  name: "t-cell-input",
  props: {
    label: String,
    value: [String, Number],
    textAlign: {
      type: String,
      default: "left"
    }
  },
  // 默认情况下，父作用域的不被认作props的特性绑定将会“回退”且作普通的HTML特性作用到子组件的根元素上,
  // 我这里设置为false，那么就需要设置v-bind="$attrs" v-on="inputListeners"
  inheritAttrs: false,
  components: {
    TCell,
    TInput
  },
  data() {
    return {
      curValue: this.value
    };
  },
  computed: {
    inputListeners() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          // vm.clearBtnShow = !!event.target.value;
          console.log("inputListeners:", event)
          vm.$emit("input", event.target ? event.target.value : event);
        }
      });
    }
  },
  watch: {
    value(val) {
      if (val !== this.curValue) {
        this.curValue = val;
      }
    },
    curValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang="less" scoped>
.tui-input-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
