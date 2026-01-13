// 声明变量类型用冒号
let a:string;
let b:number;
let c:boolean;

// 函数的声明
// 参数1为number 参数2为number 返回值为string
// 先声明变量 再赋值（赋值成函数）再导出
let demo:(a:number,b:number,c?:number)=>number
demo = function(a,b,c){
    return a+b+(c || 0);
}
// ts类型自动判断
// let d = '你好'
// d = 2 // Error: Type 'number' is not assignable to type 'string'.

// 字面量
let aa : '你好';
let bb : 100;
let gender : 'male' | 'female';
// aa = 'guangming' // 不能将类型“"guangming"”分配给类型“"你好"”
// bb = false  // 不能将类型“false”分配给类型“100”
// gender = 'unknown' // 能将类型“"unknown"”分配给类型“"male" | "female"”

// 显式any和隐式any
let cc:any;
cc = 'hello';
cc = 100;
cc = true;

let dd;
dd = 'hello';
dd = 100;
dd = true;

let ee:string
ee = cc

// unknown 类型安全的any
let ff : unknown
ff = 'hello'
ff = 100
ff = true
let x : string
// x = ff  // 不能将类型“unknown”分配给类型“string”
// 以下三种写法将ff赋值给x
if(typeof ff === 'string'){
    x = ff
}
x = ff as string;
x = <string>ff;

// any声明的数据后面.其他方法不会报错，unknown与之相反
let gg1:string = 'guangming';
gg1.toUpperCase();
let gg2:any = 'hello';
gg2.toUpperCase();

// unknown.其他方法会报错
let gg3:unknown = 'hello';
// 强行指定gg3类型为string
(gg3 as string).toUpperCase()

// never
let str1:string = 'hello';
function error(message:string):never{
    throw new Error(message);
}

function noReturn(message:string):void{
   
}

// a的值可以是任何【⾮原始值类型】，包括：对象、函数、数组等
let obj : object;
obj = {};
obj = {name:'guangming'};
obj = [1,2,3];
obj = function(){};

//  以下代码，是将【原始类型】赋给a，有警告
/* obj = 'hello';
obj = 1;
obj = true;
obj = null;
obj = undefined; */

//  限制person对象的具体内容，使⽤【,】分隔，问号代表可选属性
let person:{name:string,age?:number};

// 限制car对象的具体内容，使⽤【;】分隔，必须有price和color属性，其他属性不去限制，有没有都⾏
let car:{brand:string;color:string;[key:string]:any};

person = {name:'guangming'};
person = {name:'guangming',age:18};
car = {brand:' honda',color:'red',price:100000};
car = {brand:' honda',color:'red',price:100000,warranty:1};

// 限制函数的参数、返回值，使⽤以下形式
export function add(a:number,b:number):number{
    return a+b
};

export { demo };

// 限制为数组
let arr1:number[] = [1,2,3]; 
let arr2: Array<number> = [1,2,3];
let arr3:string[] = ['hello','world'];
let arr4: Array<string> = ['hello','world'];

// tuple 长度固定的数组
let t:[number,string];
t = [1,'hello'];
// t = [1,'hello',false]; // Error: Type 'boolean' is not assignable to type 'string'.


