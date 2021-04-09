function isNumer(num){
    return typeof num === "number";
}

function isFunction(fn){
    return typeof  fn === "function";
}

function isValidNumer(num){
    return isNumer(num) && num >= 0
}

// https://github.com/jashkenas/underscore/blob/master/underscore.js#L1099-L1138
/**
 * 多少时间内至多执行一次
 * @param {*} fn 
 * @param {*} wait 
 * @returns 
 */
function throttle(fn, wait){
    if(!isNumer(wait)){
        throw new TypeError("delay 必须是大于等于0的正数");
    }

    if(!isFunction(fn)){
        throw new TypeError("fn必须是一个函数");
    }

    var last = Date.now();
    return function (){
        var context = this || null;
        var now = Date.now();
        if(now - last <= wait){
            return;
        }  
        last = now;      
        return fn.apply(context, arguments);
    }
}


const log = throttle(function(){
    console.log("now", Date.now())
}, 1000);


setInterval(()=>{
    log();
}, 100)