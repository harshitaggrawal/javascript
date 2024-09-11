//! Strict mode :
//? to apply then-->   "use strict";

/*
"use strict";

let hasDriversLicense=false;
const passTest=true;
if(passTest) hasDriverLicense=true;  //! its does not show any error we change  variable name also 
if(hasDriversLicense) console.log("he can  drive car");

let interface=23;  //* not show any error bcoz its a reserved name if we dont use strict 
let private =78;
*/



//!-------------------------Function----------------------------------------------
//*   Calling/ Runninng / Invoking

/*
function print()
{
    console.log("hello");
}

print();
print();

function sum(a,b)
{
    return a+b;
}

console.log(sum(10,20));
*/

//! Question
/*
let tip;
let bill = Number(prompt("Enter amount of bill"));
let total;
if (bill >= 50 && bill <= 300) {
    tip = (15 * bill) / 100;
    total = bill + tip;
    console.log("Bill: " + bill);
    console.log("Tip: " + tip);
    console.log("Total amount with 15% Tip: " + total);

}
else {
    tip = (20 * bill) / 100;
    total = tip + bill;
    console.log("Bill: " + bill);
    console.log("Tip: " + tip);
    console.log("Total amount with 20% Tip: " + total);

}
*/


//!----------------------------------------------------------------------------------

//*  Function Declartion and Function Expression  & Arrow  Function

//! Function Declartion --  This function we can call before the function this is also known as hoisting
/*
function calAge(birthYear)
{
    return 2023-birthYear;
} 

console.log(calAge(2002));

//! Function Expression

const calage1=function(birthYear)
{
    return 2023-birthYear;
};

console.log(calage1(2003));

//! Arrow Function

const calAge3=(birthYear) =>
{
    return 2023-birthYear;
}
console.log(calAge3(852));

const calage4=(birthYear)=> 2023-birthYear;
//it return with any return keyword if we  remove brckets  and this is also called single line function
console.log(calage4(1800));

//! Function callling other function

function fruitpices(fruit)
{
    return 4* fruit;
}

function fruitJuice(apple,banana)
{
    const applePieces=fruitpices(apple);
    const bananaPieces=fruitpices(banana);
    return `Juice with ${apple} apples with the pieces of ${applePieces} and ${banana} banana with the pieces of ${bananaPieces}`; 
};

console.log(fruitJuice(6,5));

*/
//! Question
/*
function calAvg(s1,s2,s3)
{
    return (s1+s2+s3)/3;
}
const Team1Avg=calAvg(44,23,71);
const team2Avg=calAvg(65,54,49);

function checkWinner(Team1Avg,team2Avg)
{
    if(Team1Avg>=(2*team2Avg))
    {
        return "Team 1 Win ";
    }
    else if(team2Avg>=(2*Team1Avg))
    {
        return "Team 2 Win"
    }
    else{
        return "Match draw";
    }
}

console.log(checkWinner(Team1Avg,team2Avg));

const avg1=calAvg(85,5,41);
const avg2=calAvg(23,34,27);

console.log(checkWinner(avg1,avg2));
*/



//! ARRAYS (collection of data)
let friend1 = "Rahul";
let friend2 = "Vishal";
let friend3 = "Mohit";

const friends = ["Rahul", "Vishal", "Mohit"];
console.log(friends);
/*

console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//! friends = ["hello"];

const fName = "Rohit";
const rohit = [fName, "Sharma", 2023 - 1999, "Web developer", friends];
console.log(rohit);

const calcAge = (birthYear) => 2023 - birthYear;

const years = new Array(1991, 1995, 1999, 2002);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];

console.log(ages);

const friends = ["Rahul", "Vishal", "Mohit"];
console.log(friends);
*/
//! Array methods
/*
//? ADD (push(last), unshift(start))
const methodReturn = friends.push("Rohit");
console.log(friends);
// console.log(methodReturn);

friends.unshift("Naman");
console.log(friends);

//? REMOVE (pop, shift)
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

//? IndexOf 
console.log(friends.indexOf("Mohit"));
console.log(friends.indexOf("Mohitt"));  //? if element not found return -1

console.log(friends.includes("Mohit"));
console.log(friends.includes("Mohitt"));

if (friends.includes("Rahul")) console.log("You have a friend named Rahul.");
*/
//* Excercise
/*

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [316.25, 275, 40, 430];
const tips = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]),
  calcTip(bills[3]),
];

console.log(tips);

*/


//! object
/*
const myarr=[
    "Harshit",
    "Singhal",
    20,
    "WebDeveloper",
    ["f1","f2","f3"]
];
console.log(myarr);


const myobj={
    key:"value",
    fname:"harshit",
    lname:"singhal",
    age:21,
    designation:"developer",
    Friends: ["f1","f2","f3"]
};
console.log(myobj);

//? Dot notation ,bracket  notation
//* this is used to  find the  value by the help of key
console.log(myobj.fname);
console.log(myobj["fname"]);

const namevalue="name";
console.log(myobj["f"+namevalue]);
console.log(myobj["l"+namevalue]);


// const interestedin=prompt("What do you want to know about me?  \n 1.fname 2.lname 3.age 4. designation  5.Friends");
// console.log(myobj[interestedin]);

myobj.location="India";
myobj.age=20;
console.log(myobj);
console.log(`${myobj.fname} has ${myarr[4][0]}, ${myarr[4][1]},${myarr[4][2]} friends ,and his job is ${myobj.job}`);


*/
//! object methods
/*
const myobj={
    key:"value",
    fname:"harshit",
    lname:"singhal",
    birthyear:2001,
    designation:"developer",
    Friends: ["f1","f2","f3"],
    calAge: function(birthyear)
    {
        return 2023-birthyear;
    },

    calcage: function()
    {
        console.log(this);  //* this keyword gives the all the data of objects
        return 2023-this.birthyear; 
    }
,
    calculateage: function()
    {
this.age=2023-this.birthyear;
return this.age;
    }

    
};
console.log(myobj.calAge(5823));
console.log(myobj["calAge"](7896));
console.log(myobj.calcage());
console.log(myobj.calculateage(1972));
console.log(myobj.age);

*/

//! Iterration means loop 
//? For loop
//* for(initilization,condition,updation){}
/*
for(let i=1;i<=10;i++)
{
    console.log("Number "+i);
}

//const arr=[5,10,15,20,25];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

const arr=[
    "Harshit",
    "Singhal",
    20,
    "WebDeveloper",
    ["f1","f2","f3"],
    true
];

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i] +" " +typeof arr[i])
}

*/
const types=[];
types[0]="Aman";
types[1]="Trainer";
types[2]=25;
types[3]="He is good teacher";
types[4]=["f1","f2","f3"];
types[5]=true;
console.log(types);

for(let i=0;i<types.length;i++)

{
    console.log(types[i] +" " +typeof types[i])
}

//! Break       continue Statement