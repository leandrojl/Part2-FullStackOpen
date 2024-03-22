const PersonsOnThePhoneBook = (props) =>{

  

    return(
        <ul>
        {
          props.persons.map(
            person =>
            <li key={person.id}>
              <p>Name: {person.name}</p>
              <p>Number: {person.number}</p>
              <button onClick={()=> props.handleDeletePerson(person.id)} >Delete</button>
              
            </li>
            
            
            
          )
        }
      </ul>
    )
  
  }

  export default PersonsOnThePhoneBook