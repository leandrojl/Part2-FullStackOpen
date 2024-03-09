import { useState, useEffect } from 'react'
import SearchFilter from "./components/SearchFilter"
import PersonForm from "./components/PersonForm"
import FilteredContacts from "./components/FilteredContacts"
import Header from "./components/Header"
import PersonsOnThePhoneBook from "./components/PersonsOnThePhoneBook"
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('new number')
  const [newSearch, setNewSearch] = useState('search here...')
  const [filteredArray, setFilteredArray] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

   

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    if(event.target.value === ""){
      setFilteredArray([])
    }else{
      const filteredPersonsContacts = persons.filter(person => person.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase()))
      setFilteredArray(filteredPersonsContacts)
    }
    
   

  }


  const addPersonToThePhoneBook = (event) => {
    event.preventDefault()
    
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
      <Header title={"Phonebook"} headingLevel={"h1"}/>
      <SearchFilter handleSearchChange={handleSearchChange} newSearch={newSearch}/>
      <Header title={"Submit your contact:"} headingLevel={"h2"}/>
      <PersonForm addPersonToThePhoneBook={addPersonToThePhoneBook}
                  handlePersonNameChange={handlePersonNameChange}
                  handlePersonNumberChange={handlePersonNumberChange}
                  newName={newName}
                  newNumber={newNumber}/>
      <Header title={"Filtered Contacts:"} headingLevel={"h2"}/>
      <FilteredContacts filteredArray={filteredArray}/>
      <Header title={"Added to Phonebook:"} headingLevel={"h2"}/>
      <PersonsOnThePhoneBook persons={persons}/>
    </div>
  )
}

export default App