Array.prototype.flatMap = function (callback, thisArg) {

    if (typeof callback !== "function") {
        throw new TypeError("callback不是一个有效的函数");
    }

    var arr = this;
    if (!Array.isArray(arr) || arr.lengeht <= 0) {
        return arr;
    }

    var item;
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        item = arr[i];
        results.push(callback.apply(thisArg || null, [item, i, arr]));
    }

    return results;
}


var arr = [1, 2, 3];

console.log(arr.flatMap(v => v * 2));

console.log(arr.flatMap((...args)=> console.log(...args)));

