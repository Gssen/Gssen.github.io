typeof 和 instanceof 是两个常用于判断变量类型的操作符
### typeof
对一个值使用typeof操作符会返回下列字符串之一： 
- "undefined"表示值未定义； 
- "boolean"表示值为布尔值； 
- "string"表示值为字符串； 
- "number"表示值为数值； 
- "object"表示值为对象（而不是函数）或null； 
- "function"表示值为函数； 
- "symbol"表示值为符号。 

但这里有几个问题需要注意一下：

1. typeof null // 'object'，这个网上有很多解释可以看下
2. 在对未初始化的变量调用 typeof 时，返回的结果是"undefined"，这个大家应该都了解。需要注意的是对未声明的变量调用它时，返回的结果也是"undefined"
``` javascript
let message; // 这个变量被声明了，只是值为undefined
// 确保没有声明过这个变量 
// let age 
console.log(typeof message); // "undefined" 
console.log(typeof age);     // "undefined"
```

### instanceof
instanceof 运算符测试构造函数的属性是否出现在对象的原型链中的任何位置。返回值是一个布尔值
它可以准确判断复杂的引用数据类型，但对于基本数据类型（如字符串、数字等）则无能为力
``` javascript
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false

// 这里也有一个需要注意的问题
"" instanceof String // false
"".__proto__ === String.prototype // true，涉及到 js 基本类型的拆装箱机制
```