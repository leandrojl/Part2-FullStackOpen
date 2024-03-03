const PersonsOnThePhoneBook = (props) =>{

    return(
        <ul>
        {
          props.persons.map(
            person =>
            <li key={person.name}>
              <p>Name: {person.name}</p>
              <p>Number: {person.number}</p>
              
              
            </li>
            
            
          )
        }
      </ul>
    )
  
  }

  export default PersonsOnThePhoneBook