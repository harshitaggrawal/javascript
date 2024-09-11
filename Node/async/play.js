console.log('Starting');


//? synchorized programming to execute program line by line 

//? Asynchornized programming to execute program continous acccording to time  we  can acheived by setTimeOut  function

setTimeout(function(){
    console.log("3 second timeer");
},3000);

setTimeout(function(){
    console.log("1 second timeer");
},1000);


console.log('Ending ');

const timmer=function(){
    console.log('This is Timer ');
}

setTimeout(timmer,10000);


function listNames(names)
{
    names.forEach(element => {
        console.log(element);
    });
}


const names=['Harshit','Sakshi','Praveen'];
//! we can not pass synchornized function directly 
//? we have to make anonmyous function
setTimeout(function()
{
    listNames(names);  
},3000);