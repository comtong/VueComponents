<template>
  <t-picker
    :isShow="isShow"
    :title="title"
    :data="listData"
    :defaultValue="pickerDefaultValue"
    :cancelText="cancelText"
    :confirmText="confirmText"
    @onChoose="_onChoose"
    @onCancel="_onCancel"
    @onConfirm="_onConfirm"
    @onShow="_onShow"
    @onHide="_onHide"
  ></t-picker>
</template>
<script>
import TPicker from "../../TPicker";
import Utils from "./date";
import moment from "moment";
export default {
  name: "t-date-picker",
  model: {
    prop: "isShow",
    event: "change"
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: String,
    startDate: String,
    endDate: String,
    type: {
      type: String,
      default: "YYYY-MM-DD",
      validator(val) {
        /* istanbul ignore if */
        if (
          val === "YYYY-MM-DD" ||
          val === "YYYY-MM-DD HH:mm" ||
          val === "HH:mm"
        ) {
          return true;
        }
        return console.error(
          "[TUI] Datepicker prop:type 使用 时只允许的值为： YYYY-MM-DD或YYYY-MM-DD HH:mm或HH:mm"
        );
      }
    },
    isShowChinese: {
      type: Boolean,
      default: true
    },
    cancelText: String,
    confirmText: String,
    defaultValue: {
      type: String,
      default: ""
    }
  },
  components: {
    TPicker
  },
  data() {
    return {
      listData: [],
      chinese: !this.isShowChinese
        ? new Array(5).fill("")
        : this.type == "HH:mm"
        ? ["时", "分", ""]
        : ["年", "月", "日", "时", "分"],
      cacheListData: [],
      pickerDefaultValue: []
    };
  },
  mounted() {},
  watch: {
    isShow(val) {
      if (val) {
        this.initData();
      }
    },
    defaultValue(value) {
      if (value) {
        let list = value.split("-");
        for (let index = 0; index < list.length; index++) {
          list[index] = list[index].toString() + this.chinese[index];
        }
        this.pickerDefaultValue = [...list];
      }
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    _onShow() {
      this.$emit("onShow");
    },
    _onHide() {
      // 因为这个是双向绑定的
      this.$emit("change", false);
      this.$emit("onHide");
    },
    _onCancel() {
      this.$emit("onCancel");
    },
    _onConfirm(chooseValue) {
      this.$emit("onConfirm", chooseValue);
    },
    initData() {
      // 默认是2000-01-01
      this.resetDefaultValue();
      if (this.startDate) {
        this.startDateArr = Utils.getDateArr(this.startDate);
      } else {
        this.startDateArr = Utils.getDateArr("2000-01-01");
      }
      if (this.endDate) {
        this.endDateArr = Utils.getDateArr(this.endDate);
      } else {
        this.endDateArr = Utils.getDateArr(moment().format("YYYY-MM-DD"));
      }
      // 结束时间小于开始时间，结束时间重置为开始时间
      if (Utils.isBefore(this.endDateArr, this.startDateArr)) {
        // this.endDate = this.startDate;
        this.endDateArr = this.startDateArr;
      }
      this.initListData();
    },
    resetDefaultValue() {
      this.cacheListData = [];
    },
    initListData() {
      // this.resetDefaultValue();
      console.log("yearArray1:::", this.type);
      switch (this.type) {
        case "YYYY-MM-DD": {
          let yearArray = Utils.getYears(
            this.startDateArr,
            this.endDateArr,
            this.chinese
          );
          let monthArray = Utils.getMonths(
            yearArray[0],
            this.startDateArr,
            this.endDateArr,
            this.chinese
          );
          let dayArray = Utils.getDays(
            yearArray[0],
            monthArray[0],
            this.startDateArr,
            this.endDateArr,
            this.chinese
          );
          console.log("yearArray1:::", [yearArray, monthArray, dayArray]);
          this.cacheListData = [...[yearArray, monthArray, dayArray]];
          break;
        }
        case "YYYY-MM-DD HH-mm":
          {
            let yearArray = Utils.getYears(
              this.startDateArr,
              this.endDateArr,
              this.chinese
            );
            let monthArray = Utils.getMonths(
              yearArray[0],
              this.startDateArr,
              this.endDateArr,
              this.chinese
            );
            let dayArray = Utils.getDays(
              yearArray[0],
              monthArray[0],
              this.startDateArr,
              this.endDateArr,
              this.chinese
            );
            let hourArray = Utils.getHours(this.chinese);
            let minuteArray = Utils.getMinutes(
              this.chinese,
              hourArray[0],
              this.chinese
            );
            console.log("yearArray2:::", [
              yearArray,
              monthArray,
              dayArray,
              hourArray,
              minuteArray
            ]);
            this.cacheListData = [
              ...[yearArray, monthArray, dayArray, hourArray, minuteArray]
            ];
          }
          break;
        case "HH:mm":
          this.cacheListData = [
            ...[
              Utils.getHours(this.chinese),
              Utils.getMinutes(this.chinese, "12")
            ]
          ];
          if (this.isUse12Hours) {
            this.cacheListData = [...this.cacheListData, this.use12Hours];
          }
          break;
      }
      this.listData = [...this.cacheListData];
    },
    _onChoose(self, value, index, chooseValue) {
      switch (index) {
        case 0: //year
        case 1: //month
        case 2: //day
        case 3: //hour
          this.updateLinkage(self, value, index + 1, chooseValue);
          break;
        case 4: //min
          break;
      }
    },
    updateLinkWhenHour(self, value, index, chooseValue) {
      let tempData = [...this.listData];
      let tempChooseValue = [...chooseValue];
      if (this.type === "HH:mm") {
        tempData[index] = Utils.getMinutes(
          this.chinese,
          chooseValue[index - 1],
          this.startDate,
          this.endDate
        );
        this.listData = [...tempData];
        tempChooseValue[index] = this.listData[index][0];
        if (tempChooseValue[index] !== chooseValue[index]) {
          chooseValue = [...tempChooseValue];
          self.setChooseValue(index, chooseValue[index]);
        }
      }
    },
    updateLinkWhenMonth(self, value, index, chooseValue) {
      let tempData = [...this.listData];
      let tempChooseValue = [...chooseValue];
      tempData[index] = Utils.getDays(
        chooseValue[0],
        value,
        this.startDateArr,
        this.endDateArr,
        this.chinese
      );
      this.listData = [...tempData];
      // 修改day为第一个
      tempChooseValue[index] = this.listData[index][0];
      if (tempChooseValue[index] !== chooseValue[index]) {
        chooseValue = [...tempChooseValue];
        self.setChooseValue(index, chooseValue[index]);
      }
      console.log("updateLinkage month:::", chooseValue);
    },
    updateLinkWhenYear(self, value, index, chooseValue) {
      let tempData = [...this.listData];
      let tempChooseValue = [...chooseValue];
      // TODO 如果发现是满12个月，其实后面可以不移动到第一位，之所以要移动到第一位是因为处理不满12个月比较麻烦
      tempData[index] = Utils.getMonths(
        value,
        this.startDateArr,
        this.endDateArr,
        this.chinese
      );
      this.listData = [...tempData];
      tempChooseValue[index] = this.listData[index][0];
      // 如果相等，即原来就是在第一位，则不需要移动了，简单点
      if (tempChooseValue[index] !== chooseValue[index]) {
        chooseValue = [...tempChooseValue];
        self.setChooseValue(index, chooseValue[index]);
      }
      this.updateLinkage(
        self,
        tempChooseValue[index],
        index + 1,
        tempChooseValue
      );
      console.log("updateLinkage year:::", this.listData);
    },

    updateLinkage(self, value, index, chooseValue) {
      switch (index) {
        case 1: //year or hour
          if (this.type === "HH:mm") {
            this.updateLinkWhenHour(self, value, index, chooseValue);
          } else {
            this.updateLinkWhenYear(self, value, index, chooseValue);
          }
          break;
        case 2: //month or min
          if (this.type !== "HH:mm") {
            this.updateLinkWhenMonth(self, value, index, chooseValue);
          }
          break;
        case 3: //day
          break;
        case 4: //hour
          // 只有是时分的形式，才有起止时间
          this.updateLinkWhenHour(self, value, index, chooseValue);
          break;
        case 5: //min
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped></style>
