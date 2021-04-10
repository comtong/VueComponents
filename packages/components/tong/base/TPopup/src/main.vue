<template>
  <transition :name="`tui-popup-animate-${position}`">
    <div
      ref="popupBox"
      v-show="isShow"
      :class="[`tui-popup-${position}`, 'tui-popup-dialog']"
    >
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import TOverlay from "../../TOverlay";
export default {
  name: "t-popup",
  props: {
    isShow: Boolean,
    position: {
      type: String,
      default: "bottom",
      validator(val) {
        if (
          val === "bottom" ||
          val === "top" ||
          val === "left" ||
          val === "right"
        ) {
          return true;
        }
        return console.error(
          "[TUI] TPopup prop:type 使用 时只允许的值为： bottom、top、left、right"
        );
      }
    },
    showOverlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      overlayInstant: null
    };
  },
  watch: {
    isShow(val) {
      if (val) {
        this.openOverlay();
      } else {
        this.closeOverlay();
      }
    }
  },
  mounted() {
    if (this.isShow) {
      this.openOverlay();
    }
  },
  methods: {
    mount(Component, data) {
      const instance = new Vue({
        el: document.createElement("div"),
        props: Component.props,
        render(h) {
          return h(Component, {
            props: this.$props,
            ...data
          });
        }
      });
      const el = this.$refs.popupBox;
      if (el && el.parentNode) {
        el.parentNode.insertBefore(instance.$el, el);
      } else {
        document.body.appendChild(instance.$el);
      }
      return instance;
    },
    openOverlay() {
      if (!this.overlayInstant) {
        this.overlayInstant = this.mount(TOverlay, {
          isTransparent: !this.showOverlay,
          nativeOn: {
            click: () => {
              this.$emit("onClickOverlay", this);
            }
          }
        });
      } else {
        this.overlayInstant.show = true;
      }
      this.$emit("onShow", this);
    },
    closeOverlay() {
      this.overlayInstant.show = false;
      // 这里一旦回调onHide,picker组件的onHide会回调两次
    }
  }
};
</script>
<style lang="less" scoped>
.tui-popup-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #eee;
  z-index: 500;
  transition: transform 0.3s;
  max-height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.tui-popup-left {
  width: auto;
  height: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.tui-popup-right {
  width: auto;
  height: 100%;
  top: 0;
  right: 0;
  bottom: auto;
  left: auto;
}
.tui-popup-top {
  width: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
}
.tui-popup-bottom {
  width: 100%;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
}

.tui-popup-animate-bottom-enter,
.tui-popup-animate-bottom-leave-active {
  transform: translate(0, 100%);
}

.tui-popup-animate-left-enter,
.tui-popup-animate-left-leave-active {
  transform: translate(-100%, 0);
}

.tui-popup-animate-right-enter,
.tui-popup-animate-right-leave-active {
  transform: translate(100%, 0);
}

.tui-popup-animate-top-enter,
.tui-popup-animate-top-leave-active {
  transform: translate(0, -100%);
}
</style>
