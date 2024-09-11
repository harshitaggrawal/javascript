//! Promise function-> there are Three state 

// 1. Pending State -> Aynchronized task are completed
// 2. Resolve  or fulfilled
// 3. Reject 
//? first of all promise is in pending state
//? promise function is all a asynchronise function
/*
let promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let a=90;  //? it can be  anything ,api data,array,object
        if(a!=90)
        {
            resolve("fulfilled");
        }
        else{
            reject("not Fulfilled")
        }

    },3000)
});
console.log(promise);
//? then work for resolved state 
promise.then((data)=>{
    console.log(data);
});

//? catch block work for if promise has been rejected
promise.catch((data)=>{
    console.log(data);
});
*/

//? fetch data
/*
fetch("https://dummyjson.com/todos")
.then(result=>{
    return result.json();
})
.then(data=>{
    console.log(data);
})
.catch(()=>{
    console.log("error");
});
*/

// let promise=new Promise((resolve,reject)=>{
//     let result=fetch("https://dummyjson.com/todos");
//     if(result!==null)
//     {
//         resolve(result.json);
//     }
//     else{
//         reject("data not found")
//     }
// });

// promise.then((data)=>{
//     console.log(data);
// })

//? synchorized promise 

//? async always return promise function

async function printIt()
{
   let promise=new Promise((resolve,reject)=>{
        let a=90;
        if(a===90)
        {
            resolve("fulfilled")
        }
        else{
            {
                reject("not fulliled")

            }
        }
        
   })
   return promise;
}
printIt().then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
console.log('hello ');

// make synchrinzed after await apply
async function read(){
    let result=await printIt();
    console.log(result);
    console.log('hello');
}
read();