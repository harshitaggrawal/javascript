

import './App.css';

function App() {
  const submitbutton=()=>{
    console.log("button clicked");
  }
  const handlename=(e)=>{
    // console.log(e.target.value);
    const n=e.target.value;
    console.log(n);
  }
  const handleemail=(e)=>{
    // console.log(e.target.value);
    const n=e.target.value;
    console.log(n);

  }
  const handlenumber=(e)=>{
    // console.log(e.target.value);
    const n=e.target.value;
    console.log(n);

  }
  return (
    <div className='form'>

      <form >
          <input type='text' placeholder='enter your name' onChange={handlename}></input> <br></br>
        <p className='inputerror'></p>
          <input type='email' placeholder='enter your email' onChange={handleemail}></input> <br></br>
           <p className='emailerror'></p>
          <input type='number' placeholder='enter your number' onChange={handlenumber}></input> <br></br>
 <p className='numbererror'></p>
          <button  type='submit' onSubmit={submitbutton}>submit</button>

      </form>
    </div>
    
  );
}

export default App;
