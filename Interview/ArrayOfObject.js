let arr=[
    {
        name:"Harshit",
        city:"mzn"
    },
    {
        name:"KOKO",
        city:"Barla"
    },
    {
        name:"Sachin",
        city:"Barla"
    },
    {
        name:"Harshit",
        city:"Rampuri"
    },
    {
        name:"Khusboo",
        city:"delhi"
    },
    {
        name:"Shivani",
        city:"bhudhana"
    }, 
    {
        name:"sakshi",
        city:"mzn"
    }
];

let map=new Map();

arr.map((ele)=>{
    let city=ele.city;
    if(map.has(city))
    {
        map.set(city,map.get(city)+1);
    }
    else{
        map.set(city,1);
    }
});

console.log(map);