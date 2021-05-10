Array.prototype.every = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback, " is not  a function");
    }

    var pass = false;
    for (var i = 0; i < this.length; i++) {
        pass = callback.apply(thisArg || null, [this[i], i, this]);
        if (!pass) {
            return pass;
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
}];


var thisArg = { price: 0.999 };

var result = datas.every(function (value, index, arr) {
   return value.price > this.price
}, thisArg);

console.log("result", result);


thisArg = { price: 1.2 };

result = datas.every(function (value, index, arr) {
   return value.price > this.price
}, thisArg);

console.log("result", result);