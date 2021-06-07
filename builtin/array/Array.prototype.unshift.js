

var hasOwnProperty = Object.prototype.hasOwnProperty;


/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 * https://tc39.es/ecma262/#sec-array.prototype.unshift
 * @returns 
 */
// Array.prototype.unshift = function () {

//     var O = Object(this);
//     var len = O.length;
//     var argsObj = arguments;
//     var argLen = argsObj.length;

//     // 无参
//     if (argLen == 0) {
//         return len;
//     }

//     var sArr = new Array(len);

//     // 备份
//     for (var i = 0; i < len; i++) {
//         if (!hasOwnProperty.call(O, i)) {
//             continue;
//         }
//         sArr[i] = O[i];
//     }

//     // 头部添加
//     for (var i = 0; i < argLen; i++) {
//         if (!hasOwnProperty.call(argsObj, i)) {
//             delete O[i];
//             continue;
//         }
//         O[i] = argsObj[i];
//     }

//     // 复制备份的数组
//     for (var i = 0; i < len; i++) {
//         if (!hasOwnProperty.call(sArr, i)) {
//             delete O[i+ argLen];
//             continue;
//         }
//         O[i + argLen] = sArr[i];
//     }

//     O.length = len + argLen;
//     return len + argLen;

// }


Array.prototype.unshift = function () {

    var O = Object(this);
    var len = O.length;
    var argsObj = arguments;
    var argLen = argsObj.length;

    // 无参
    if (argLen == 0) {
        return len;
    }

    // 先位移原数据, 倒叙
    var tIndex;
    for (var i = len - 1; i >= 0; i--) {
        tIndex = argLen + i;
        if (!hasOwnProperty.call(O, i)) {
            O[tIndex] = undefined;
            delete O[tIndex]
            continue;
        }
        O[tIndex] = O[i];
    }

    console.log("::", O);

    // 头部添加
    for (var i = 0; i < argLen; i++) {
        if (!hasOwnProperty.call(argsObj, i)) {
            delete O[i];
            continue;
        }
        O[i] = argsObj[i];
    }

    O.length = len + argLen;
    return len + argLen;

}



var a = [1, 2, 3].concat(new Array(1));  //  [ 1, 2, 3, <1 empty item>]

console.log(a.unshift(7, 8), a)   // 6 [ 7, 8, 1, 2, 3, <1 empty item> ]