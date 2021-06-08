function getNumber(num, defaultValue) {

  if (num === null || num === undefined) {
    return defaultValue || 0;
  }

  if (typeof num === "object") {
    return defaultValue || 0
  }

  var re = parseInt(num);
  return !isNaN(re) ? re : defaultValue;
}

Array.prototype.splice222 = function (start, deleteCount) {

  var O = Object(this);
  var len = O.length;
  var args = arguments;
  var ret = [];

  var st = getNumber(start, 0);
  if (st < 0) {
    st = len + st;
  }
  var dCount = getNumber(deleteCount, len);
  dCount = Math.max(dCount, len - start);

  // 删除旧
  if (st <= len && st >= 0) {


    len = len - dCount;
  }

  var addLen = args.length > 2 ? args.length - 2 : 0;

  // 添加新元素
  if (addLen > 0) {
    for (var i = 2; i < args.length - 2; i++) {

    }
  }

  return ret;
}


var a = [1, 2, 3, 4];

console.log(a.splice(-1), a);