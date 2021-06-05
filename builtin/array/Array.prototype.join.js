

// // https://262.ecma-international.org/5.1/#sec-15.4.4.5

/**
 * 
 * 
 * 4. If separator is undefined, let separator be the single-character String ",".
 * 8. If element0 is undefined or null, let R be the empty String; otherwise, Let R be ToString(element0).
 * 
 * @param {*} callback 
 * @param {*} thisArg 
 */
Array.prototype.join = function (separator) {

    var obj = Object(this);
    var len = obj.length;

    var spStr = separator === undefined ? "," : separator;
    spStr = spStr + "";

    if (len === 0) {
        return ""
    }

    var result;
    var element0 = obj[0];
    result = element0 === null || element0 === undefined ? "" : element0 + "";

    var item;
    for (var k = 1; k < len; k++) {
        item = obj[k];
        if (item === null || item === undefined) {
            result += "" + spStr + ""
        } else {
            result += "" + spStr + item
        }
    }

    return result;
}





const arr = [null, 1, undefined, { a: 1 }, [2], [{ a: 2 }]];


console.log(arr.join());
// ,1,,[object Object],2,[object Object]

