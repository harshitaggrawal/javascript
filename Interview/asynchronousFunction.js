console.log('hello world');

setTimeout(()=>{
    for(let i=0;i<5;i++)
    {
        console.log('Heelo im in inside call back');
    }
},4000);

for(let i=0;i<5;i++)
{
    console.log('hello im in main function');
}

//? setTimeOut is a asynchorind function bcoz  it does not executed line by line but according the time
//? it does not work on event loop of js

//* event loop is just like a thread that runs all the function of the js and run program of the js
//? call Stack work to execute function with the help of call Stack
//? Web Api run by the brower like timer and all....  call stack handled setTimeOut function to the Web Api and wait for the timing 

// after time it  gives to the callBack Queue 
//? when our call Stack has been empty then event loop check in to queue and gives to the callback to the call Stack

// this is total sinriyo of ashychorinnces java script...

//! our js is a single threaded 


