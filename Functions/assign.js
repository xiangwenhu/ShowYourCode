
var slice = Array.prototype.slice;

function assign(){
    // 只合并对象, 可以放到遍历里面去做
    var args = slice.call(arguments).filter(arg=> typeof arg === "object" && arg != null);

    // 长度为0
    if(args.length<= 0){
        throw new Error("Cannot convert undefined or null to object");
    }

    // 长度为1
    if(args.length === 1 ){
        return args[0];
    }

    var result = args[0];

    for(var i= 1; i< args.length; i++){
        var obj = args[i];
        for(var p in obj){
            result[p]  = obj[p];
        }
    }

    return result;
    
}




var c = {
    d: 3
}

var result = assign({
    a:10
}, {
    b: 2
},{c}, null, undefined);


console.log(result, result.c  === c);