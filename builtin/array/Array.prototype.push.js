
/**
 * https://tc39.es/ecma262/#sec-array.prototype.push
 * 
 * 4. If len + argCount >  Math.pow(2,53) - 1, throw a TypeError exception.
 * 
 */
Array.prototype.push = function () {

    var O = Object(this);

    var len = O.length;

    var argLen = arguments.length;

    if(argLen > Math.pow(2,53) - 1){
        throw new TypeError("参数长度超过最大限制");
    }

    for (var i = 0; i < argLen; i++) {
        O[len] = arguments[i];
        len++;
    }

    O.length = len;


    return len;

}



// var bigArr = Array.from({ length: Math.pow(2, 55) }, (val, index) => {
//     return index
// });

var bigArr = [];
var length = Math.pow(2,10);
for(let i=0; i<length; i++){
    bigArr.push(i);
}

console.log(bigArr.length);

var arrr = [-1,-1];
 arrr.push(...bigArr);

console.log(arrr.length);
