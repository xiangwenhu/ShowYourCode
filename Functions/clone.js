
var slice = Array.prototype.slice;
var hasOwnProperty = Object.prototype.hasOwnProperty;



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

    // 可以考虑 Object.getOwnPropertyNames, Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptors
    for(var i= 0; i< args.length; i++){
        var obj = args[i];
        for(var p in obj){

            // 阻止死循环 https://github.com/jquery/jquery/blob/main/src/core.js jQuery.extend 
            //  Prevent Object.prototype pollution
			//  Prevent never-ending loop
			//  if ( name === "__proto__" || target === copy ) {
			// 	 continue;
			//  }

            if(!hasOwnProperty.call(obj, p)){
                continue;
            }
            var val = obj[p];
            result[p]  = isObject (val) ? clone(val): val;
        }
    }

    return result;
    
}


function aaa(){
    this.age = 10;
}

aaa.prototype.name = "name";

var aa = new aaa();


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
},{c}, {
    aa
}, undefined, {
    ddd: "ddd"
});


console.log(result, result.c  === c);




