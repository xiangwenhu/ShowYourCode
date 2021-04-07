
var slice = Array.prototype.slice;
Function.prototype.apply = function (){
    var allArgs = slice.call(arguments);    
     // 未考虑node环境
    var context = Object( allArgs[0] || (typeof window !== 'undefined' ? window : undefined ) ||  undefined);    

    var argsArr = [];
    for(let i=1; i< allArgs.length; i++){
        argsArr.push("arguments[" + i + "]");
    }

    var code = "this.call(context, " +  argsArr.join(",")  + ")";
    var result = eval(code);
    return  result;
}


function aaa(arg1, arg2){
    console.log("arg1", arg1);
    console.log("arg2", arg2);
    console.log("this.name", this.name);
    return 1000
}

var obj1 = {
    name: 10
};
var result = aaa.apply(obj1, {
    age: 10
}, {
    sex: 1
});