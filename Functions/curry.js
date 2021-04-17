var slice = Array.prototype.slice;


// 可以指定长度，不能直接初始化参数
function curry(fn, length) {
    var len = length || fn.length;
    var args = [];

    return function curried() {
        args = args.concat(slice.call(arguments));
        if (args.length >= len) {
            return fn.apply(this, args);
        }
        return curried;
    }
}

// 可以指定长度，不能直接初始化参数
function curry2(fn, length) {
    var len = length || fn.length;
    return function curried() {
        var args = slice.call(arguments);
        if (args.length > len) {
            return fn.apply(this, args);
        }
        return function () {
            var args2 = slice.call(arguments);
            return curried(args.concat(args2))
        }
    }
}

// 可以指定长度，也可以初始化参数
function curry3(fn, length){
    var len = length || fn.length;
    var args = slice.call(arguments, 2);

    return function curried() {
        args = args.concat(slice.call(arguments));
        if (args.length >= len) {
            return fn.apply(this, args);
        }
        return curried;
    }
}



function sum(a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}


const curried = curry3(sum, undefined, 1,2,3);

const sumValue = curried();
console.log("sumValue", sumValue);





