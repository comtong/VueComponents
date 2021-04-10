<template>
  <div class="tui-confirm" v-if="isShow">
    <div class="tui-confirm_container">
      <div :class="headerClass">{{ title }}</div>
      <div @click="_onClose">
        <t-icon
          v-if="isShowClose"
          class="tui-confirm_header_close"
          size="20px"
          type="close_grey"
        ></t-icon>
      </div>
      <!-- 主要是为了判断tui-grid-item_babel这个设定的框是否需要存在 -->
      <div v-if="hasContentSlot || content" class="tui-grid-item_babel">
        <slot><div class="tui-confirm-content" v-html="content"></div> </slot>
      </div>

      <div v-if="type == 1" class="tui-confirm-btn_group">
        <t-button
          :title="confirmText"
          @onClick="_onClickConfirm"
        ></t-button>
      </div>
      <div v-if="type == 2" class="tui-confirm-btn_group">
        <div class="tui-confirm-btn">
          <t-button
            negative
            :title="cancelText"
            @onClick="_onClickCancel"
          ></t-button>
        </div>
        <div class="tui-confirm-btn" @click="_onClickConfirm">
          <t-button :title="confirmText"></t-button>
        </div>
      </div>
      <div v-if="type == 3" class="tui-confirm-btn_group">
        <div class="tui-confirm-btn tui-confirm-radio" @click="_onClickRadio">
          <t-icon v-if="isChecked" type="radioCheck"></t-icon>
          <t-icon v-else type="radioUncheck"></t-icon>
          <span class="radio-label">{{ label }}</span>
        </div>
        <div class="tui-confirm-btn">
          <t-button
            :title="confirmText"
            @onClick="_onClickConfirm"
          ></t-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TButton from "../../../base/TButton";
import TIcon from "../../../base/TIcon";
export default {
  name: "t-confirm",
  model: {
    prop: "isShow",
    event: "input"
  },
  props: {
    hasHeaderDivide: Boolean, // 是否标题有分割线（两个风格）
    isShowClose: Boolean, // 是否展示
    isShow: Boolean,
    title: {
      type: [String],
      validator(val) {
        if (val && val.length > 20) {
          return console.error("[TUI] TConfirm 标题长度不能超过20");
        }
        return true;
      }
    },
    content: String,
    type: {
      // 样式1为一个确定按钮，样式2为取消、确定按钮，样式3为一个单选按钮和确定按钮
      type: [Number, String],
      default: 1,
      validator(val) {
        if (val == "1" || val == "2" || val == "3") {
          return true;
        }
        return console.error(
          "[TUI] TConfirm prop:type 目前只有这三种类型： 1、2、3"
        );
      }
    },
    label: String,
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    }
  },
  components: {
    TButton,
    TIcon
  },
  data() {
    return {
      isChecked: false,
      hasContentSlot: false
    };
  },
  mounted() {
    this.$slots.default && (this.hasContentSlot = true);
  },
  computed: {
    headerClass() {
      if (this.hasHeaderDivide) {
        return "tui-confirm_header";
      }
      return "tui-confirm_header--two";
    }
  },
  watch: {
    isShow(val) {
      if (val) {
        // 设为不能滚动
        this.noScroll();
      } else {
        // 设为滚动
        this.canScroll();
      }
    }
  },
  methods: {
    show() {},
    hide() {
      this.$emit("input", false);
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
    },
    _onClickRadio() {
      this.isChecked = !this.isChecked;
    },
    _onClickCancel() {
      this.hide();
      this.$emit("onCancel");
    },
    _onClickConfirm() {
      this.hide();
      this.$emit("onConfirm", this.isChecked);
    },
    _onClose() {
      this.hide();
      this.$emit("onClose");
    }
  }
};
</script>

<style lang="less" scoped>
.tui-confirm {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  .tui-confirm_container {
    margin: 0 15px;
    width: 100%;
    min-height: 40px;
    background-color: white;
    opacity: 1;
    border-radius: 4px;
    z-index: 20000;
    position: relative;
    .tui-confirm_header {
      height: 44px;
      line-height: 44px;
      padding: 0 30px;
      font-size: 16px;
      color: #383838;
      text-align: center;
      border-bottom: 0.5px solid #eeeeee;
    }
    .tui-confirm_header_close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .tui-confirm_header--two {
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
    }
    .tui-grid-item_babel {
      margin-top: 5px;
      .tui-confirm-content {
        padding: 5px 20px;
        font-size: 16px;
      }
    }
    .tui-confirm-btn_group {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      .tui-confirm-btn {
        width: calc((100% - 15px) / 2);
      }
      .tui-confirm-radio {
        display: flex;
        align-items: center;
        font-size: 14px;
        height: 40px;
        .radio-label {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
