<template>
  <transition name="popup-fade">
    <div v-show="show" class="popup-bg" :class="className"></div>
  </transition>
</template>
<script>
export default {
  name: "t-overlay",
  props: {
    show: { type: Boolean, default: true },
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return this.isTransparent ? "popup-bg-trans" : "popup-bg-common";
    }
  }
};
</script>
<style scoped>
.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 499;
}
.popup-bg-common {
  background-color: rgba(0, 0, 0, 0.5);
}
.popup-bg-trans {
  background-color: rgba(0, 0, 0, 0);
}
.popup-fade-enter-active {
  animation: 0.3s tui-fade-in;
}
.popup-fade-leave-active {
  animation: 0.3s tui-fade-out;
}
@keyframes tui-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes tui-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
