

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values

var hasOwnProperty = Object.prototype.hasOwnProperty;
Object.values = function(obj){
    if( typeof obj !== "object" && typeof obj !== "function" || obj == null){
        throw new TypeError("obj必须是一个有效的对象");
    }

    var results = [], p;
    for(var p in obj){
        if(!hasOwnProperty.call(obj, p)){
            continue;
        }
        results.push(obj[p]);
    }

    return results;
}


function AAA(name){
    this.name = name;
}


AAA.prototype.p2 = 10;
AAA.prototype.p3 = function p3(){
    console.log("p3");
}

var  aaa  = new AAA("aaa");
var bbb = {
    p1: 10,
    p2: "p2"
}

console.log( "values:aaa" , Object.values(aaa));
console.log( "values:bbb" , Object.values(bbb));