Array.prototype.map = function (cb, thisArg) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }

    var obj = Object(this);
    var results = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
        if (i in obj) {
            var ret = cb.apply(thisArg || null, [this[i], i, this]);
            results[i] = ret;
        }
    }

    return results;
};


var arr = [1, 2, 3].concat(new Array(8)).map(function (v, i, arr) {
    return v + "-" + i + "-" + arr.length
}, [2])

console.log("arr", arr);