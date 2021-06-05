
/**
 * https://tc39.es/ecma262/#sec-array.prototype.pop
 * @param {*} callback 
 * @param {*} thisArg 
 */
Array.prototype.pop = function (callback, thisArg) {

    var O = Object(this);
    var len = O.length;

    if(len === 0){
        return undefined;
    }
    var newLen = len - 1;
    
    var index = newLen + "";
    var elment = O[index];
    delete O[index];
    O.length = index;

    return elment;

}

var arr = [0,1,2];

console.log(arr.pop(), arr, arr.length);
console.log(arr.pop(), arr, arr.length);


