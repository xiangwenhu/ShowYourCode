function uniqueBy(arr, key) {
    const ret = [];

    const keysObj = Object.create(null);
    let temp;
    for (var i = 0; i <= arr.length - 1; i++) {
        temp = arr[i];
        if (keysObj[temp[key]]) {
            continue;
        }
        keysObj[temp[key]] = 1;
        ret.push(temp);
    }
    return ret;
}

function uniqueByMap(arr, key) {
    const ret = [];

    const map = new Map();
    let temp;
    for (var i = 0; i <= arr.length - 1; i++) {
        temp = arr[i];
        if (map.has(temp[key])) {
            continue;
        }
        map.set(temp[key], 1);
        ret.push(temp);
    }
    return ret;
}


const arr = Array.from({ length: 10000 }, (value, index) => {
    return {
        key: index % 666,
        value: index % 666
    }
})

let re;
console.time("uniqueBy");
ret = uniqueBy(arr, "key");
console.log("len", ret.length);
console.timeEnd("uniqueBy");


console.time("uniqueByMap");
ret = uniqueByMap(arr, "key");
console.log("len", ret.length);
console.timeEnd("uniqueByMap");
