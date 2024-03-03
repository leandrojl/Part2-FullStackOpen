const FilteredContacts = (props) =>{

    return(
      <ul>
          {props.filteredArray.map(
            person => (
              <li key={person.name}>
                <p>Name: {person.name}</p>
                <p>Number: {person.number}</p>
              </li>
            )
          )}
        </ul>
    )
  
  }

  export default FilteredContacts