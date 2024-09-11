/*

const book={
    title:'Title Name',
    author:'Authhor name'
};

console.log(book);

const BookJSON=JSON.stringify(book); //! Convert object to jSON 
console.log(BookJSON); //? it show key  also in string 
// console.log(BookJSON.title); we can not access directly we have to convert json to object

const bookObj=JSON.parse(BookJSON); //! Convert jSOn to Object
console.log(bookObj);

*/

// we can access file through the node

const fs=new require("fs");   //? it gives file system that enable to read write data into file

//fs.writeFileSync('book.json',"hello this is JSON file"); //? Write into file

const dataBuffer=fs.readFileSync("book.json"); //! to read file
//console.log(dataBuffer);  // this data is not readable we have to convert into json data after that json to object.

const dataJson=dataBuffer.toString();  //? convert into json
// console.log(dataJson);

const dataObj=JSON.parse(dataJson); //?  json into object
console.log(dataObj.title);








