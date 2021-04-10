<template>
  <t-popup :isShow="value" @onClickOverlay="onClickOverlay">
    <div class="popup">
      <h4 class="title">
        <img
          class="title-icon"
          src="./assets/icon_logo@2x.png"
        />授权北京悦畅科技有限公司(ETCP)
      </h4>
      <p class="text" v-if="authType === 'nosenseAuth'">
        获取您的手机号码，绑定车牌，以为您提供停车缴费服务。确定为车牌{{
          vplNumber
        }}开通无感支付并授权？
      </p>
      <p class="text" v-if="authType === 'normalAuth'">
        获取您的手机号码，绑定车牌，以为您提供停车缴费服务
      </p>
      <div class="line"></div>
      <div class="user-info">
        <img :src="icon" class="vpl-icon" />
        <div>
          <p class="vpl">{{ vplNumber }}</p>
          <p class="phone">{{ phone }}</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="agreement">
        确定即代表您同意<span @click="clickAgreement" class="agreement-link"
          >《ETCP停车用户服务协议》</span
        >
      </div>
      <div v-if="checkNosense" @click="changeIfOpenNosense" class="agreement">
        <img :src="checkNosenseIcon" class="check-icon" />
        <span>同时开通ETCP停车场的一网通无感支付</span>
      </div>
      <div class="button-list">
        <t-button
          :title="'取消'"
          :negative="true"
          @onClick="clickCancel"
          class="button"
          id="cancelButton"
        />
        <div style="width:12px;"></div>
        <t-button
          :title="'确定'"
          id="confirmButton"
          @onClick="clickConfirm"
        />
      </div>
    </div>
  </t-popup>
</template>

<script>
import TPopup from "../../../base/TPopup";
import TButton from "../../../base/TButton";
export default {
  name: "t-auth-confirm",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    vplNumber: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    authType: {
      type: String,
      default: "nosenseAuth"
    },
    checkNosense: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      if (val) {
        // 设为不能滚动
        this.noScroll();
      } else {
        // 关闭组件时数据初始化
        this.ifOpenNosense = true;
        // 设为滚动
        this.canScroll();
      }
    }
  },
  //在页面跳转（销毁）之前，设置页面整体可以滑动
  beforeDestroy() {
    // 关闭组件时数据初始化
    this.ifOpenNosense = true;
    // 设为滚动
    this.canScroll();
  },
  components: {
    TPopup,
    TButton
  },
  computed: {
    checkNosenseIcon() {
      if (this.ifOpenNosense) {
        return require("./assets/select2@2X.png");
      } else {
        return require("./assets/unchecked2@2X.png");
      }
    }
  },
  mounted() {},
  methods: {
    onClickOverlay() {
      this.$emit("input", false);
      this.$emit("onCancel");
    },
    clickCancel() {
      this.$emit("input", false);
      this.$emit("onCancel");
    },
    clickConfirm() {
      this.$emit("input", false);
      if (this.checkNosense) {
        this.$emit("onConfirm", { changeNosense: this.ifOpenNosense });
      } else {
        this.$emit("onConfirm");
      }
    },
    clickAgreement() {
      this.$emit("input", false);
      this.$emit("onClickAgreement");
    },
    changeIfOpenNosense() {
      this.ifOpenNosense = !this.ifOpenNosense;
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
      ifOpenNosense: true
    };
  }
};
</script>
<style scoped lang="less">
.popup {
  background-color: white;
  padding: 0 15px;
}
.tui-popup-dialog {
  background-color: white;
}
.title {
  margin: 15px 0 10px 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  .title-icon {
    width: 21px;
    height: 21px;
    margin-right: 10px;
  }
}

.text {
  font-size: 16px;
  color: #383838;
  letter-spacing: 0;
  line-height: 24px;
  margin: 0 0 11px 0;
  font-weight: 600;
}
.line {
  border: 0.5px solid #e5e5e5;
  margin-bottom: 10px;
}
.user-info {
  display: flex;
  margin: 10px 0;
  .vpl-icon {
    width: 36px;
    height: 36px;
    margin-right: 15px;
  }
  p {
    margin: 0;
  }
  .vpl {
    font-size: 16px;
    color: #000000;
    line-height: 1;
    font-weight: 600;
  }
  .phone {
    color: #929292;
    font-size: 14px;
    line-height: 1;
    margin-top: 7px;
  }
}
.agreement {
  padding: 5px 0;
  font-size: 12px;
  color: #929292;
  letter-spacing: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  .agreement-link {
    color: #5995ef;
  }
}
.check-icon {
  height: 16px;
  width: 16px;
  margin-right: 9px;
}
.button-list {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  .button-list button {
    width: 30%;
  }
}
</style>
