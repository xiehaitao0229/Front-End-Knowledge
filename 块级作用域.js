{
	let a=1;
  {
  	let a=2;
  }
}

//  编译出来的结果
"use strict";

{
  var a = 1;
  {
    var _a = 2;
  }
}

//  ES5规定，函数只能在顶层作用域和函数作用域之外声明，不能在块级作用域中声明。
//  ES6引入了块级作用域，明确允许在块级作用域中声明函数。

let obj = {
  a: 1,
  arr: [1, 2]
};
let obj1 = Object.assign({},obj)

obj1.a = 2
//不变
console.log(obj) // { a:1, arr: [1,2] };