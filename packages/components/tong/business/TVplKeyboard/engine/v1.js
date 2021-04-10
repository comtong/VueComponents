import { _delete, _modify } from "./util";

/**
 * 删除事件
 */
function deleteLastBefore(params) {
  // 不在末尾
  console.log(
    "不在末尾",
    params.svalue,
    params.text,
    params.sindex,
    params.smax,
    params.snewpower
  );
  params.svalue = _delete(params.svalue, params.sindex);
  if (params.sindex > 0) {
    params.sindex--;
  }
  return params;
}

function deleteLast(params) {
  // 尾部删除
  console.log(
    "尾部删除",
    params.svalue,
    params.text,
    params.sindex,
    params.smax,
    params.snewpower
  );
  params.svalue = _delete(params.svalue);
  if (params.sindex + 1 === params.smax) {
    params.snewpower = false;
  } else if (params.svalue.length > 0) {
    params.sindex = params.svalue.length - 1;
  }
  return params;
}

/**
 * 修改事件
 */
function modifyLastBefore(params) {
  // 不在尾部
  console.log(
    "不在尾部",
    params.svalue,
    params.text,
    params.sindex,
    params.smax,
    params.snewpower
  );
  params.svalue = _modify(params.svalue, params.text, params.sindex);
  if (params.sindex + 1 < params.smax) {
    params.sindex++;
  }
  return params;
}

function modifyLast(params) {
  // 末位处理逻辑
  console.log(
    "末位处理逻辑",
    params.svalue,
    params.text,
    params.sindex,
    params.smax,
    params.snewpower
  );
  //根据sindex来判断是否在新能源的位置，对于v1版本，要想处在新能源的位置，必须用户手动点击；即只有用户手动点击后才会对新能源号码填充
  if (params.sindex === 7) {
    params.snewpower = true;
    params.svalue += params.text;
  } else {
    params.svalue = _modify(params.svalue, params.text);
  }
  params.sindex = params.svalue.length - 1;
  return params;
}

function addLast(params) {
  // 尾部新增
  console.log(
    "尾部新增",
    params.svalue,
    params.text,
    params.sindex,
    params.smax,
    params.snewpower
  );
  if (params.svalue.length < params.smax) {
    params.svalue += params.text;
    if (params.sindex + 1 < params.smax) {
      params.sindex++;
    }
  }
  return params;
}

export default {
  deleteLast,
  deleteLastBefore,
  modifyLast,
  modifyLastBefore,
  addLast
};
