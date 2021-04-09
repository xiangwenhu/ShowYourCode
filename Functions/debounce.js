
/**
 * 多少时间内未被触发，执行
 */
// https://github.com/jashkenas/underscore/blob/master/underscore.js#L1144
function debounce(fn, waiting){
    var ticket;

    return function debounced(){  
        var context = this;
        var args = arguments;  
      
        clearTimeout(ticket);
        ticket = setTimeout(function(){
            fn.apply(context, args);
        }, waiting);
        
    }
}


function aaa(arg1 , arg2){
    console.log("time", Date.now());
    console.log(arg1, arg2);
}


const db = debounce(aaa, 1000);

var times = 20;
console.log("time", Date.now());
var ticket = setInterval(() => {   
    db(100, "aa");
    times --;
    if(times <=0){
        clearInterval(ticket);
    }
}, 150);