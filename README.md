## 手写ES函数

### Function
* [Function.prototype.call](./builtin/function/Function.prototype.call.js)
* [Function.prototype.apply](./builtin/function/Function.prototype.apply.js)
* [Function.prototype.bind](./builtin/function/Function.prototype.bind.js)
  
### Object
* [Object.assign](./builtin/object/Object.assign.js)
* [Object.create](./builtin/object/Object.create.js)
* [Object.keys](./builtin/object/Object.keys.js)
* [Object.values](./builtin/object/Object.values.js)
* [Object.entries](./builtin/object/Object.entries.js)

### Array

主要注意empty项的处理。

* [Array.prototype.forEach](./builtin/array/Array.prototype.forEach.js)
* [Array.prototype.every](./builtin/array/Array.prototype.every.js)
* [Array.prototype.filter](./builtin/array/Array.prototype.filter.js)
* [Array.prototype.some](./builtin/array/Array.prototype.some.js)
* [Array.prototype.map](./builtin/array/Array.prototype.map.js)
  注意empty项,map之后回返回empty
  ```js
    var arr = [1, 2, 3].concat(new Array(8)).map(function (v, i, arr) {
        return v + "-" + i + "-" + arr.length
    }, [2])

    console.log("arr", arr);  // arr [ '1-0-11', '2-1-11', '3-2-11', <8 empty items> ]
  ```
* [Array.prototype.reduce](./builtin/array/Array.prototype.reduce.js)
  注意全部是empty项
* [Array.prototype.reduceRight](./builtin/array/Array.prototype.reduceRight.js) 
  

## 手写函数
* [clone](./Functions/clone.js)  
* [throttle](./Functions/throttle.js)
* [debounce](./Functions/debounce.js)
* [curry](./Functions/curry.js)
* [instanceOf](./Functions/instanceOf.js)
* [new](./Functions/new.js)
* [unique](./Functions/unique.js)
* [sleep](./Functions/sleep.js)


## 手写ES库


## 手写库
* [events](./libs/events.js)
















> 
[前端面试常见的手写功能](https://juejin.cn/post/6873513007037546510)
[前端年后面试真题，会80%直接进大厂副本](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?from=logout&table=tblEnSV2PNAajtWE&view=vewJHSwJVd)
[冴羽的博客](https://github.com/mqyqingfeng/Blog)