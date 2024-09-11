import React from "react";
import ReactDOM from "react-dom/client";
//* external css
import "./index.css";

//* array of objects of books  and also called JSON data
import {books} from './data'   //? data

import Book from './book'   //? Components 

import ReactEvents from './event'

//* books list section
const BookList = () => {
  
  return (
<>
<ReactEvents/>
    <section className="booklist">
      {books.map(function (book,index) {
        {
          return <Book key={index}   //? its only for 
          title={book.title} 
          author={book.author}
           img={book.img} />;
        }

      })}
    </section>
    </>
  );
  
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);