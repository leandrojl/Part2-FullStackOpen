const Form = (props) =>{

    return(
      <div>
        <form onSubmit={props.addNote}> 
            <input />
            <button type="submit">save</button>
        </form>
      </div>
    )
  
  }

  export default Form