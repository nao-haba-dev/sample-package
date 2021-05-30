"use strict";
// 真偽値型
const hasvalue = true;
// 数値型
const count = 10;
// 文字列型
const single = 'hello';
//======
// 型推論 const xxx=true;
// 型注釈 const xxx:boolean=true; 基本はこっち
//======
// オブジェクト型
const person = {
    name: 'jack',
    age: 21
};
// 配列に型をつける
const fruits = ['apple', 'banana', 'grape'];
// 配列の形通りにする tuple型
const book = ['business', 1500, false];
// 列挙型 enum
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["SHORT"] = "SHORT";
    coffeeSize["TALL"] = "TALL";
    coffeeSize["GRANDE"] = "GRANDE";
    coffeeSize["VENTI"] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
const coffee = {
    hot: true,
    size: coffeeSize.TALL
};
// any型 なんでも入る
const anything = true;
// Union型 複数の型を使う
const unionType = 10;
// Literal型 特定の値のみ
const apple = 'apple';
// 関数に型を適応
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値をvoidにする
function sayHello() {
    console.log('hello');
}
// 関数型
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
// コールバック
function doubleAndHandle(num, cb) {
    const doubleName = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// unKnown
let unknownInput;
unknownInput = 'hello';
let text;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never 何も返さない
function error(message) {
    throw new Error(message);
}
