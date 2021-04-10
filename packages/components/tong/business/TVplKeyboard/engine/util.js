/**
 * 删除字符串中指定位置字符
 * i为空删除末位字符
 */
export const _delete = (str, i) => {
  if (i === undefined || i + 1 > str.length) {
    return str.slice(0, str.length - 1);
  }
  return str.slice(0, i) + str.slice(i + 1, str.length);
};

/**
 * 修改字符串中指定位置字符
 * i为空修改末位字符
 */
export const _modify = (str, text, i) => {
  if (i === undefined) {
    return str.slice(0, str.length - 1) + text;
  }
  return str.slice(0, i) + text + str.slice(i + 1, str.length);
};
