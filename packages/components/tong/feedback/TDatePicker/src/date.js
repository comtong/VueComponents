import moment from "moment";
let Utils = {
  removeChinese(value) {
    console.log("value:::", value);
    let newValue = value.replace(/[\u4e00-\u9fa5]/g, "");
    console.log("newValue:::", newValue);
    return newValue;
  },
  getDateArr(date) {
    let dateString = moment(date).format("YYYY-MM-DD-HH-mm");
    let dateArray = dateString.split("-");
    return dateArray;
  },
  isBefore(startDate, endDate) {
    return moment(startDate).isBefore(endDate);
  },
  getYears(startDateArr, endDateArr, chinese) {
    let cacheYears = [];
    for (var i = startDateArr[0]; i <= endDateArr[0]; i++) {
      cacheYears.push(`${i}${chinese[0]}`);
    }
    return cacheYears;
  },
  getMonths(year, startDateArr, endDateArr, chinese) {
    year = this.removeChinese(year);
    let cacheMonths = [];
    for (var i = 1; i <= 12; i++) {
      if (
        !(year == startDateArr[0] && i < startDateArr[1]) &&
        !(year == endDateArr[0] && i > endDateArr[1])
      ) {
        cacheMonths.push(`${i < 10 ? 0 : ""}${i}${chinese[1]}`);
      }
    }
    return cacheMonths;
  },
  getDays(year, month, startDateArr, endDateArr, chinese) {
    year = this.removeChinese(year);
    month = this.removeChinese(month);
    let dateStr = year + "-" + month;
    let days = moment(dateStr).daysInMonth();
    let dayArray = [];
    for (let index = 0; index < days; index++) {
      if (
        !(
          year == startDateArr[0] &&
          month == startDateArr[1] &&
          index + 1 < startDateArr[2]
        ) &&
        !(
          year == endDateArr[0] &&
          month == endDateArr[1] &&
          index + 1 > endDateArr[2]
        )
      ) {
        dayArray.push(`${index + 1 < 10 ? 0 : ""}${index + 1}${chinese[2]}`);
      }
    }
    return dayArray;
  },
  getHours(chinese, startDate = ["00", "00"], endDate = ["23", "59"]) {
    let hours = [];
    for (let index = 0; index < 24; index++) {
      if (index >= parseInt(startDate[0]) && index <= parseInt(endDate[0])) {
        hours.push(`${index < 10 ? "0" + index : "" + index}${chinese[3]}`);
      }
    }
    return hours;
  },
  getMinutes(chinese, hour, startDate = ["00", "00"], endDate = ["23", "59"]) {
    let minutes = [];
    for (let index = 0; index < 60; index++) {
      if (hour == parseInt(startDate[0]) && index < parseInt(startDate[1])) {
        continue;
      }
      if (hour == parseInt(endDate[0]) && index > parseInt(endDate[1])) {
        continue;
      }
      minutes.push(`${index < 10 ? "0" + index : "" + index}${chinese[4]}`);
    }
    return minutes;
  }
};

export default Utils;
