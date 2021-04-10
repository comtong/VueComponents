<template>
  <div class="tui-confirm-confirm-page" v-if="value">
    <div class="tui-confirm-content-container">
      <div class="tui-confirm-title-container">
        该手机号码在ETCP开放平台绑定车牌数量超过限制，请先在ETCP开放平台解绑一张车牌。
      </div>
      <t-radio-group
        v-model="radioValue"
        :direction="'horizontal'"
        :isLabelFirst="false"
        :justifyContent="'flex-start'"
        :type="'labelLast'"
        class="radio-group"
      >
        <t-radio
          class="radio-item"
          v-for="item in vpls"
          :value="item"
          :label="item"
          :key="item"
        />
      </t-radio-group>
      <div class="button-list">
        <t-button
          :title="'取消'"
          :negative="true"
          @onClick="_cancel"
          class="button"
          id="buttonCancel"
        />
        <div style="width:12px;"></div>
        <t-button
          :title="'确定'"
          @onClick="_confirm"
          :disabled="radioValue === ''"
          id="buttonConfirm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TButton from "../../../base/TButton";
import { TRadioGroup, TRadio } from "../../../feedback/TRadio";
export default {
  name: "t-unbunding-radio",
  components: {
    TButton,
    TRadioGroup,
    TRadio
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    vpls: {
      type: Array,
      default: () => []
    },
    defaultVpl: {
      type: String,
      default: ""
    }
  },
  watch: {
    value: function(val) {
      if (val) {
        // 设为不能滚动
        this.noScroll();
      } else {
        // 设为滚动
        this.canScroll();
      }
      if (!val) {
        this.radioValue = "";
      }
    }
  },
  mounted() {},
  methods: {
    _cancel() {
      this.$emit("input", false);
      this.$emit("onCancel");
    },
    _confirm() {
      this.$emit("input", false);
      this.$emit("onUnbunding", this.radioValue);
    },
    mo(e) {
      e.preventDefault();
    },
    noScroll() {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", this.mo, { passive: false });
    },
    canScroll() {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", this.mo);
    }
  },
  data() {
    return {
      radioValue: ""
    };
  }
};
</script>

<style scoped>
.tui-confirm-confirm-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 19999;
}
.tui-confirm-content-container {
  margin: 0 15px;
  padding: 20px;
  width: 100%;
  min-height: 40px;
  background-color: white;
  opacity: 1;
  border-radius: 4px;
  z-index: 20000;
  position: relative;
}
.close_div {
  height: 10px;
}
.tui-confirm-content-container img {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 10px;
  padding: 10px;
  z-index: 30000;
}
.tui-confirm-title-container {
  font-size: 18px;
  position: relative;
  /* font-weight: bold; */
}
.radio-group {
  margin: 7px 0;
}

.radio-item /deep/ .radio-label {
  font-size: 18px !important;
}

.tui-confirm-content {
  padding: 20px 15px 15px 15px;
  text-align: center;
}
.tui-confirm-btns-container {
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
.tui-confirm-sub-btn {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #508cf0;
  border: solid 1px #508cf0;
  border-radius: 4px;
  width: 47%;
}
.tui-confirm-main-btn {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #54b8f4, #5b8ef4);
  color: white;
  border-radius: 4px;
  width: 100%;
}
.tui-confirm-two-btns {
  width: 47% !important;
}
.button-list {
  display: flex;
  justify-content: space-between;
}
.button-list button {
  width: 30%;
}
</style>
