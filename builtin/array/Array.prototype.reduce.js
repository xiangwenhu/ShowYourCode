
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * @param {*} cb 
 * @param {*} initialValue 
 * @returns 
 */
Array.prototype.reduce = function (cb, initialValue) {
    if (typeof cb !== "function") {
        throw new TypeError(cb, " is not  a function");
    }

    // 检查是否传入初始值
    var hasInitValue = arguments.length > 1;
    var k = 0;
    var obj = Object(this);
    var len = obj.length;
    var pre;
    if (hasInitValue) {
        pre = initialValue;
    } else {
        // 检查空数组
        while (k < len && !(k in obj)) {
            k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
            throw new TypeError('Reduce of empty array ' +
                'with no initial value');
        }
        // pre赋值
        pre = obj[k++];
    }

    // i起始数设置为k
    for (var i = k; i < len; i++) {
        if (i in obj) {
            pre = cb.apply(null, [pre, obj[i],  i, this]);
        }        
    }

    return pre;
};

var re = new Array(4).concat([1, 2, 3]).concat(new Array(4)).reduce(function (pre, cur, index, arr) {

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


new Array(8).concat([1, 2]).concat(new Array(4)).reduce(function (pre, cur) {
    console.log(pre, cur);
})