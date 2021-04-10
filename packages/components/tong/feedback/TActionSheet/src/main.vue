<template>
  <div v-if="value">
    <div class="tui-actionsheet-cover" @click="clickMask"></div>
    <div class="tui-actionsheet-container">
      <div class="tui-actionsheet-page">
        <div
          :class="
            index === menusLength
              ? 'tui-actionsheet-item-last'
              : 'tui-actionsheet-item'
          "
          :id="item"
          v-for="(item, index) in menus"
          :key="index"
          @click.stop="_confirm(item)"
        >
          <span class="item-text">{{ item }}</span>
        </div>
      </div>
      <div class="tui-actionsheet-cancel" v-if="showCancel">
        <div class="tui-actionsheet-cancle" @click.stop="_cancel">
          <span class="item-cancel">{{ cancelText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "t-action-sheet",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    menus: {
      type: Array,
      default: () => {}
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.$emit("onShow");
      }
    }
  },
  computed: {
    menusLength() {
      return this.menus.length - 1;
    }
  },
  methods: {
    hide() {
      this.$emit("input", !this.value);
      this.$emit("onHide");
    },
    _confirm(item) {
      this.$emit("onClickMenu", item);
      this.hide();
    },
    _cancel() {
      this.$emit("onClickCancel");
      this.hide();
    },
    clickMask() {
      this.$emit("onClickMask");
      this.hide();
    }
  }
};
</script>
<style lang="less" scoped>
.tui-actionsheet-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(75, 75, 75, 0.5);
  z-index: 1000;
}
.tui-actionsheet-container {
  position: fixed;
  bottom: 5px;
  right: 5%;
  left: 5%;
  width: 90%;
  z-index: 19999;
}
.tui-actionsheet-page {
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;
  z-index: 19999;
  .tui-actionsheet-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    border-bottom: 0.5px solid #e9e7e7;
  }
  .tui-actionsheet-item-last {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
  .item-text {
    font-size: 17px;
  }
  .tui-actionsheet-cancle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
}
.tui-actionsheet-cancel {
  margin-top: 5px;
  background: #ffffff;
  flex-direction: column;
  border-radius: 20px;

  .item-cancel {
    color: #3c86f5;
    font-size: 17px;
  }
  .tui-actionsheet-cancle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
  }
}
</style>
