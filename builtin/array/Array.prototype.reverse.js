
var hasOwnProperty = Object.prototype.hasOwnProperty;

Array.prototype.reverse = function () {

  var O = Object(this);
  var len = O.length;

  // 小于等于1
  if (len <= 1) {
    return O;
  }

  var tIndex;
  var half = ~~(len / 2);
  var tempS, tempT;
  var hasS, hasT;
  for (var index = 0; index < half; index++) {

    tIndex = len - index - 1;
    tempS = O[index];
    tempT = O[tIndex];
    hasS = hasOwnProperty.call(O, index);
    hasT = hasOwnProperty.call(O, tIndex);

    if (!hasS && !hasT) {
      continue;
    }

    if (hasS && !hasT) {
      delete O[index];
      O[tIndex] = tempS;
      continue;
    }

    if (hasT && !hasS) {
      delete O[tIndex];
      O[index] = tempT;
      continue;
    }

    O[index] = tempT;
    O[tIndex] = tempS;
  }

  return O;
}



var a =  new Array(2).concat([1,2]).concat(new Array(1));

// for(var i=0 ; i< a.length ;i++){
//   console.log("has", i, hasOwnProperty.call(Object(a), i));
// }

// console.log(a);   // [ 1, 2, 3, <4 empty items> ]

var b = a.reverse();
console.log(b); // [ <4 empty items>, 3, 2, 1 ]


console.log(a === b);

delete a[1]

console.log(a);