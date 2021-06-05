
var toString = Object.prototype.toString;

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

Array.prototype.indexOf = function (searchElement, fromIndex) {

    var arr = this;
    if (!isArray(arr) || arr.length <= 0) {
        return -1;
    }

    var item;
    for (var i = 0; i < arr.length; i++) {
        item = arr[i];

        if (searchElement === item) {
            return i;
        }
    }

    return -1
}




var arr = [1, 2, 3];

console.log(arr.indexOf("1"));
console.log(arr.indexOf(1));