<template>
  <button
    :class="classes"
    :style="[buttonSize, buttonDisable]"
    @click="_click"
    class="tui-button"
  >
    <slot
      ><div>{{ title }}</div></slot
    >
  </button>
</template>
<script>
export default {
  name: "t-button",
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      default: "plain",
      validator(val) {
        if (val === "plain" || val === "black") {
          return true;
        }
        return console.error(
          "[TUI] Button prop:type 使用 时只允许的值为： plain或black"
        );
      }
    },
    mini: Boolean,
    disabled: Boolean,
    negative: Boolean,
    isNeedDebounce: {
      type: Boolean,
      default: true
    },
    waitTime: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  computed: {
    buttonSize() {
      if (this.mini) {
        return { width: "75px", height: "30px" };
      }
      return { width: "100%", height: "40px" };
    },
    buttonDisable() {
      if (this.disabled) {
        return { opacity: 0.3 };
      }
      return {};
    },
    classes() {
      if (this.type === "plain") {
        return this.negative
          ? "tui-button-plain-negative"
          : "tui-button-plain-positive";
      } else {
        return this.negative
          ? "tui-button-black-negative "
          : "tui-button-black-positive";
      }
    }
  },
  methods: {
    _click() {
      if (this.isNeedDebounce) {
        if (this.timeout !== null) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this._doClick();
        }, this.waitTime);
      } else {
        this._doClick();
      }
    },
    _doClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("onClick");
    }
  }
};
</script>
<style lang="less" scoped>
.tui-button {
  border-width: 0;
  color: #ffffff;
  font-size: 16px;
  outline: 0;
  border-radius: 4px;
}
.tui-button-plain-positive {
  background: linear-gradient(90deg, #54b8f4, #5c78eb);
}
.tui-button-black-positive {
  border: 1px solid #565656;
  background: #565656;
}
.tui-button-black-negative {
  border: 1px solid #565656;
  background: transparent;
  color: #565656;
}
.tui-button-plain-negative {
  border: 1px solid #5995ef;
  background: transparent;
  color: #5995ef;
}
</style>
