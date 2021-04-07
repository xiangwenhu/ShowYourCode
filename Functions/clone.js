
var slice = Array.prototype.slice;


function isObject(obj){
    return typeof obj === "object" && obj !== null;
}

function isArray(arrLike){
    return Array.isArray(arrLike)
}

function clone(){
    // 克隆对象, 可以放到遍历里面去做
    var args = slice.call(arguments).filter(arg=> isObject(arg));

    // 长度为0
    if(args.length<= 0){
        throw new Error("Cannot convert undefined or null to object");
    }

    var result =  isArray(args[0]) ? []: {};

    for(var i= 0; i< args.length; i++){
        var obj = args[i];
        for(var p in obj){
            var val = obj[p];
            result[p]  = isObject (val) ? clone(val): val;
        }
    }

    return result;
    
}


var c = {
    d: 3
}

var result = clone({
    a:10
}, {
    b: 2,
    arr: [{
        item1:1
    }, {
        item2: 2
    }]
},{c}, null, undefined);


console.log(result, result.c  === c);