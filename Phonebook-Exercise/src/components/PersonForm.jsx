const PersonForm = (props) =>{

    return(
      <div>
        <form onSubmit={props.addPersonToThePhoneBook}>
            <div>Name: <input onChange={props.handlePersonNameChange} value={props.newName}/></div>
            <div>Number: <input onChange={props.handlePersonNumberChange} value={props.newNumber} /></div>
            <button type="submit">Save</button>   
        </form>
      </div>
    )
  
  }

  export default PersonForm