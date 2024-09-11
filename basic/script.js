// alert("hlo this is our first class");
//console.log("hello");
// console.log(10+20);

//! Values and Variable

// let first_name="Harshit";  
// camel variable name caseing personAge 
// console.log(first_name);

//! RULES FOR VARIABLE
// 1. you can not use reserved keyword as a variable name like  function ,let ,for ,if etc...
// 2. variable name must be meaning full
// 3. we not take  digit in starting of variable name  we can use underscore,alphabet,doller symbols etc..

//!------------------------------------------------------------------


//! Values
//? 1. object value
//  let obj={name:"Harshit"};

//? 2.primitive data type value 
// let name="harshit";

//? There are 7 types of primitive  Datatype

//* 1. Number:  floating point number ,integers
//  let num=18;
//  console.log(num);

//  let  num1=16.23;
//  console.log(num1);


// *2.String: Sequence of character used for text
 /* let str="Harshit";
 console.log(str);
 let  name="aman sir"
 console.log(name); */

//* 3. Boolean :logical  type that  can be only true or false .  that is used for taking decision

// let isAdult=false;
// console.log(isAdult);


//* 4. undefined:  value taken by a variable that is not defined (empty value)
//  let var1; this is undefined variable

//* 5. NULL:  also means  "empty value"
  // let str=null // if we check type of null then its object  this is eror 

//* 6. Symbol (ES(Ecma script )2015):  value that is unique and cannot be changed
// "hello"
// "hello"

//* 7.  bigInt(ES2020):  larger interger than the number type can hold.

//! typeof operator : is used to find the what datatype of  the variable
// let name="harshhit";
// console.log(typeof name);


//! note :  JAVA SCRIPT has dynamic typing : we do not have to manually define the datatype  of value stored in a variable  .instead ,data type are determined automattically..
//? in js we canot




//! let,  var,  const

// let fname ="Harshit";
// console.log(fname);

// const lname="Singhal";
// console.log(lname);

// console.log(fname +" " + lname);

// we can change value of let variable like a men age is changing every year

// but in const we can not change the value of variable  like a men DOB can not be change..


// var is not used now its use in old times bcoz var  have more negative point  and bugs
// var is same as let 
// its has a features that applied hosting 
//var r=34;
// var variable  name can be defined multiple times 
// var age=18;
// var age =20;
// console.log(age);



//? Operators

//1. Arthematic operator  +,-,,/,**(power).......
//2. Assignment operator  =, += (x=x+10) ,-+,*=,++,--
//3. comparison operator > ,<, ==,<=,>=,!= --> its gives onnly boolean value
//4. logical operator --> and ,or, not

//?  +operator
// console.log(50+4);
// let fname="rahul";
// console.log("hello"+fname);
// console.log("33"+6);
// const num=18;
// console.log(num-5>num+3);

//?     operator precedence

// ()=18
// /,*,%,=12
// +,-=11
// >,>=,<,<= =9
// = =2

// console.log(18+20*2);
// console.log(2/1*3 );

// let namanmass=78;
// let namanheight=1.69;
// let BMInaman=namanmass/(namanheight**2);
// console.log("NAMANBMI="+BMInaman);

// let vishalmass=95;
// let vishalheight=1.88;
// let BMIvishal=vishalmass/(vishalheight*vishalheight);
// console.log("VISAHALBMI="+BMIvishal);

// let isnamanBMIHigher =BMInaman>BMIvishal;
// console.log("is naman bmi heigher"+isnamanBMIHigher);
// let isvishalBMIHigher =BMIvishal>BMInaman;
// console.log("is vishal bmi heigher"+isvishalBMIHigher);



//! String and template literals

// let fname="mohit";
// let job="manager";
// let birthyr=1999;
// let currentyr=2023;

// let mohit="i'am "+fname+", a "+(2023-1999) +" year old "+job+" !";
// console.log(mohit);
// let newmohit=`i'am ${fname}, a ${2023-1999} year old ${job}!`;
// console.log(newmohit);
// console.log(`hello world !`);

