

const slice = Array.prototype.slice;

/*
* 1.创建一个空对象
* 2.链接到原型
* 3.绑定this值
* 4.如果返回值是对象返回对象，反之返回this
*/
function createObject(){

    var  args =  slice.call(arguments);
    var  constructor = args.shift();
    if(typeof constructor !== "function"){
        throw new TypeError("constructor should be a function");
    }

    // step 1 create empty object
    var object = {};

    // setp 2 prototype
    object.__proto__ = constructor.prototype;

    // step 3  bind this
    const result = constructor.apply(object, args)

    // return value
    return typeof result ===  "object" ? result : object;

}



function Product(name, price){
    this.name = name;
    this.price = price;
}

var product = createObject(Product, "相机", 100);

console.log("product.__proto__", product.__proto__ === Product.prototype);
console.log("product", product,);