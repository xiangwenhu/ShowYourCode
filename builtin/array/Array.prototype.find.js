Array.prototype.find = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback, " is not  a function");
    }
    var obj = Object(this);
    var len = obj.length;
    var item;
    var success;
    for (var i = 0; i < len; i++) {
        if (i in obj) {
            item = obj[i];
            success = callback.apply(thisArg || null, [item, i, this]);
            if (success) {
                return item;
            }
        }
    }
    return undefined;
}


var datas = [{
    price: 1,
    counts: 10,
}, {
    price: 2,
    counts: 20
}, {
    price: 2.6,
    counts: 16
}].concat(new Array(8));

var re = datas.find(v => v.counts === 16);

console.log("re", re);