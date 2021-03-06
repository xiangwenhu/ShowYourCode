
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
Array.prototype.reduceRight = function (cb, initialValue) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }

    // 检查是否传入初始值
    var hasInitValue = arguments.length > 1;
    var obj = Object(this);
    var len = obj.length;
    var k = len - 1;
    var pre;
    if (hasInitValue) {
        pre = initialValue;
    } else {
        // 检查空数组
        while (k >= 0 && !(k in obj)) {
            k--;
        }
        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k < 0) {
            throw new TypeError('Reduce of empty array ' +
                'with no initial value');
        }
        // pre赋值
        pre = obj[k--];
    }

    for (var i = k; i >= 0; i--) {
        if (i in obj) {
            pre = cb.apply(null, [pre, obj[i], i, this]);
        }
    }
    return pre;
};

var re = new Array(4).concat([1, 2, 3]).concat(new Array(4)).reduceRight(function (pre, cur, index, arr) {

    console.log(pre, cur, index, arr);

    return pre + cur

})
console.log("re", re);

// 3 2 5 [ 1, 2, 3 ]
// 5 1 4 [ 1, 2, 3 ]
// re 6


var re = [1, 2, 3].reduceRight(function (pre, cur, index, arr) {

    console.log(pre, cur, index, arr);

    return pre + cur

}, 10)
// console.log("re", re);
// // initialValue 10
// // 10 3 2 [ 1, 2, 3 ]
// // 13 2 1 [ 1, 2, 3 ]
// // 15 1 0 [ 1, 2, 3 ]
// // re 16


var re = [{
    price: 10,
    count: 1
}, {
    price: 20,
    count: 3
}].reduceRight(function (pre, cur, index, arr) {
    console.log(pre, cur, index, arr);

    return pre.count * pre.price + cur.count * cur.price
})

console.log(re);
// // { price: 20, count: 3 } { price: 10, count: 1 } 0 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// // 70


var re = [{
    price: 10,
    count: 1
}, {
    price: 20,
    count: 3
}].reduceRight(function (pre, cur, index, arr) {
    console.log(pre, cur, index, arr);

    return pre + cur.count * cur.price
}, 1000)
console.log(re);
// // initialValue 1000
// // 1000 { price: 20, count: 3 } 1 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// // 1060 { price: 10, count: 1 } 0 [ { price: 10, count: 1 }, { price: 20, count: 3 } ]
// // 1070