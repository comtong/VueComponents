<template>
  <span class="switch" @click="clickSwitch" type="checkbox" :style="styles">
    <span class="switch-circle"> </span>
  </span>
</template>

<script>
export default {
  name: "t-switch",
  props: {
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
    type: {
      default: "default",
      type: String
    },
    switchOnColor: {
      default: "#565656",
      type: String
    },
    switchOffColor: {
      default: "#fff",
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    ifOpen: function() {
      return this.toBoolean(this.value);
    },
    styles: function() {
      if (this.ifOpen) {
        return {
          backgroundColor: this.switchOnColor,
          justifyContent: "flex-end"
        };
      } else {
        return {
          backgroundColor: this.switchOffColor,
          justifyContent: "flex-start"
        };
      }
    }
  },
  methods: {
    toBoolean(val) {
      if (!this.valueMap) {
        return val;
      } else {
        const index = this.valueMap.indexOf(val);
        return index === 1;
      }
    },
    toRaw(val) {
      if (!this.valueMap) {
        return val;
      } else {
        return this.valueMap[val ? 1 : 0];
      }
    },
    clickSwitch() {
      if (this.disable) {
        return;
      }
      try {
        let value = this.toRaw(!this.ifOpen);
        if (this.type === "default") {
          this.$emit("input", value);
        }
        this.$emit("onChange", value);
      } catch (err) {
        console.error("组件参数设置出错", err);
      }
    },
    changeCurrentValue() {
      this.ifOpen = this.toBoolean(this.value);
    }
  }
};
</script>

<style scoped>
.switch {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  width: 50px;
  height: 30px;
  display: flex;
}
.switch-circle {
  width: 28px;
  border-radius: 15.5px;
  height: 28px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
}
</style>
