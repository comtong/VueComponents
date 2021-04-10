<template>
  <div
    class="tui-radio-group"
    :class="direction === 'vertical' ? 'vertical' : 'horizontal'"
  >
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "t-radio-group",
  props: {
    type: {
      type: String,
      default: "labelFirst"
    },
    direction: {
      type: String,
      default: "vertical"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLabelFirst: {
      type: Boolean,
      default: true
    },
    justifyContent: {
      type: String,
      default: "flex-start"
    },
    value: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      currentValue: this.defaultValue
    };
  },
  mounted() {
    this.$on("onClick", this.onClick);
  },
  methods: {
    onClick(value) {
      if (value !== this.currentValue) {
        this.currentValue = value;
        this.$emit("input", value);
        this.$emit("onChange", value);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.vertical {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.horizontal {
  display: flex;
  flex-direction: column;
}
</style>
