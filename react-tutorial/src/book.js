const Book = ({ title, img, author }) => {
  // const Clicked=(e)=>{
  //   console.log(e.target.textContent);
  // }
  function headingClick() {
    console.log('heading Clicked');
  }
  const advanceClicked = (bookTitle) => {
    console.log(bookTitle);
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3 onClick={headingClick}>{title}</h3>
      <p onClick={() => {advanceClicked(title) }}>{author}</p>  //?pass parameter to function
    </article>
  );
};

export default Book;