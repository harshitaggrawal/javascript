"use strict";
//! ARRAY METHODS
//const arr=["a","b","c","d","e","f"];

//! SLICE
/*
console.log('----Slice Method ------'); //* It does not effect orginal array
console.log(arr.slice(2)); //c,d,e,f
console.log(arr.slice(2,4)); //c,d
console.log(arr.slice(-2));  //e,f
console.log(arr.slice(2,-2)); //c,d
console.log(arr.slice()); // complete arr
*/
//!  SPLICE--> mutable
/*
console.log('-----SPLICE-----'); //* it change original array
//syntax: arr.splice(strtingINdex,no.of elemnt we want)

//console.log(arr.splice(2)); // this elmment has been remove from original array
console.log(arr);
//console.log(arr.splice(1,4)); //b,c,d,e
console.log(arr.splice(-2)); //e,f
console.log(arr);
*/
//! REVERSE -->mutable can chnage original aray
/*
let arr2=["j","i","h","g","f"];
arr2.reverse();
console.log(arr2);

//! CONCAT

let arr3=arr.concat(arr2);
console.log(arr3);

//! Join  --> IT convert array into a String 

console.log(arr3.join(" ")); 
*/




//! For  OF method

const movement=[200,450,-89,-650,50,14000];

/*
for(const  mov of movement)
{
   if(mov>0)
   {
    console.log('You Deposite: '+mov);
   }
   else{
    console.log('You Withdraw: '+Math.abs(mov));
   }
}
*/

//! FOREACH Method --> In this loop 1st parameter is elements of an array and second paramter is index number of elemnt and third paramter is same array

movement.forEach(function(mov,index,arr1)
{
   console.log(arr1);
    if(mov>0)
   {
    console.log(index+1+' You Deposite: '+mov);
   }
   else{
    console.log(index+1+' You Withdraw: '+Math.abs(mov));
   }
});


const currency=new Map();
currency.set('USD','US Dollar');
currency.set('INR',"Indian Rupe");
currency.set('EUR','Euro');
currency.set('GBP','Pound');



console.log(currency);

currency.forEach(function(value,key,map)
{
    console.log(key+" == " +value);
});



const arr=[2,3,4,5,6];
console.log(arr);

const newarr=arr.map(function(el,i,arr)
{
    return el;
});
console.log(newarr);



/*
//! MAP : to map or changeed all elements of an array,return array
const arr=[2,3,4,5,6,12,23,45];
console.log(arr);

const newarr=arr.map(function(el,i,arr)
{
    return el*2;
});

console.log(newarr);

//! Filter: to check or apply condition in an array , return array

const filterarr=arr.filter(function(el,i,arr)
{
    return el>10;
})
console.log(filterarr);

//! REDUCE  --> easy sum with the help of reduce it return sum

const transc=[200,600,780,-235];

const add=transc.reduce(function(acc,ele,i,transc)
{
    acc+=ele;
    return acc;
},0)  //intial  acc value is zero
console.log(add);

//! Find -> to find a single elemts other wee can use filter 
const transc=[200,600,780,-235];
const found =transc.find((trans)=>{
    return trans==600;
})
console.log(found);

*/

//! Question 
//? convert usd to inr (1 dolar=82.50rs)
/*
const usd=[200,450,-420,890,45,-23];

const inr=usd.map(function(ele,i,usd){
    return ele*82.5;
},0) ;  //intial  acc value is zero
console.log(inr);
*/

//! Some and every
/*
//* some means to check alleast one value staisfied condition it gives true or not it gives false value 
const arr=[5000,9000,-900,230,908,-345];

const someVal=arr.some(function(ele)
{
    return ele>=1000;
})
console.log(someVal);

//* Every it checks all condition if all condition is true then gives true otherwise false
const everyVal=arr.every(function(ele)
{
    return ele>=1000;
});
console.log(everyVal);
*/