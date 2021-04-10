<template>
  <t-popup
    :isShow="isShow"
    @onShow="_onShow"
    @onClickOverlay="_onClickOverlay"
  >
    <div class="tui-picker">
      <div class="tui-picker_header">
        <span class="tui-picker_cancel-btn" @click="_onCancel">{{
          cancelText
        }}</span>
        <div class="tui-picker_title">{{ title ? title : "" }}</div>
        <span class="tui-picker_confirm-btn" @click="_onConfirm">{{
          confirmText
        }}</span>
      </div>
      <div class="tui-picker_mask--top"></div>
      <div class="tui-picker_indicator"></div>
      <div class="tui-picker_mask--bottom"></div>
      <div class="tui-picker_container">
        <div class="tui-picker_container--scroll">
          <picker-col
            v-for="(item, index) in pickerList"
            :ref="`picker-slot-${index}`"
            :listData="item"
            :key="index"
            @chooseItem="chooseItem"
            :keyIndex="index"
            :chooseValue="chooseValue[index]"
          ></picker-col>
        </div>
      </div>
    </div>
  </t-popup>
</template>
<script>
import commonPickerJs from "./commonPicker.js";
import relationPickerJs from "./relationPicker.js";
import TPopup from "../../../base/TPopup";
import pickerCol from "./pickerCol";
export default {
  name: "t-picker",
  mixins: [commonPickerJs, relationPickerJs],
  props: {
    isShow: Boolean,
    columns: Number,
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    relationData: {
      type: Map,
      default: function() {
        return new Map();
      }
    },
    title: String,
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    defaultValue: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    TPopup,
    pickerCol
  },
  data() {
    return {
      chooseValue: [],
      hasInitData: true
    };
  },
  mounted() {},
  watch: {
    defaultValue(value) {
      this.chooseValue = [...value];
      this.setInitData(value);
    },
    deep: true
  },
  computed: {
    pickerList() {
      if (this.columns) {
        return this.relationPickerList;
      }
      return this.data;
    }
  },
  methods: {
    _onShow() {
      this.$emit("onShow");
    },
    _onClickOverlay() {
      this._onHide();
    },
    _onHide() {
      this.$emit("onHide");
    },
    _onCancel() {
      this.$emit("onCancel");
      this._onHide();
    },
    _onConfirm() {
      this.$emit("onConfirm", this.chooseValue);
      this._onHide();
    },
    chooseItem(value, index) {
      if (this.columns) {
        this.chooseRelationItem(value, index);
      } else {
        this.chooseCommonItem(value, index);
      }
    },
    setChooseValue(index, value) {
      let ref = `picker-slot-${index}`;
      this.chooseValue[index] = value;
      this.$refs[ref][0].modifyStatus(value);
    },
    setInitData(initData) {
      for (let index = 0; index < initData.length; index++) {
        this.chooseItem(initData[index], index);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tui-picker {
  position: relative;
  height: 265px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  .tui-picker_header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 0.5px solid #f0f0f0;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    .tui-picker_cancel-btn {
      margin-left: 20px;
      color: #929292;
    }
    .tui-picker_title {
      color: #383838;
    }
    .tui-picker_confirm-btn {
      margin-right: 20px;
      color: #5995ef;
    }
  }
  .tui-picker_mask--top {
    position: absolute;
    top: 40px;
    height: 90px;
    margin: 0 auto;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.7)
    );
    width: 100%;
    z-index: 2;
    pointer-events: none;
  }
  .tui-picker_mask--bottom {
    position: absolute;
    top: 175px;
    height: 90px;
    margin: 0 auto;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.7)
    );
    width: 100%;
    z-index: 2;
    pointer-events: none;
  }
  .tui-picker_indicator {
    position: absolute;
    top: 130px;
    width: 100%;
    height: 45px;
    background-color: #f0f0f0;
  }
  .tui-picker_container {
    position: absolute;
    top: 40px;
    width: 100%;
    overflow: hidden;
    .tui-picker_container--scroll {
      display: flex;
      width: 100%;
    }
  }
}
</style>
