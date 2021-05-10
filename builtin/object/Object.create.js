var hasOwnProperty = Object.prototype.hasOwnProperty;
Object.create  = function(proto, propertyObject){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError("proto 必须是对象");
    }

    if(propertyObject !== undefined && !(typeof propertyObject == "object" && propertyObject !== null ) ){
        throw new TypeError("propertyObject 必须是对象");
    }

    var F = function(){
    };

    F.prototype = proto;

    var result = new F();
   
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
    if (propertyObject !== undefined ) {
        if(typeof Object.defineProperties === "function"){
            Object.defineProperties(result, propertyObject);
        }else {
            for(var p in propertyObject){
                if(!hasOwnProperty.call(propertyObject, p)){
                    continue;
                }
                Object.defineProperty(result, propertyObject[p]);
            }
        }
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
var nullObject = Object.create(null, undefined);
for(let p in nullObject){
    console.log("p:", p , " value:", a[p]);
}
