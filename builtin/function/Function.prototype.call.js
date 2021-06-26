Function.prototype.call = function (){
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    
    var argsArr = [];
    for(let i=1; i< arguments.length; i++){
        argsArr.push("arguments[" + i + "]");
    }

    // 未考虑node环境
    var  context  = Object(arguments[0] || window);   

    // 保留现场
    var hasFn = ("__fn__" in context);
    var originFn;
    if(hasFn){
       originFn = context.__fn__
    };    

    context.__fn__ =  this;

    var code = "context.__fn__(" +  argsArr.join(",")  +  ")";
    var result = eval(code);

    if(hasFn){
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
},{
    sex: 1
});

obj1.__fn__();

// console.log("");
// console.log("null contenxt");


// var result = aaa.call(null);

// console.log("result", result);

