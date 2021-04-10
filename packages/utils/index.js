// 获取字符数
export default {
  getCharNum(str) {
    return str.replace(/[^x00-xff]/g, "00").length;
  }
};
