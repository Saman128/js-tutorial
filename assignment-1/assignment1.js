// QNo. 3
"use strict";
name = "saman"; //error name is not defined. .....like let name;
// "use strict" help prevent error >enforce variable declaration..... >preventing global variable leak..... >disable certain featrure.



// QNo. 1
console.log("hello,World!");





// QNo. 2

// poorly structure code .....
// like....    let name="saman";age=22;console.log(name,age);

// refactore code is....
// let name="saman";
// let age=22; 
//  console.log(name,age);





// QNo. 7
let num1 = parseFloat(prompt("enter no. one"));
let num2 = parseFloat(prompt("enter no. two"));
let sum = num1 + num2;
alert(`addition result= ${sum}`);
let num3 = parseFloat(prompt("enter no. three"));
let mult = sum * num3;
alert(`multiplication result= ${mult}`);
let divid = mult / 2;
alert(`final result= ${divid}`);






// QNo. 8
function compare(a, b) {
    if (a > b) {
        return `a-${a} is greater number`;
    }
    if (a < b) {
        return `b-${b} is greater number`;
    } else {
        return `${a}=${b} both are equal`;
    }
}
const total = compare(2, 2);
console.log(total);




// QNo. 6
console.log(String(true));
console.log(Number("123"));
console.log(Boolean(0));
console.log(String(null));





// QNo. 5
function checktypeof(a, b) {
    return `typeof A ${typeof a} & typeof B ${typeof b}`
}
const check = checktypeof("hi", 4);
console.log(check);



// QNo. 4
let name = "saman";
let age = 22;
let boolean = true;

name = "seher";
age = 21;
boolean = false;
console.log(name);
console.log(age);
console.log(boolean);




//QNo.9
function calculator(a, b, op) {
    if (op == "+") {
        return a + b;
    } if (op == "-") {
        return a - b;
    } if (op == "*") {
        return a * b;
    } if (op == "/") {
        return a / b;
    } else {
        return "invalid operator!";
    }
}
console.log(calculator(2, 4, "-"));



// QNo.10
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
        output += "Fizz";
    } if (i % 5 === 0) {
        output += "BUZZ";
    } {
        console.log(output, i)
    }
}
