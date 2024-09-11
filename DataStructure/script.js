
"use strict";




//!-----------------Destructuring Array------------------------------------

//const arr=[1,2,3];
//? wee want to store all element in a single single variable
/*

const[a,b,c]=arr;
console.log(a,b,c);
/*


*/
//! Nested Array Deconstruction
/*
const nestedARR=[4,5,[5,6,7]];
const[i,j,k]=nestedARR;
const[m,n,l]=k // ? becoz k is also an array
console.log(i,j,k);
console.log(m,n,l);
*/

//! Default value Deconstruction
/*
const[p=1,q=1,r=1,s=1,t=1]=[7,8,9];
console.log(p,q,r,s,t); 
//* it take  p=7,q=8,r=9 otherwise all element take  default value 

*/


//!  DeConstruction object 

const resto={
    name:"Aggrawal Restorent",
    location:"Muzaffarnager",
    categories:["North Indian","South Indian","Fast Food","Italian"],
    stateMenu:["Dosa","Itely","FRY dal ","BUrger","Pizza"],
    mainMenu:["Special FAmily thali ","Rashmalai"],
    order: function(startindex,mainIndex){
        return[this.stateMenu[startindex],this.mainMenu[mainIndex]]
    },
 
    openingHours:{
        mon:{
            open:9,
            close: 9
        },
        tues:{
            open:11,
            close:12

        }
    },

    orderDelivery: function(obj)
    {
        const{time,address,startindex,mainIndex}=obj;

        console.log(obj);
        console.log(`You delivered
                    1. ${this.stateMenu[startindex]}
                    2. ${this.mainMenu[mainIndex]}
                    will  be deliverd at ${time} on ${address}`);
    }


};

resto.orderDelivery({
    time:"8.30",
    address:"new delhi",
    startindex: 2,
    mainIndex:1

});


console.log(resto);

/*
const[main ,secondary]=resto.categories; // it store  1st and second element in an array
console.log(main,secondary);
*/

/*
let[main, , ,secondary]=resto.categories; // it store apply comma with the  help of comma array
console.log(main,secondary);

let t;
t=main;
main=secondary;
secondary=t;

[main,secondary]=[secondary,main];
console.log(main,secondary);

const[starter,mainmenu]=resto.order(1,0);  //  function in an object
console.log(starter,mainmenu);


const{name,openingHours,categories}=resto;
console.log(name);
console.log(openingHours);
console.log(categories);

//? we change the name of keyss 
const{name:RestorentName,
    openingHours:Hours,
    categories:tag
}=resto

console.log(RestorentName);


//? Default value


const{menu=[],categories:foodMaterial=[]}=resto;
console.log(menu);
console.log(foodMaterial);

*/

//? Mutating variable
/*
let a=100;
let  b=200;
console.log(a,b);

const obj={a:23,b:46,c:69};
({a,b}=obj);
console.log(a,b);

const {a,b,c}=obj;

//? Nested object 
console.log(resto.openingHours);
const{mon,tues}=resto.openingHours;
console.log(mon,tues);

const objnest={
    identity:{
        name: "HArshit",
        age:21,
    },
};

const{
    identity:{name:username,age}
}=objnest;
console.log(username,age);

*/
//! Spread oprator
/*
const arr=[7,8,9,10];
const rougharr=[11,12,arr[0],arr[1]];

const newarr=[1,2,3,...arr];  // concat the two arr 
console.log(newarr);

const arr1=[...arr,...rougharr];
console.log(arr1);

//console.log(arr1.concat(arr));

const newMenu=[...resto.mainMenu,"Biryani","chowmin","burger","pasta"];
console.log(newMenu);

const menu=[...resto.stateMenu,...resto.mainMenu];  // adding the  object keys value in a single pair
console.log(menu);


//* Where we can use spread operrator
//! Iterables: array,string,map,set,NOt object

let str="Mohit";
let lname="Thakur";
console.log(...str);
console.log(...str,...lname);
const StrArray=["Mrs "," ",...str];
console.log(StrArray);

*/

//! Rest pattern 
/*
//? spread,  because right side of => this concat all the elemnts in an single array
const arr=[1,2,3,...[5,6,7]];
console.log(arr);

//? Rest, because  of left side of=> it store rest elemts in an array
const [a,b,...others]=[1,2,3,4,5,6,7,8,9];
console.log(a);
console.log(b);
console.log(others);

const [items1,items2,...otheroptions]=
[
    ...resto.stateMenu,...resto.mainMenu
];
console.log(items1);
console.log(items2);
console.log(otheroptions);


const sum=function(...element)
{
    let add=0;
    for(let i=0;i<element.length;i++)
    {
        add=add+element[i];
    }
    console.log('Sum= '+add);
}

sum(2,3,4);
sum(5,6,7,89,98,0);
sum(1,2,3,4,5,6,7,8,9);
let x=[2,3,4,6,7,89];
sum(...x);


let y="897367468";
let z=[...y];
console.log(z);

*/


