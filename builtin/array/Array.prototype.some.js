Array.prototype.some = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback, " is not  a function");
    }

    var obj = Object(this);
    var pass = false;
    for (var i = 0; i < this.length; i++) {
        if (i in obj) {
            pass = callback.apply(thisArg || null, [this[i], i, this]);
            if (pass) {
                return true;
            }
        }
    }
    return pass;
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


var thisArg = { price: 0 };

var result = datas.some(function (value, index, arr) {
    return value.price > this.price
}, thisArg);

console.log("result", result);


thisArg = { price: 5 };

result = datas.some(function (value, index, arr) {
    return value.price > this.price
}, thisArg);

console.log("result", result);