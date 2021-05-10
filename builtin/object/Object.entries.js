

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

var hasOwnProperty = Object.prototype.hasOwnProperty;
Object.entries = function(obj){
    if( typeof obj !== "object" && typeof obj !== "function" || obj == null){
        throw new TypeError("obj必须是一个有效的对象");
    }

    // 可以参考MDN的，先使用Obect.keys获取所有的键
    var results = [];
    for(var p in obj){
        if(!hasOwnProperty.call(obj, p)){
            continue;
        }
        results.push([p, obj[p]]);
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

console.log( "entries" , Object.entries(aaa));