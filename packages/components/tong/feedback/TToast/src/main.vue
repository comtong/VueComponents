<template>
  <div class="tui-toast">
    <transition name="fade">
      <div class="tui-toast-mask" :style="{ width: width }" v-if="showToast">
        <img
          src="~img/icon_toast_success.png"
          width="32"
          height="32"
          v-if="type === 'success'"
        />
        <img
          src="~img/icon_toast_fail.png"
          width="32"
          height="32"
          v-if="type === 'fail'"
        />
        <p>{{ text }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "t-toast",
  props: {
    type: {
      type: String,
      default: "success"
    },
    time: {
      type: Number,
      default: 2000
    },
    text: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "6rem"
    },
    showToast: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show() {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, this.time);
    }
  }
};
</script>
<style lang="less" scoped>
.tui-toast {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .tui-toast-mask {
    position: fixed;
    z-index: 10000;
    width: 100px;
    height: auto;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
