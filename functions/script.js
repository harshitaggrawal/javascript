"use strict";

//! Default parameters
/*
const bookings=[];

const createBoking=function(trainNo,noPassenger=1,price=199*noPassenger){

    trainNo=trainNo||1000;
    const booking={
        trainNUm:trainNo,
        NumOfPassenger:noPassenger,
        price:price
    };

    console.log(booking);
    bookings.push(booking);
}
createBoking(123,5,556);
createBoking();
createBoking(123,2);
createBoking(123,undefined,78);  // we can not leave empty  field
console.log(bookings);

*/

//! Passing arugument value vs referance
/*
const train="DL123";
const rahul={
    name:"Rahul Sharma",
    ticketno:67589,
};
const checkIn=function (trainNo,passenger)
{
    trainNo="DL789";
    passenger.name="Mr. "+passenger.name;
    if(passenger.ticketno===67589)
    {
        alert("checked-in")
    }
    else{
        alert("Wrong Ticket");
    }
}
checkIn(train,rahul);


//? After call the function we pass an argument string,object 
//? string argument store in stack memory we give only value not variable memory thats why train did not update 
//? object arguments store in a heap memory we pass  refernece the object thats why object value is updated through the function  
console.log(train,rahul);
*/

//!  IN JS there are two  type of function
//? 1. First-Class Function
//* JS treat as an First class citizen
//* this means that function are simply value
//* function  are just another type of object

//* Store function in a variable 
//* Example 
/*
const add=(a,b)=>a+b;

const counter={
    value:23,
    inc:function(){this.value++}
};

//* Passing functionas argument to another function
const greeting=()=>{
    console.log('Hello');
}
document.querySelector("body").addEventListener("click",greeting);
*/

//? Higher-order Function
//* A function that recive another function as an argument,or return a new function,or both
/*
function counter(){
    let count=0;
    return function(){
        count++
    }
}
const oneword=function(str){
    return str.replace(/ /g,"").toLowerCase();
}
console.log(oneword("h arshit wimg"));

const upperFirstletter=function(str){
    const[first,...others]=str.split(" ");
    return [first.toUpperCase(),...others].join(" ");
}

console.log(upperFirstletter("hello my name is harshit"));

const transformer=function(str,fn){
    console.log(`Original String ${str}`);
    console.log(`Transformed String ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`);
}

transformer("my name is Harshit Aggrawal",oneword);
transformer("my name is Harshit Aggrawal",upperFirstletter);

*/

//! Function returning a function
/*
const greet=function(greeting){
    return function(name){
        console.log(`${greeting},${name}`);
    }
};
const greatHey=greet("hey");
greatHey("Sakshi");

const greatHello=greet("Hello");
greatHey("Harshit");

greet("Namaste")("India");
*/

//! Call and apply Keyword

//DL01,DL02,DL03,Dl04  -->train number

const delhiTrain={
    trainName:'Delhi-Train',
    trainCode:'DL',
    bookings:[],

    book(trainNum,name){
        console.log(`${name} Booked a seat on ${this.trainName} of ${this.trainCode} ${trainNum}`);
    }

}
console.log(delhiTrain.book("02","Rahul"));
console.log(delhiTrain.book("03","MOhit"));

const MumbaiTrain={
    trainName:'Mumbai-Train',
    trainCode:'MH',
    bookings:[]
};


const book=delhiTrain.book;  // it return the  function
// book('o1','Harshit');  //does not work
 console.log(book);


 //? functionName.call(objectname,param1,param2,...);  
book.call(MumbaiTrain,"01","Harshit");
