
function toArray(args, start){
    var st = start || 0;
    var arr = [];
    for(let i = st; i< args.length; i++){
        arr.push(args[i]);
    }
    return arr;
}

Function.prototype.call = function (){
    var allArgs = toArray(arguments);    

    var argsArr = [];
    for(let i=1; i< allArgs.length; i++){
        argsArr.push("arguments[" + i + "]");
    }

    var  context  = Object( allArgs[0] || (typeof window !== 'undefined' ? window : undefined ) ||  undefined);   

    var originFn = context.__fn__;         

    context.__fn__ =  this;

    var code = "context.__fn__(" +  argsArr.join(",")  +  ")";
    var result = eval(code);

    if(originFn){
        context.__fn__ = originFn
    }else {
        delete context.__fn__;
    }
    return result;
    
}


function aaa(arg1, arg2){
    console.log("arg1", arg1);
    console.log("arg2", arg2);
    console.log("this.name", this.name);
    return 1000
}

var obj1 = {
    name: 10,
    __fn__: function(){
        console.log("我是原来的的__fn__")
    }
};
var result = aaa.call(obj1, {
    age: 10
});

obj1.__fn__();

console.log("");
console.log("null contenxt");


var result = aaa.call(null);

console.log("result", result);