// console.log("String with\n multiple\n lines.");
// console.log(`string with
//      multiple 
//      lines.`);

//?taking decision(if_else statement)
//     let mohitAge=15;
//     if(mohitAge>=18)
//     {
//       console.log("mohit is eligible to drive");
//     }
//     else
//     {
//       const yearleft=18-mohitAge;
//       console.log("mohit is not eigible to drive. wait another "+yearleft+"years");
//     }


// let birthyear=1999;
// let century;
// if(birthyear<=2000)
// {
//   century =20;
// }
// else{
//   century=21;
// }
// console.log(century);



// let namanmass=78;
// let namanheight=1.69;
// let BMInaman=namanmass/(namanheight**2);
// console.log("NAMANBMI="+BMInaman);

// let vishalmass=95;
// let vishalheight=1.88;
// let BMIvishal=vishalmass/(vishalheight*vishalheight);
// console.log("VISAHALBMI="+BMIvishal);
// let isnamanBMIHigher =BMInaman>BMIvishal;
// console.log("is naman bmi heigher"+isnamanBMIHigher);
// let isvishalBMIHigher =BMIvishal>BMInaman;
// console.log("is vishal bmi heigher"+isvishalBMIHigher);

// if(BMInaman>BMIvishal)
// {
//  console.log(`naman's BMI ${BMInaman} $ is higher than vishal BMI ${BMIvishal}`);
// }
// else{
// console.log(`vishal's BMI is higher than naman BMI`)
// }


//! type conversion and coercion

// string ->number=Number()
// const year="2003";
// console.log(Number(year),year);
// console.log(Number(year)+20);
// console.log(Number("hello"));

//? number ->string=String()
//console.log(String(23),23);

//!type coercion
// console.log("i am"+20+"year old.");

// console.log("20"-"10"-"15"-3);  
// console.log("20"+"10"+3); 
// console.log("20"/"10");
// console.log("20"*"10");

// let n="1"+1;  // '11'
// n=n-1;  //10
// console.log(n);



//? truthy and falsy value

// 5 falsy value: 0,'',undefined,null,NaN=Not a number
// console.log(Boolean(0));
// console.log(Boolean(10));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean([]));

// let bal=100;
// if(bal)
// {
//   console.log("you have a balance in account");
// }
// else{
//   console.log("you should get a job");
// }


//? multiple if else block-->

// if(condition)
// {

// }
// else if(condition)
// {

// }
// else{

// }


// let day=1;
// if(day==1)
// {
//   console.log("monday");
// }
// else if(day==2)
// {
//   console.log("tuesday");
// }
// else if(day==3)
// {
//   console.log("wednesday");
// }
// else if(day==4)
// {
//   console.log("thursday");
// }
// else if(day==5)
// {
//   console.log("friday");
// }
// else if(day==6)
// {
//   console.log("saturday");
// }
// else if(day==7)
// {
//   console.log("sunday");
// }
// else{
//   console.log("invade input");
// }


// let num=100;
// let num2=25;
// let operator="-";

// if(operator=="+")
// {
//   console.log(num+num2);
// }
// else if(operator=="-")
// {
//   console.log(num-num2);
// }
// else if(operator=="*")
// {
//   console.log(num*num2);
// }
// else if(operator=="/")
// {
//   console.log(num/num2);
// }

// else{
//   console.log("invalid");
// }


//? input from user

/*
const operator=prompt("Enter any operator: ");
const num1=Number(prompt("Enter first number:"));
const num2=Number(prompt("Enter Second number:"));

if(operator=='+')
{
  console.log(num1+num2);
}
else if(operator=='-')
{
  console.log(num1-num2);
}
else if(operator=='*')
{
  console.log(num1*num2);
}

else if(operator=='/')
{
  console.log(num1/num2);
}
else{
  console.log("invalid input");
}
*/

