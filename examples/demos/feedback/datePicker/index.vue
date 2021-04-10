<template>
  <div>
    <t-button
      @onClick="onClickOne"
      title="测试年月日"
      class="btn"
    ></t-button>
    <t-button
      @onClick="onClickTwo"
      title="测试年月日时分"
      class="btn"
    ></t-button>
    <t-button
      @onClick="onClickThree"
      title="测试时分"
      class="btn"
    ></t-button>
  </div>
</template>
<script>
import { TButton } from "packages/inter";
// import { TDataPicker } from "packages/inter";

export default {
  components: {
    TButton
  },
  data() {
    return {
      show: true,
      startDate: "2018-03-02",
      test: false
    };
  },
  methods: {
    onClickOne() {
      let defaultValue = "2018-10-03";
      if (this.test) {
        defaultValue = "2018-11-03";
      } else {
        defaultValue = "2018-10-03";
      }
      this.test = !this.test;
      let option = {
        title: "年月日",
        type: "YYYY-MM-DD",
        defaultValue: defaultValue,
        cancelText: "测试取消",
        onConfirm: function(val) {
          console.log("tdx1:", val);
        }
      };
      this.$tui.datePicker.show(option);
    },
    onClickTwo() {
      let option = {
        title: "年月日时分",
        type: "YYYY-MM-DD HH-mm",
        defaultValue: "2018-10-03 08-05",
        onConfirm: function(val) {
          console.log("tdx2:", val);
        }
      };
      this.$tui.datePicker.show(option);
    },
    onClickThree() {
      let option = {
        title: "时分",
        type: "HH:mm",
        onShow: function() {
          console.log("我出现了");
        },
        onHide: function() {
          console.log("我消失了");
        },
        onConfirm: function(val) {
          console.log("tdx3:", val);
        }
      };
      this.$tui.datePicker.show(option);
    }
  }
};
</script>
<style lang="less" scoped>
.btn {
  margin: 10px 0;
}
</style>
