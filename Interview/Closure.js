//! Closure

//? Cloure is a way to creating the private variable.
//* in js we can not make private varible 
//? private variable is  used for data hiding in a singe unit..

/*
function person(){
    let a=90;
    console.log(a);
    return a;

}

let num=person();
num=num+100;
console.log(num);
num="harshit";
console.log(num);
//?we are changing varible many time 
*/

function Person(){
    let a=90;
    return function(code){
        let pin=a+code;
        return pin;
    }
}

const pinfunnction=Person();  //?fumcttion return function in this function we can not change the value of a for this function thrn a varible is private
let pin=pinfunnction(100);
console.log(pin);