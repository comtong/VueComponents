<template>
  <div>
    <t-picker
      title="选择"
      :isShow="pickerShow"
      :data="data"
      :defaultValue="defaultValue"
      @onShow="onShow"
      @onHide="onHide"
      @onCancel="onCancel"
      @onConfirm="onConfirm"
    ></t-picker>
    <t-picker
      :columns="col"
      title="选择"
      :isShow="relationPickerShow"
      :relationData="relationData"
      :defaultValue="defaultValueTwo"
      @onShow="onShow"
      @onHide="onRelationHide"
      @onCancel="onCancel"
      @onConfirm="onConfirm"
    ></t-picker>
    <t-button title="展示普通" class="btn" @onClick="showCommon"></t-button>
    <t-button
      title="展示级联"
      class="btn"
      @onClick="showRelation"
    ></t-button>
  </div>
</template>
<script>
import { TPicker, TButton } from "packages/inter";
export default {
  components: {
    TPicker,
    TButton
  },
  data() {
    return {
      title: "请选择信用卡",
      data: [
        ["2019", "2020", "2021", "2022", "2023"],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      ],
      relationData: new Map(),
      col: 0,
      pickerShow: false,
      relationPickerShow: false,
      defaultValue: ["2023", "6"],
      defaultValueTwo: ["中国", "浙江", "绍兴"]
    };
  },
  mounted() {
    let map = new Map();
    this.col = 3;
    map.set("root", ["中国", "美国", "日本"]);
    map.set("中国", ["江苏", "浙江", "广东", "河南"]);
    map.set("美国", ["纽约", "洛杉矶", "华盛顿"]);
    map.set("日本", ["东京", "北海道", "名古屋"]);
    map.set("广州", ["深圳", "广州", "惠州"]);
    map.set("浙江", ["杭州", "绍兴", "宁波"]);
    map.set("江苏", ["南京", "苏州", "徐州"]);
    map.set("纽约", ["纽约"]);
    this.relationData = map;
  },
  methods: {
    onChooseItem(option) {
      this.$tui.toast.show({
        type: "fail",
        text: "你选择了" + option,
        time: 2000,
        width: "9rem"
      });
    },
    showCommon() {
      this.pickerShow = true;
    },
    showRelation() {
      this.relationPickerShow = true;
      this.defaultValueTwo = ["中国", "浙江", "杭州"];
    },
    onShow() {
      console.log("onShow");
    },
    onHide() {
      this.pickerShow = false;
      console.log("onHide");
    },
    onRelationHide() {
      this.relationPickerShow = false;
      console.log("onHide");
    },
    onCancel() {
      console.log("onCancel");
    },
    onConfirm(value) {
      console.log("onConfirm", value);
    }
  }
};
</script>
<style lang="less" scoped>
.btn {
  margin-top: 20px;
}
</style>
