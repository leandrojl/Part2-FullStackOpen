import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Arto Hellast' }
  ]) 
  const [newName, setNewName] = useState('new note')

  const addPersonToThePhoneBook = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    setNewName("")
    setPersons(persons.concat(personObject))
    console.log("form submitted")
    console.log("new persons array", persons)
  }

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonToThePhoneBook}>
        <div>
          Name: <input onChange={handlePersonNameChange} value={newName}/>
        </div>
        
        
          <button type="submit">Save</button>
        
        
      </form>
      <div>debug: {newName}</div>
      <h2>Added to Phonebook:</h2>
      <ul>
        {
          persons.map(
            person =>
            <li key={person.name}>
              Name: {person.name}
            </li>
            
          )
        }
      </ul>
      <h2>Numbers</h2>
      
    </div>
  )
}

export default App