<template>
  <div class="tui-button-tab">
    <div class="tui-button-tab-container">
      <div
        v-for="(item, index) in btnTabArray"
        :key="index"
        :class="[
          selected === index ? 'tui-button-tab-array-selected' : '',
          'tui-button-tab-array'
        ]"
        :style="[selected === index ? bgColor : color]"
        @click="setButtonTabItem(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: Number,
    btnTabArray: Array,
    selectedColor: String
  },
  computed: {
    color() {
      if (this.selectedColor) {
        return { color: this.selectedColor };
      }
      return {};
    },
    bgColor() {
      if (this.selectedColor) {
        return { backgroundColor: this.selectedColor };
      }
      return {};
    }
  },
  data() {
    return {};
  },
  methods: {
    setButtonTabItem(index) {
      if (this.selected !== index) {
        this.$emit("setButtonTabItem", index);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@borderRadius: 4px;
.tui-button-tab {
  width: 100%;
  height: 100%;
  .tui-button-tab-container {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    // width: 96%;
    // margin: 0 auto;
    .tui-button-tab-array {
      height: 2rem;
      line-height: 2rem;
      width: 100%;
      text-align: center;
      background-color: #ffffff;
      color: #565656;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      &:first-child {
        border-top-left-radius: @borderRadius;
        border-bottom-left-radius: @borderRadius;
      }
      &:last-child {
        border-top-right-radius: @borderRadius;
        border-bottom-right-radius: @borderRadius;
      }
    }
    .tui-button-tab-array-selected {
      background-color: #565656;
      color: #ffffff;
    }
  }
}
</style>
