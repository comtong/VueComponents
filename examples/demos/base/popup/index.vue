<template>
  <div>
    <t-button
      @onClick="onClickBottom"
      @onClickOverlay="clickOverlay"
      title="下面"
    ></t-button>
    <t-button
      @onClick="onClickLeft"
      @onClickOverlay="clickOverlay"
      title="左边"
    ></t-button>
    <t-button
      @onClick="onClickRight"
      @onClickOverlay="clickOverlay"
      title="右边"
    ></t-button>
    <t-button
      @onClick="onClickTop"
      @onClickOverlay="clickOverlay"
      title="上面"
    ></t-button>
    <t-popup
      :isShow="show"
      :position="position"
      @onClickOverlay="clickOverlay"
      @onHide="onHide"
    >
      <div class="test-popup">我是新冠病毒，啊!我被消灭了</div></t-popup
    >
  </div>
</template>
<script>
import { TPopup, TButton } from "packages/inter";
export default {
  components: {
    TPopup,
    TButton
  },
  data() {
    return {
      show: false,
      position: "bottom"
    };
  },
  methods: {
    onClickBottom() {
      this.show = true;
      this.position = "bottom";
    },
    onClickLeft() {
      this.show = !this.show;
      this.position = "left";
    },
    onClickRight() {
      this.show = true;
      this.position = "right";
    },
    onClickTop() {
      this.show = true;
      this.position = "top";
    },
    clickOverlay() {
      this.show = false;
      console.log("点击外部");
    },
    onHide() {
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.test-popup {
  background-color: white;
  height: 150px;
}
</style>
