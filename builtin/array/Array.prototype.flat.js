
var toString = Object.prototype.toString;

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

Array.prototype.flat = function (depth) {

    var obj = Object(this);
    var len = Object.length;

    if (len === 0) {
        return this;
    }
    var depth = depth || len;

    var newArr = [];
    var cDepth = 1;
    function flatArr(arr) {
        var temp;
        cDepth++;
        for (let i = 0; i < arr.length; i++) {

            temp = arr[i]
            if (isArray(temp) && cDepth <= depth) {
                return newArr.concat(flatArr(temp))
            }
            newArr.push(temp);
        }
        cDepth--
    }
    flatArr(obj);

    return newArr
}


var arr = ["d1-0", ["d2-0", "d2-1",  ["d3-0", "d3-1", "d3-2",["d4-0", "d4-1"]]], "d1-2", "d1-3"];

// console.log("depth:1", arr.flat(1));
// console.log("depth:2", arr.flat(2))
// console.log("depth:3", arr.flat(3))
console.log("depth:4", arr.flat(4))