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


var hasOwnProperty = Object.prototype.hasOwnProperty;


/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * https://tc39.es/ecma262/#sec-array.prototype.splice
 * @param {*} start 
 * @param {*} deleteCount 
 * @returns 
 */
Array.prototype.splice = function (start, deleteCount) {

    var O = Object(this);
    var len = O.length;
    var args = arguments;

    var st = getNumber(start, 0);
    if (st < 0) {
        st = Math.max(0, len + st);
    }
    st = st < 0 ? 0 : st;
    st = st > len - 1 ? len - 1 : st;

    var dCount = getNumber(deleteCount, 0);
    dCount = dCount < 0 ? 0 : Math.min(dCount, len - st)

    var addCount = args.length > 2 ? args.length - 2 : 0;

    var gap = addCount - dCount;
    var newLen = len - dCount + addCount;

    var ret = new Array(dCount);

    if (st <= len && st >= 0) {

        var retIndex = 0;

        // 删得比加的多，前移
        if (gap < 0) {
            // 顺序移动
            for (var i = st; i < len; i++) {
                if (i < st + deleteCount) {
                    ret[retIndex] = O[i];
                    retIndex++;
                } else {
                    O[i + gap] = O[i]
                    delete O[i];
                }
            }
        } else {  // 删的比加的少，整体后移动   
            // 倒叙移动
            for (var i = newLen; i >= st; i--) {
                if (i < st + deleteCount) {                    
                    ret[deleteCount - retIndex - 1] = O[i];
                    retIndex++
                } else {
                    O[i + gap] = O[i]
                }
            }
        }
    }

    O.length = newLen;

    // 添加新元素
    if (addCount > 0) {
        for (var i = 0; i < args.length - 2; i++) {
            if (hasOwnProperty.call(args, i + 2)) {
                O[st + i] = args[i + 2];
            }
        }
    }

    return ret;
}


var a = [1, 2, 3, 4];

console.log(a.splice(-100, 2, 9, 8, 7), a, a.length);  // [ 1, 2 ] [ 9, 8, 7, 3, 4 ] 5

var a = [1, 2, 3, 4];

console.log(a.splice(-2, 2, new Array(1), ...[new Array()]), a, a.length);   // [ 3, 4 ] [ 1, 2, [ <1 empty item> ], [] ] 4

var a = [1, 2, 3, 4];
console.log(a.splice(5, 2, new Array(1), ...[new Array()]), a, a.length);  // [] [ 1, 2, 3, 4, [ <1 empty item> ], [] ] 6


var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);
console.log(removed, myFish, myFish.length); // [ 'blue', 'trumpet' ] [ 'parrot', 'anemone', 'sturgeon' ] 3
