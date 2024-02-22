const Form = (props) =>{

    return(
      <div>
        <form onSubmit={props.addNote}> 
            <input onChange={props.handleNoteChange} value={props.newNote}/>
            <button type="submit">save</button>
        </form>
      </div>
    )
  
  }

  export default Form