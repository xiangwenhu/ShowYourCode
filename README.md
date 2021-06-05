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
* [Array.prototype.find](./builtin/array/Array.prototype.find.js)  
* [Array.prototype.fill](./builtin/array/Array.prototype.fill.js)  
  
* [Array.prototype.flat](./builtin/array/Array.prototype.flat.js)  
* [Array.prototype.flatMap](./builtin/array/Array.prototype.flatMap.js)  
* [Array.prototype.indexOf](./builtin/array/Array.prototype.indexOf.js)  
* [Array.prototype.join](./builtin/array/Array.prototype.join.js)
* [Array.prototype.pop](./builtin/array/Array.prototype.pop.js)
* [Array.prototype.push](./builtin/array/Array.prototype.push.js)
* [Array.prototype.shift](./builtin/array/Array.prototype.shift.js)


* [Array.prototype.reverse](./builtin/array/Array.prototype.reverse.js)
* [Array.prototype.slice](./builtin/array/Array.prototype.slice.js)
* [Array.prototype.sort](./builtin/array/Array.prototype.sort.js)  
* [Array.prototype.splice](./builtin/array/Array.prototype.splice.js)
* [Array.prototype.unshift](./builtin/array/Array.prototype.unshift.js)
  
  
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