//! Short Circuiting

//*  False value: 0,"",undefined,null,false
//? OR: first check truthy value,if no truthy value then print last falsy value 
/*
console.log('harshit'|| 0);
console.log(3||undefined);
console.log(true||"");
console.log(false|| true);
console.log(undefined|| null);
console.log(""||null||1||false||true);


resto.numGuest=45;
const guest1=resto.numGuest? resto.numGuest:10;
console.log(guest1);

const guest2=resto.numGuest|| 11;
console.log(guest2);
*/
//? Nullish Coalescring
//! nullish: null,undefined(not 0,"")

/*
resto.numGuest=0; // number of guest is  zero it takes false value
const guest1=resto.numGuest? resto.numGuest:10;
console.log(guest1);

const guest2=resto.numGuest?? 11;
console.log(guest2);
*/

//? AND: first falsy value ,if no falsy last found truthy value print then print truth value

/*
console.log('Harshit' && "Sakshi");
console.log('harshit'&& 0);
console.log(3&&undefined);
console.log(true&& "");
console.log(false&& true);
console.log(undefined&&null);
console.log(""&&null&&1&&false&&true);

if(resto.order)
{
    console.log(resto.order(2,0));
}
console.log(resto.order && resto.order(1,0));
*/
/*
//! by for loop
for(let i=0;i<resto.mainMenu.length;i++)
{
    console.log(i+1+"  "+resto.mainMenu[i]);
}

//! by of  loops
//? entries() is used  for index number
for(const items of resto.categories.entries())
{
    console.log(resto.categories[items[0]]);
}

for(const [i,e1] of resto.mainMenu.entries())  //? i for index ,  e for elemnts
{
    console.log(i+1+'  '+e1);
}

console.log(['a','b','c','d','e','f']);
console.log(...['a','b','c','d','e','f'].entries());
*/


//! some Advance features  of object
/*
const weekDays=['mon','Tue','Wed','thu','Fri','Sat','Sun'];


const openingHours={
    [weekDays[0]]:{
        open:9,
        close: 9
    },
    [weekDays[1]]:{
        open:10,
        close: 11
    },

    [`day-${4-2}`]:{
        open:11,
        close:12

    }
};


const resto={
    name:"Aggrawal Restorent",
    location:"Muzaffarnager",
    categories:["North Indian","South Indian","Fast Food","Italian"],
    stateMenu:["Dosa","Itely","FRY dal ","BUrger","Pizza"],
    mainMenu:["Special FAmily thali ","Rashmalai"],


    function(startindex,mainIndex){
        return[this.stateMenu[startindex],this.mainMenu[mainIndex]]
    },
 
   openingHours,    //? we can access outside  object only by the name

   function(obj)   //? we dont need to write the key name of the function
    {
        const{time,address,startindex,mainIndex}=obj;

        console.log(obj);
        console.log(`You delivered
                    1. ${this.stateMenu[startindex]}
                    2. ${this.mainMenu[mainIndex]}
                    will  be deliverd at ${time} on ${address}`);
    }


};

console.log(resto);
*/

//! Optional Chaining 
/*
const Days=['mon','Tue','Wed','thu','Fri','Sat','Sun'];
for(const day of Days)
{
    console.log(day);
    const open =resto.openingHours[day]?.open;  //? if its true it will give the value otherwise undefined
    console.log(`On ${day}, we open at ${open}`);
}
*/

//! Looping Object 
/*
const obj={name:'Harshit',
            age:21,
            Gender:'Male',
            isAdult:true,
            job:"Software Developer",
            Dob:2002
};

for(const Key of Object.keys(obj))
{
   console.log(Key);
}

for(const value of Object.values(obj))
{
    console.log(value);
}

//console.log(Object.entries(obj));

for(const [key,value] of Object.entries(obj))
{
    console.log(`Key: ${key} and Value : ${value}`);
}



for(const [key,{open,close}] of Object.entries(resto.openingHours))
{
    console.log(`On ${key} we open at ${open}  and  close at ${close}`);
}


*/




//! SET
/*
const orderSet=new Set([
    "Pasta",
    "Pizza",
    "Chowmien",
    "Pizza"
]);
console.log(orderSet);  //? it will not take repeated value

console.log(new Set("harshit"));///? it will not take repeated value

console.log(orderSet.has("Pasta"));
orderSet.add("Itemname");
orderSet.delete("Pizza");
console.log(orderSet.size);
orderSet.clear();

console.log(orderSet);

//? use case: is used to find Unique elemnet of an array,String

const staff=["Chef","Manager","Waiter","Waiter"];

const UniqueStaff=new Set(staff);
console.log(UniqueStaff);


for(const items of UniqueStaff)
{
    console.log(items);
}
 
*/





