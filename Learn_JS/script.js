'use strict'

// defalut paramater
function sum(a=1,b=2) {
    return a+b;
}

console.log(sum(4,78))

// passing by value
// passing by refernce (does not have it)

// first class function & high order function
// js use callback all the time
/*
    addEventListener => high-order functin
    function => callback function
*/
const sm = function () {
    console.log('clicked');
};

document.body.addEventListener('click', sm);

// deep dive into closure
// the call and apply and bind method in function

// imedatily invoke function 

// closure
