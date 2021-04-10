<template>
  <div>
    <t-cell :label="label" @click.native="showDatePicker">
      <div class="tui-cell_date_picker_content">value</div>
    </t-cell>
    <t-date-picker
      v-model="isShow"
      :title="title"
      :type="type"
      @onConfirm="onConfirm"
    ></t-date-picker>
  </div>
</template>
<script>
import TCell from "../../../layout/TCell";
import TDatePicker from "../../../feedback/TDatePicker";
export default {
  name: "t-cell-datepicker",
  props: {},
  components: {
    TCell,
    TDatePicker
  },
  data() {
    return {
      value: "2018-02-03",
      label: "hah",
      isShow: false,
      title: "年月日",
      type: "YYYY-MM-DD",
      defaultValue: "2018-02-03"
    };
  },
  methods: {
    showDatePicker() {
      this.isShow = true;
      console.log("this.isShow:", this.isShow);
    },
    onConfirm() {
      console.log("onDateConfirm测试测试");
    }
  }
};
</script>
<style lang="less" scoped>
.tui-cell_date_picker_content {
  color: #929292;
}
</style>