//? compresion opertaor 
// ==  --> its check only value(loosing checking)
//===   --> value as well as datatype (Strict checking)
// != --> its also only check value (loose checking)
//let age='19';

//? only value 
/*
if(age==18)
{
  console.log("you are eligible for vote ");
}

if(age!=18)
{
  console.log("you are not eligible");
}

//? value as well as datatype
if(age===18)
{
  console.log("you are eligible for vote(Strict");
}

if( age!==18)
{
  console.log("You are not eligible (strict checking)");
}
*/

//! Boolean logic

//A=t/f

//B=t/f
//! make or(||) ,and(&&) ,and not(!) gate table

// const harDriverLinces=true;//A
// const hasGoodVision=false;//B
// console.log(harDriverLinces && hasGoodVision);

// console.log(harDriverLinces || hasGoodVision);

// console.log(!harDriverLinces);

// if(harDriverLinces && hasGoodVision)
// {
//   console.log("vishal can drive a car.");
// }
// else
// {
//   console.log("vishal can not drive a car.")
// }

// const isTired =true //c
// console.log(harDriverLinces && hasGoodVision && isTired);  //false
// console.log(harDriverLinces || hasGoodVision || isTired);  // true


//!---------------------------------------------------------------------------
// const scoreTeamA=(97+112+101)/3;
// const scoreTeamB=(88+91+111)/3;
// console.log(scoreTeamA,scoreTeamB);
// if(scoreTeamA>scoreTeamB && scoreTeamA>=100)
// {
//   console.log("team A wins");
// }
// else if(scoreTeamA<scoreTeamB && scoreTeamB>=100)
// {
//   console.log("team B wins");
// }
// else if(scoreTeamA == scoreTeamB&& scoreTeamB>=100)
// {
//   console.log("team A and B tie");
// }
// else 
// {
//   console.log("no teams wins the match");
// }

// !----------------------------------------------------------------------------------------------
// ? the swich statement
//  const day ="monday";
//  switch(day)
//  {
//   case "monday":console.log("go to choching.");
//                 console.log("meet new friends");
//                 break;
//   case "tuesday":console.log("prepare notes.");
//                 break;
//   case "wednesday":console.log("write code examples.");
//                 break;
//   case "thursday":console.log("write code examples.");
//                 break;
//   case "friday":console.log("give extra.");
//                 break;
//   case "saturday":console.log("enjoy weekends.");
//                 break;
//   case "sunday":console.log("enjoy weekends.");
//                 break;
//   default:
//     console.log("nota valid input");
//  }
// !--------------------------------------------------------------------------------------------

 /* let a="tuesday";
  if(a=="monday")
  {
    console.log("go to choching.");
      console.log("meet new friends");
  }
  else if(a=="tuesday")
  {
    console.log("prepare notes.");
  }
else if(a=="wednesday")
{
  console.log("write code examples.");
}
else if(a=="thursday")
{
  console.log("write code examples.");
}
else if(a=="friday")
{
  console.log("write code examples.");
}
else if(a=="saturday")
{
  console.log("enjoy weekends.");
}
else if(a=="sunday")
{
  console.log("enjoy weekends.")
}
else
{
  console.log("invalid input");
}
*/
//!-----------------------------------------------------------------------------------------------
//?  Statement(sentance) and expression (words which can make sentence)

//! Expression

/*3+4;
11998;
true&&false|| true;

//! Statement
if(23>17)
{
  console.log("23 is bigger than 18");
  const str="23 is bigger than 18";
}

const name="Harshit";
console.log(`i'm ${23-2}  years old ${name}`);

//!  Ternary Operator

//?  Synatx:  `condition? true statement: false statement`;
let age=17;
console.log(`Hello ${age}>=18 ?"can drive  car":"cannot drive car" }`);

const licence=age>=18 ? "approved": "not approved";
console.log(licence);
*/




