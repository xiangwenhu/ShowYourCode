

var slice = Array.prototype.slice;

function isFunction(fn){
    return typeof fn === "function"
}

// Symbol 未处理
function isKey(key){
    return typeof key === "number" || typeof key === "string"
}

function EventEmitter(){
    this._events = {};
}

function validateType(type){
    if(!isKey(type)){
        throw new TypeError("type不是有效的值")
    }
}

function validateFn(fn){
    if(!isFunction(fn)){
        throw new TypeError("fn必须是函数");
    }
}

EventEmitter.prototype.on = function (type, fn){
    validateType(type);
    validateFn(fn);
    
    var fns = this._events[type] || (this._events[type] = []);
   
    fns.push(fn);
}

EventEmitter.prototype.emit = function(type){
    validateType(type);
    var fns = this._events[type];
    if(!fns){
        return;
    }  
    
    var args =  slice.call(arguments, 1);
    for(let i= fns.length - 1; i >= 0; i--){
        var fn = fns[i];
        fn.apply(null, args);
        if(fn._once !== true){
            continue;
        }
        this.off(type, fn);
    }
}

EventEmitter.prototype.once = function(type, fn){
    validateType(type);
    validateFn(fn);

    var fns = this._events[type] || (this._events[type] = []); 

    // 更好的方法是包裹 https://github.com/browserify/events/blob/main/events.js
    // 或者是全部都包裹 EE https://github.com/primus/eventemitter3/blob/master/index.js
    fn._once = true;
    fns.push(fn);
}


EventEmitter.prototype.off = function(type, fn){
    validateType(type);
    validateFn(fn);
    
    var fns = this._events[type];
    if(!fns){
        return;
    }

    var index = fns.findIndex(f=> f=== fn);
    if(index < 0){
        return;
    }

    fns.splice(index,1);
}

EventEmitter.prototype.removeAllListeners  = function(){

    if(arguments.length === 0){
        // 暴力清除
        this._events = Object.create(null);
        return;
    }

    var type = arguments[0];

    validateType(type);
    // 暴力清除
    this._events[type] = [];

}


var em = new EventEmitter();

em.once("event1", (...args)=>{
    console.log("event1 once", ...args);
});

em.on("event1", (...args)=>{
    console.log("event1 on", ...args);
});
em.on("event2", (...args)=>{
    console.log("event2 on", ...args);
});

em.emit("event1", 1,2,{a:1});
em.emit("event2", {a:2});
console.log("")
em.emit("event1", 1,2,{a:1});
em.emit("event2", {a:2});
console.log("");
em.removeAllListeners();
em.emit("event1", 1,2,{a:1});
em.emit("event2", {a:2});