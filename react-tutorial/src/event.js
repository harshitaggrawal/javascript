const ReactEvents=()=>{
    const handledClick=()=>
    {
      console.log('Form Submitted');
    }
    const handledSubmit=(e)=>{
      e.preventDefault();
      alert('Form Submmitted');
    }
    function change(e){
      console.log(e.target.value);  //user input value
      const val=e.target.value;
      
      console.log('input changes');
    }
      return (<div className="container">
      <form onSubmit={handledSubmit}>
        <h2>My Form</h2>
        <input type="text" onChange={change}/>
        <button type="Submit" onClick={handledClick} >Submit</button>
      </form>
    </div>)
  }

  export  default ReactEvents;