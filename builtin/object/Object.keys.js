

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

var hasOwnProperty = Object.prototype.hasOwnProperty;
Object.keys = function(obj){
    if( typeof obj !== "object" && typeof obj !== "function" || obj == null){
        throw new TypeError("obj必须是一个有效的对象");
    }

    var results = [];
    for(var p in obj){
        if(!hasOwnProperty.call(obj, p)){
            continue;
        }
        results.push(p);
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

console.log( "keys" , Object.keys(aaa));