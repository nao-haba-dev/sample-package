// 真偽値型
const hasvalue: boolean = true;

// 数値型
const count: number = 10;

// 文字列型
const single: string = 'hello';

//======
// 型推論 const xxx=true;
// 型注釈 const xxx:boolean=true; 基本はこっち
//======

// オブジェクト型
const person: {
    name: string,
    age: number
} = {
    name: 'jack',
    age: 21
}

// 配列に型をつける
const fruits: string[] = ['apple', 'banana', 'grape'];

// 配列の形通りにする tuple型
const book: [string, number, boolean] = ['business', 1500, false];

// 列挙型 enum
enum coffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: coffeeSize.TALL
}

// any型 なんでも入る
const anything: any = true;

// Union型 複数の型を使う
const unionType: number | string = 10;

// Literal型 特定の値のみ
const apple: 'apple' = 'apple';

// typeエイリアス 複数の型を変数で扱う
type clothSize = 'small' | 'medium' | 'large';


// 関数に型を適応
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// 関数の戻り値をvoidにする
function sayHello(): void {
    console.log('hello');
}

// 関数型
const anotherAdd: (n1: number, n2: number)
    => number = function (num1, num2) {
        return num1 + num2;
    };

const doubleNumber = (num: number): number => num * 2;

// コールバック
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleName = cb(num * 2);
    console.log(num * 2);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});

// unKnown
let unknownInput: unknown;
unknownInput = 'hello';
let text: string;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// never 何も返さない
function error(message: string): never {
    throw new Error(message);
}
