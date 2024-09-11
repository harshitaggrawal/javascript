"use strict";

//* Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

//! Data
const account1={
    owner: "Rahul kumar",
    movements:[200,400,-400,500,-140,80],
    intrest:1.2,
    pin:1111
};
const account2={
    owner: "Vipin kumar",
    movements:[300,4500,-4570,1500,-1140,80,-20],
    intrest:1.2,
    pin:2222
};
const account3={
    owner: "Sakshi pundir",
    movements:[2200,1400,-4400,5500,-1400,780,900],
    intrest:2.5,
    pin:3333
};
const account4={
    owner: "Harshit Aggrawal",
    movements:[20000,-1400,4400,-5400,-9940,800],
    intrest:2.9,
    pin:4444
};

const accounts=[account1,account2,account3,account4];

//! Functions 

const displaymovements = movements=>{

   
    containerMovements.innerHTML="";

    movements.forEach(function(mov,i)
    {
        const type= mov>0 ? "deposit" : "withdraw";
       
        const html=`
        <div class="movements-row">
        <div class="movements-type movements-type-${type}"> ${i+1} ${type}</div>
        <div class="movements-date">3 days ago</div>
        <div class="movements-value">${Math.abs(mov)}₹</div>
    </div>
    `;


        containerMovements.insertAdjacentHTML("afterbegin",html);
        
    });
       
};




//? username find 
/*
const name="harshit singhal";   // make hs
console.log(name);
const Userrname=name.toLowerCase().split(" ").map(function(ele,i){
    return ele[0];
}).join("");
console.log(Userrname);

*/

function createUsername(accounts)

{
    accounts.forEach(function(account)
    {
        account.username=account.owner.toLowerCase().split(" ")
        .map((name)=>name[0])
        .join("");
    });
    
}
console.log(accounts);

let totalamount;
function calsummary(movements,interest
    ){
    totalamount=movements
    .reduce((acc,mov)=>{
        return acc+=mov;
    });
    const income=movements
        .filter((mov)=>mov>0)
        .reduce((acc,mov)=>{
            return (acc+=mov)
        },0);

    const out=movements
        .filter((mov)=>mov<0)
        .reduce((acc,mov)=>{
            return (acc+=mov)
        },0);
    
    const intrest=movements
    .filter((mov)=>mov>0)
    .map((mov)=>(mov*interest)/100)
    .reduce((acc,mov)=>{
        return (acc+=mov)
    },0);


        labelSumIn.textContent=income+"₹";
        labelSumOut.textContent=out+"₹";
        labelSumInterest.textContent=intrest+"₹";
        labelBalance.textContent=totalamount+"₹";
}


//! button login

let currentAccount;

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();

    currentAccount=accounts.find((acc)=>{
        return acc.username===inputLoginUsername.value ;

    });
    if(currentAccount.pin===Number(inputLoginPin.value))
    {
        UpddateUI(currentAccount);
        containerApp.style.opacity=100;
        inputLoginUsername.value="";
        inputLoginPin.value="";
        labelWelcome.textContent=`Welcome Back, ${currentAccount.owner}`;

    }
    else{
        console.log('error');
        containerApp.style.opacity=0;
        
    }
});



//! Transfer money 


btnTransfer.addEventListener('click',(e)=>{
    e.preventDefault(); //to stop the refresh after click button
    const amount=Number(inputTransferAmount.value);
    const reciverAmount=inputTransferTo.value;

    const reciverAcc=accounts.find((acc)=>{
        return acc.username===reciverAmount;
    })

    console.log(totalamount);


    if(amount>0 &&
        reciverAcc &&
         totalamount>=amount && 
         currentAccount.username!==reciverAcc?.username)
    {
        
        reciverAcc.movements.push(amount);
       currentAccount.movements.push(-amount);
        UpddateUI(currentAccount);
        
    }
    else{
        console.log('wrong Inputs');
    }
    
    console.log(amount,reciverAcc);
});


//! not working

btnClose.addEventListener('click',(e)=>{
    e.defaultPrevented();
    if(inputCloseUsername.value===currentAccount.username &&
        Number(inputClosePin.value)===currentAccount.pin)
        {
            const index=accounts.findIndex(function(acc)
            {
                return acc.username===currentAccount.username;
            });
            console.log(index);

            accounts.splice(index,1);
            containerApp.style.opacity=0;

            console.log(accounts);
        }
        
});

btnLoan.addEventListener('click',function(e){
    e.preventDefault();
    const amount=Number(inputLoanAmount.value);
    if(amount>0 && currentAccount.movements.some((mov)=> mov>=amount*0.10))
    {
        currentAccount.movements.push(amount);
        UpddateUI(currentAccount);
    }
})


btnSort.addEventListener('click',()=>{
    currentAccount.movements.sort((a,b)=>a-b);
    UpddateUI(currentAccount);
})

btnSort.removeEventListener('click',()=>{
    currentAccount.movements
    UpddateUI(currentAccount);
})


function UpddateUI(acc)
{
    displaymovements(acc.movements);
    calsummary(acc.movements,acc.intrest)

}


createUsername(accounts);



const movements=[20000,-1400,4400,-5400,-9940,800];
console.log(movements.sort()); // wrong result

// return<0 ,A,B  (keep order)(b>a)
//return>0,  B,A  (switch order)(a>b)

movements.sort((a,b)=>{
    if(a>b)
    {
        return 1
    }
    else{
        return -1
    }

});
console.log(movements); //same result
movements.sort((a,b)=>a-b);
console.log(movements); // same result



