
function getNumber(num, defaultValue) {

  if (num === null || num === undefined) {
    return defaultValue || 0 ;
  }

  if (typeof num === "object") {
    return defaultValue || 0
  }

  var re = parseInt(num);
  return !isNaN(re) ? re : defaultValue;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * https://tc39.es/ecma262/#sec-array.prototype.slice
 * 
 * @param {*} callback 
 * @param {*} thisArg 
 */
Array.prototype.slice = function (start, end) {

  var O = Object(this);
  var len = O.length;

  var st = getNumber(start, 0);
  var ed = getNumber(end, len) ;

  var ret = [];

  // 结束大于长度 || 开始大于结束
  if (st >= len || st > ed) {
    return ret;
  }


  // 开始为负值
  if (st < 0) {
    st = len + st;  //  1 = 4 + -3   
  }
  // 结束为负数
  if (ed < 0) {
    ed = len + ed;  //  3  = 4 + -1
  }

  // 最大值不超过len
  ed = Math.min(len, ed);

  var steps = ed - st;
  steps = steps > len ? len : steps;

  if (steps == 0) {
    return ret;
  }



  for (let i = st; i < ed; i++) {
    if (hasOwnProperty.call(O, i)) {
      ret.push(O[i]);
      delete O[i];
    } else {
      ret.push(undefined);
      delete O[i];
      delete ret[ret.length - 1]
    }
  }

  // 重置长度
  O.length = len - steps;
  return ret;


}


var a = [1, 2, 3, 4];
console.log(a.slice(0, 2))  // [ 1, 2 ]

var a = [1, 2, 3, 4];
console.log(a.slice(0, 10))  // [ 1, 2, 3, 4 ]

var a = [1, 2, 3, 4];
console.log(a.slice(undefined, 2)) // [ 1, 2 ]

var a = [1, 2, 3, 4];
console.log(a.slice({}, 8)) // [ 1, 2, 3, 4 ]

var b = new Array(1).concat([1, 2, 3, 4]).concat(new Array(2));

console.log(b.slice(0));  // [ <1 empty item>, 1, 2, 3, 4, <2 empty items> ]

var b = new Array(1).concat([1, 2, 3, 4]).concat(new Array(2));
console.log(b.slice(-5, 6));  // [ 2, 3, 4, <1 empty item>

var b = new Array(1).concat([1, 2, 3, 4]).concat(new Array(2));
console.log(b.slice(-7, 3)) //  [ <1 empty item>, 1, 2 ]