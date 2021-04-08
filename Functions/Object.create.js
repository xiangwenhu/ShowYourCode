Object.create  = function(proto, propertyObject){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError("proto 必须是对象")
    }

    var F = function(){
    };

    F.prototype = proto;

    var result = new F();

    // 未处理Object.defineProperties支持的情况, 简单的就是遍历添加
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
    if ( proto !== null &&  propertyObject !== undefined &&  typeof Object.defineProperties === "function") {
        Object.defineProperties(result, propertyObject);
    }
    return result;

}


var a = Object.create({
    p1:10,
    log: ()=> {}
});

console.log(a.p1, a.log, Object.keys(a));

for(let p in a){
    console.log("p:", p , " value:", a[p]);
}

console.log(" ");
var nullObject = Object.create(null);
for(let p in nullObject){
    console.log("p:", p , " value:", a[p]);
}
