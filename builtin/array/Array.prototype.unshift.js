

var hasOwnProperty = Object.prototype.hasOwnProperty;


Array.prototype.unshift = function () {

    var O = Object(this);
    var len = O.length;
    var argsObj = arguments;
    var argLen = argsObj.length;

    // 无参
    if (argLen == 0) {
        return len;
    }

    var sArr = new Array(len);

    // 复制源数组
    for (var i = 0; i < len; i++) {
        if (!hasOwnProperty.call(O, i)) {
            continue;
        }
        sArr[i] = O[i];
    }

    // 头部添加
    for (var i = 0; i < argLen; i++) {
        if (!hasOwnProperty.call(argsObj, i)) {
            delete O[i];
            continue;
        }
        O[i] = argsObj[i];
    }

    for (var i = 0; i < len; i++) {
        if (!hasOwnProperty.call(sArr, i)) {
            delete O[i+ argLen];
            continue;
        }
        O[i + argLen] = sArr[i];
    }

    O.length = len + argLen;
    return len + argLen;


}




var a = [1, 2, 3].concat(new Array(1));

console.log(a.unshift(7, 8), a)