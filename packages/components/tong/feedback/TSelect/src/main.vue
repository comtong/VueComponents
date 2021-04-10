<template>
  <div class="tui-select">
    <div class="container">
      <div class="input">{{ showValue }}</div>
      <div @click="onChange">
        <t-icon :type="isExtension ? 'up' : 'down'"></t-icon>
      </div>
    </div>
    <transition name="fade">
      <div v-if="isExtension" class="tui-select-popup" @click="close">
        <div class="tui-select-popup_container">
          <div v-if="isShowTitle" class="tui-select-popup_title">
            {{ popupTitle }}
          </div>
          <div
            v-for="(option, index) in options"
            :key="index"
            class="tui-select-popup_item"
            @click="onChooseItem(option, index)"
          >
            <div>{{ option }}</div>
            <t-icon
              :type="chooseIndex === index ? 'radioCheck' : 'radioUncheck'"
              size="20px"
            ></t-icon>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import TIcon from "../../../base/TIcon";
export default {
  components: {
    TIcon
  },
  props: {
    dafaultValue: String,
    popupTitle: String,
    options: Array
  },
  data() {
    return {
      isExtension: false,
      value: undefined,
      isChooseOne: false,
      chooseIndex: 0
    };
  },
  computed: {
    isShowTitle() {
      return this.title && this.title.length > 0;
    },
    showValue() {
      return this.value === undefined ? this.dafaultValue : this.value;
    }
  },
  methods: {
    onChange() {
      this.isExtension = !this.isExtension;
    },
    onChooseItem(option, index) {
      this.value = option;
      this.chooseIndex = index;
      this.$nextTick(() => {
        this.isExtension = false;
        this.$emit("onChooseItem", option);
      });
    },
    close() {
      this.isExtension = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/tui/widget/select.less";
</style>
