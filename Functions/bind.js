var slice = Array.prototype.slice;

Function.prototype.bind = function (){
    // 未考虑node环境    
    var allArgs = slice.call(arguments);    
    var context = Object( allArgs[0] || (typeof window !== 'undefined' ? window : undefined ) ||  undefined);  
    var args =  allArgs.slice(1);

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