//! MAPS  :  

//? map is same as object but in object we can not give key as a String but in map we can give key as a string ,int ,object,array,and Boolean also  also..
/*
const rest=new Map();
rest.set("name","Subway");
rest.set(1,"India");
rest.set(2,"Chinna");
rest
.set("cattegories",["Itely","Dosa","Burger"])
.set("open",9)
.set("close",23)
.set(true,"we are open")
.set(false,"we are Close");



// we can add multiple set method in one statement

console.log(rest);

console.log(rest.get("name"));
console.log(rest.get("cattegories"));
console.log(rest.get("open"));
console.log(rest.get(1));

const  time=21;
console.log(rest.get(time>=rest.get('open') && time<rest.get('close')));

console.log(rest.size);

const arr=[1,2];
rest.set(arr,"example");
console.log(rest);
console.log(rest.get(arr));




*/




//! String  --> Set of character
/*
const str="Harshit Singhal";
console.log(str);

console.log(str[0]);
console.log(str[1]);

console.log('abcd'[3]); // return d

console.log(str.length);
console.log(str.indexOf('a'));
console.log(str.indexOf('h'));
console.log(str.indexOf('Sin'));  
console.log(str.lastIndexOf('a'));  //? if any char  not found  thenn it will  give -1

console.log(str.slice(3)); //it start string from  index 3
console.log(str.slice(3,8)); // it start string from index 3 and end  with 7th  index
console.log(str.slice(-3)); // ulti indexing chlege -1 to lenghth

console.log(str.charAt(2)); // return charcter from index

//? Question
11B===middle Seat
12C=== middle Seat
7E=== Window Seat

const checkseat=(s)=>{
    let l=s.length;
    if(s[l-1]==='B' || s[l-1]==='C')
    {
        console.log('Middle seat alloted');
    }
    else{
        console.log('Window seat alloted');
    }
    
}

checkseat('11B');
checkseat('11C');
checkseat('11D');
checkseat('11E');

*/

//? 2nd method
/*
const str1=new String("hello");
console.log(str1);
console.log(typeof str1); // object

console.log( typeof 'hello'); // String

console.log(typeof str1.slice(1));   // it convert object into a String
*/
/*
const str3="Java Script is a Scripting language";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

const name='raHUl';
const namelower=name.toLowerCase();
const correctedName=namelower[0].toUpperCase() + namelower.slice(1);
console.log(correctedName);


const email="    harsHitSinghal@Gmail.com \n";
const lowerEmail=email.toLowerCase();
const trimEmail=lowerEmail.trim(); // Remove White space from the string 
console.log(trimEmail);
console.log(email.toLowerCase().trim());  

const price='12,3456$';
const IndiaPrice=price.replace('$',"rupe");
console.log(IndiaPrice);

console.log(str3.replace("Java Script","java"));

*/

/*
const str="Java is a object oriented programming lnguage";
console.log(str.split(" ")); //? this break string into an array

const newarr=str.split(" ");

const [fname,lname]="Rahul singh".split(" ");

const  newName=["Mr",fname,lname];
console.log(newName.join(" "));  // this join all the elemmnt of an array into String in an String 



const CaptilizeName=(name)=>
{
    const nameArr=name.split(" ");
    const ansArr=[];
    for(const name of nameArr)
    {
        ansArr.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
    }
   
    return ansArr.join(" ")
}

const name1=CaptilizeName("haRshit sinGhal");
console.log(name1);

const name2=CaptilizeName("saKShi pUNDir");
console.log(name2);

*/

//! Question
/*
Codding Challenge

We're building a football betting app!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored


-----------

const game = {
    team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
 [
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
],
 [
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
 ],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 };
 

 //? Solution
 //*1

 const [players1,players2]=game.players;
 console.log(players1);
 console.log(players2);

 //* 2

 const [gk1,...fieldPlayers1]=players1;
 const [gk2,...fieldPlayers2]=players2;
 console.log(gk1);
 console.log(gk2);
 console.log(fieldPlayers1);
 console.log(fieldPlayers2);

 //* 3

 const allPlayers=[...players1,...players2];
 console.log(allPlayers);
 
 //* 4

 const players1Final=[...players1,'Thiago', 'Coutinho' ,'Perisic'];
 console.log(players1Final);

 //* 5
 
 const {team1,x:draw,team2}=game.odds;
 console.log(team1,draw,team2);

//* 6


function printGoals(...arbitraryPlayers)
{
    console.log(arbitraryPlayers);
    console.log(arbitraryPlayers.length);
}


printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich' );

printGoals(...game.scored);


//* 7

team1<team2 && console.log("team1 is more likely to win");
team1>team2 && console.log("team2 is more likely to win");





*/


