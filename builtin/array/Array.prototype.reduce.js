Array.prototype.reduce = function (cb, initialValue) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }

    // 检查是否传入初始值
    var hasInitValue = arguments.length > 1;
    console.log("hasInitValue", hasInitValue)
    var arr = hasInitValue ? [initialValue].concat(this) : this;

    console.log(arr);
    console.log("-------")
    var pre = arr[0];
    for (var i = 1; i < arr.length; i++) {
        pre = cb.apply(null, [pre, arr[i], hasInitValue ? i - 1 : i, this]);
    }

    return pre;
};

var re = [1, 2, 3].reduce(function (pre, cur, index, arr) {

    console.log(pre, cur, index, arr);

    return pre + cur

})

console.log("re", re);

// 1 2 1 [ 1, 2, 3 ]
// 3 3 2 [ 1, 2, 3 ]
// re 6

var re = [1, 2, 3].reduce(function (pre, cur, index, arr) {

    console.log(pre, cur, index, arr);

    return pre + cur

}, -10)

console.log("re", re);
// -10 1 0 [ 1, 2, 3 ]
// -9 2 1 [ 1, 2, 3 ]
// -7 3 2 [ 1, 2, 3 ]
// re -4




var re = [{
    price: 10,
    count: 1
}, {
    price: 20,
    count: 3
}].reduce(function (pre, cur, index, arr) {
    console.log(pre, cur, index, arr);

    return pre.count * pre.price + cur.count * cur.price
})

console.log(re);
// { price: 10, count: 1 } { price: 20, count: 3 } 1 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// 70

var re = [{
    price: 10,
    count: 1
}, {
    price: 20,
    count: 3
}].reduce(function (pre, cur, index, arr) {
    console.log(pre, cur, index, arr);

    return pre + cur.count * cur.price
}, 1000)

console.log(re);
// 1000 { price: 10, count: 1 } 0 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// 1010 { price: 20, count: 3 } 1 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// 1070