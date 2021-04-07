var slice = Array.prototype.slice;

Function.prototype.bind = function (){
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }    
    // 未考虑node环境    
    var allArgs = slice.call(arguments);    
    var contextArg = allArgs.shift();
    var context = Object( contextArg || (typeof window !== 'undefined' ? window : undefined ));  
    var args =  allArgs;

    var that = this;
    return function bound(){
        var mergedArgs = args.concat(slice.call(arguments));
        return that.apply(context, mergedArgs);
    }

}


function test(arg1, arg2, arg3){
    console.log("arg1", arg1);
    console.log("arg2", arg2);
    console.log("arg3", arg3);
    console.log("this.name", this.name);
}


test.bind({name:"你们说什么"}, {
    bindProp: "666"
})({
    age: 10
}, {
    sex: 1
})
