//! Singletone object
/*
//? means wee can not make only a copy of this object or one  instance

const obj={
    name:"Harshit",
    roll:23,
    colege:"S d",
    Hamarafuntion:()=>{
        console.log(this);  //? arrow function ke pass this nhi hota vo apne parent ka this leta h toh hame same object ka lena h toh constructor function use karlete h...
    }
};
// const obj1=obj  we can not copy b'coz obj is a singleton object
obj.Hamarafuntion();

//! Constructor function  => it provide the templetes to the class and used to create object

function student(name,roll){
    this.name=name;
    this.roll=roll;
    this.printinfo=function(){
        console.log(this.name);
        console.log(this.roll);
        // console.log(this);  //? it return same function
    }
}

let  obj1=new student("reena",45);
console.log(obj1);
obj1.printinfo();

let  obj2=new student("Sakshi",47);
console.log(obj2);
obj2.printinfo();


//! Class  ==> second way to create object
class people{
    constructor(name,age){
        this.name=name;
        this.age=age;   
    }
    
    propleinfo(){  //? it does not show in obj when we print  bcoz this is prototype function   
        console.log(this.name);
        console.log(this.age);
    }
}

const ob=new people("Harshit",21);
console.log(ob);
ob.propleinfo();


class stud{
    constructor(name,roll)
    {
        this.name=name;
        this.roll=roll;
    }
    getName(){
        console.log(this.name);
    }
}
class teacher extends stud{
    constructor(name,roll,phone)
    {
        super(name,roll);  //? pass value to the second constructor
        this.phone=phone;

    }
    fun=()=>{
        console.log(this);
    }
}
const object=new teacher("harshit",23,"9368291341");
console.log(object);
object.getName();
object.fun();

*/


//? Important

//! Call, Bind, Apply Function(abc function);
//? supose we have an object
/*
let obj1={
    name:"Sita",
    addres:"mzn",
    print:function(){
        console.log('imm print function');
        console.log(this.name+ " "+this.addres);
    }

}
let obj2={
    name:"Sarita",
    addres:"delhi",
    
}


obj1.print.call(obj2);  //? calll through the object  we change the this value through the one function
 
obj1.print.apply(obj2);   //? apply take as an argument of this object
*/
//? call and apply almost same the common deffernece is only pass the argeument call takes element as an argument but apply takes an array as an argument


let obj1={
    name:"Sita",
    addres:"mzn",
    print:function(...ele){
        console.log('imm print function');
        console.log(...ele);
        console.log(this.name+ " "+this.addres);
    }

}
let obj2={
    name:"Sarita",
    addres:"delhi",
    
}
obj1.print.call(obj2,11,12,13);//? it take single single arguent 
obj1.print.apply(obj2,[11,12,13,14,15]);//? it takes as an array of an object


//? Bind  --> it return a function for permanet we make a second type function for permanrnt use
let obj2function=obj1.print.bind(obj2);
obj2function(12,13,14,5678,89);


let str="harshit";
let  list=[...str];  //? spread operator
console.log(list);