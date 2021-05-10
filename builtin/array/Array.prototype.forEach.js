Array.prototype.forEach = function (cb, thisArg) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }

    for (var i = 0; i < this.length; i++) {
        cb.apply(thisArg || null, [this[i], i, this]);
    }
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


var thisArg = {counts:0};

datas.forEach(function (value, index, arr) {
    console.log(value, index, arr);
    this.counts += value.counts;
}, thisArg);

console.log(thisArg.counts);