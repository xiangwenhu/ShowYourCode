Array.prototype.map = function (cb, thisArg) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }
    
    var results = [];
    for (var i = 0; i < this.length; i++) {
        var ret = cb.apply(thisArg || null, [this[i], i, this]);
        results.push(ret);
    }

    return results;
};




var arr = [1, 2, 3].map(function (v, i, arr) {

    return v + "-" + i + "-" + arr.length

}, [2])

console.log("arr", arr);