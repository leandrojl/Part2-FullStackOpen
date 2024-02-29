import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]
  ) 
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('new number')
  const [newSearch, setNewSearch] = useState('search here...')

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSerchChange = (event) => {
    setNewSearch(event.target.value)
  }


  const addPersonToThePhoneBook = (event) => {
    event.preventDefault()
   console.log(event.target.elements)
   console.log(event.target.elements[0].value)
    
    const personObject = {
      name: newName,
      number: newNumber
    }

    const checkPersonName = persons.some(person => person.name === newName) 

    if(checkPersonName){
      alert(`${newName} it is already in the list! Please write another one`)
      console.log("Person not added to the persons array")
    }else{
      setNewName("")
    setPersons(persons.concat(personObject))
    console.log("form submitted")
    

    }
    

    //receive new name
    //check if it is in the persons array
    //add if there is none
    //if not, ask to write the name again because it is repeated
    
  }

  

  return (
    <div>
      <h1>Phonebook</h1>

      <p>Search your contact: <input onChange={handleSerchChange} value={newSearch} /> </p>
      <div>debug newSearch: {newSearch}</div>
      
      <h2>Submit your contact:</h2>
      <form onSubmit={addPersonToThePhoneBook}>
        <div>Name: <input onChange={handlePersonNameChange} value={newName}/></div>
        <div>Number: <input onChange={handlePersonNumberChange} value={newNumber} /></div>
       
        
          <button type="submit">Save</button>
        
        
      </form>
      <div>debug newName: {newName}</div>
      <div>debug newNumber: {newNumber}</div>
      <h2>Filtered contacts</h2>
      <ul>
        {
          persons.map(
            person =>
            <li key={person.name}>
              <p>Name: {person.name}</p>
              <p>Number: {person.number}</p>
              
              
            </li>
            
            
          )
        }
      </ul>
      <h2>Added to Phonebook:</h2>
      <ul>
        {
          persons.map(
            person =>
            <li key={person.name}>
              <p>Name: {person.name}</p>
              <p>Number: {person.number}</p>
              
              
            </li>
            
            
          )
        }
      </ul>
     
      
    </div>
  )
}

export default App