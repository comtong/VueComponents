<template>
  <div class="tui-radio" :style="styles" @click="onClick">
    <span class="radio-label" v-if="isLabelFirst">{{ label }}</span>
    <img
      :src="
        ifChecked
          ? require('../assets/icon_radio.png')
          : require('../assets/icon_radio_unchecked.png')
      "
      class="radio-img"
    />
    <span class="radio-label" v-if="!isLabelFirst">{{ label }}</span>
  </div>
</template>
<script>
export default {
  name: "t-radio",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    ifChecked() {
      return this.$parent.currentValue === this.value;
    },
    disabledSelf() {
      let allDisabled = this.$parent.disabled;
      return allDisabled || this.disabled;
    },
    isLabelFirst() {
      return this.$parent.isLabelFirst;
    },
    styles() {
      let justifyContent = this.$parent.justifyContent;
      let styles = {
        justifyContent: justifyContent
      };
      return styles;
    }
  },
  methods: {
    onClick() {
      if (!this.disabledSelf) {
        this.$parent.$emit("onClick", this.value);
        this.$emit("onClick", this.value);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tui-radio {
  display: flex;
  align-items: center;
  height: 44px;
}
.radio-label {
  margin: 0 5px;
  font-size: 14px;
  color: #565656;
  line-height: 20px;
}
.radio-img {
  margin: 0 5px;
  width: 22px;
  height: 22px;
}
</style>
