var hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * https://tc39.es/ecma262/#sec-array.prototype.shift
 * 
 * 
 * c. Let fromPresent be ? HasProperty(O, from).
    d. If fromPresent is true, then
    i. Let fromVal be ? Get(O, from).
    ii. Perform ? Set(O, to, fromVal, true).
    e. Else,
    i. Assert: fromPresent is false.
    ii. Perform ? DeletePropertyOrThrow(O, to).
 * 
 */
Array.prototype.shift = function () {

    var O = Object(this);
    var len = O.length;

    if (len === 0) {
        return undefined;
    }

    var element = O[0];

    var keyFrom;
    var keyTo;
    for (var i = 1; i < len; i++) {
        keyFrom = i + "";
        keyTo = (i - 1) + "";
        if (hasOwnProperty.call(O, key)) {
            O[keyTo] = O[keyFrom]
        }else {
            delete O[keyTo]
        }
    }

    delete O[len];
    O.length = len - 1;
    return element;
}



var arr = [1, 2, 3, 4];

console.log(arr.shift(), arr, arr.length);
