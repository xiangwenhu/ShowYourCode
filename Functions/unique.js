function unique(arr) {
    var ret = [];
    var temp;
    for (var i = 0; i <= arr.length - 1; i++) {
        temp = arr[i];
        if (ret.indexOf(temp) < 0) {
            ret.push(temp)
        }
    }
    return ret;
}


function uniqueWithMap(arr) {
    const ret = [];
    const map = new Map();
    let temp;
    for (var i = 0; i <= arr.length - 1; i++) {
        temp = arr[i];
        if (map.has(temp)) {
            continue;
        }
        map.set(temp, 1);
        ret.push(temp);
    }
    return ret;
}


const arr = Array.from({ length: 10000 }, (value, index) => {
    return index % 666
})

let re;
console.time("unique");
ret = unique(arr);
console.log("len", ret.length);
console.timeEnd("unique");


console.time("uniqueWithMap");
ret = uniqueWithMap(arr);
console.log("len", ret.length);
console.timeEnd("uniqueWithMap");