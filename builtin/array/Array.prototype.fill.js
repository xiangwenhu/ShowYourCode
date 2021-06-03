
var print = console.log;

function getInt(value, defaultValue) {
    if (typeof value === "number") {
        return value;
    }
    var val = parseInt(value, 10);
    if (!isNaN(val) && typeof val === "number") {
        return val;
    }
    return defaultValue;
}

Array.prototype.fill = function (value, start, end) {

    var obj = Object(this);
    var len = obj.length;
    var start = getInt(start, 0);
    if (start < 0) {
        start = len + start;
    }
    var end = getInt(end, len);
    if (end < 0) {
        end = len + end
    }

    if (end <= start) {
        return [].concat(this);
    }

    for (var i = 0; i < len; i++) {
        if (i >= start && i < end) {
            obj[i] = value;
        } else {
            obj[i] = obj[i];
        }
    }

    return obj;
};

print([1, 2, 3].fill(4));               // [4, 4, 4]
print([1, 2, 3].fill(4, 1));            // [1, 4, 4]
print([1, 2, 3].fill(4, 1, 2));         // [1, 4, 3]
print([1, 2, 3].fill(4, 1, 1));         // [1, 2, 3]
print([1, 2, 3].fill(4, 3, 3));         // [1, 2, 3]
print([1, 2, 3].fill(4, -3, -2));       // [4, 2, 3]
print([1, 2, 3].fill(4, NaN, NaN));     // [1, 2, 3]
print([1, 2, 3].fill(4, 3, 5));         // [1, 2, 3]
print(Array(3).fill(4));                // [4, 4, 4]
print("call:", [].fill.call({ length: 3 }, 4));  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
print(arr)
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
print(arr)