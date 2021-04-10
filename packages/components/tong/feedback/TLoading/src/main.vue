<template>
  <div class="tui-loading">
    <transition name="fade">
      <div v-if="showLoading">
        <div class="tui-loading__mask--transparent"></div>
        <div class="tui-loading-toast">
          <div class="tui-loading-icon">
            <img src="~img/icon_loading.png" width="38" height="38" />
          </div>
          <p class="text">{{ text }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "t-loading",
  props: {
    text: {
      type: String,
      default: "Loading"
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show() {
      this.showLoading = true;
    },
    close() {
      this.showLoading = false;
    }
  }
};
</script>
<style lang="less" scoped>
.tui-loading {
  .tui-loading__mask--transparent {
    position: fixed;
    z-index: 5000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .tui-loading-toast {
    position: fixed;
    z-index: 5000;
    width: 100px;
    height: 100px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.7);
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .tui-loading-icon {
      min-height: 66px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }
    img {
      animation: rotate 1.2s linear infinite;
    }
    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .text {
      font-size: 15px;
    }
  }
}
</style>
