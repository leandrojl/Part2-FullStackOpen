import { useState, useEffect } from 'react'
import SearchFilter from "./components/SearchFilter"
import PersonForm from "./components/PersonForm"
import FilteredContacts from "./components/FilteredContacts"
import Header from "./components/Header"
import PersonsOnThePhoneBook from "./components/PersonsOnThePhoneBook"
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('new name')
  const [newNumber, setNewNumber] = useState('new number')
  const [newSearch, setNewSearch] = useState('search here...')
  const [filteredArray, setFilteredArray] = useState([])

  const hook = () => {
    console.log('effect')
    personsService
    .getAll()
    .then(initialPersons => {
        console.log("this is the response", initialPersons)
        setPersons(initialPersons)
      })
    .catch(error => {
        console.error('Error updating the phonebook:', error);
      });
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
      /* alert(`${newName} it is already in the list! Please write another one`)
      console.log("Person not added to the persons array") */
      //if a person's name is equal to an existing object with that name, change the phone number of that object with the new number
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        const personDuplicated = persons.find(person => person.name === personObject.name)
      console.log("Person duplicated:", personDuplicated)
      const changedPersonNumber = { ...personDuplicated, number: newNumber }
    
      personsService
      .update(personDuplicated.id,changedPersonNumber)
      .then(returnedPerson => {
        //setNotes(notes.map(note => note.id !== id ? note : returnedNote))
        setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
      })
      .catch(error => {
        console.log("An error has ocurred!", error)
      })

      }
      


      
    }else{
      setNewName("")
      personsService
      .create(personObject)
      .then(createdPerson => {
      setPersons(persons.concat(createdPerson))
      
      console.log(createdPerson)
    })
      
    console.log("form submitted")
    

    }
    

    //receive new name
    //check if it is in the persons array
    //add if there is none
    //if not, ask to write the name again because it is repeated
    
  }

  const handleDeletePerson = (personObject) =>{
    //check id from persons[] that previously brings the persons from db.json
    //ask user if he/she wants to delete the person 
    //delete object from db.json
    if(window.confirm(`Wanna proceed deleting ${personObject.name}?`)){
      personsService
    .deleteEntry(personObject)
    .then(deletedEntry => {
      console.log('Resource deleted successfully:', deletedEntry);
      setPersons(prevPersons => prevPersons.filter(person => person.id !== personObject.id));
      /* personsService
      .getAll()
      .then(initialPersons => {
          console.log("this is the response", initialPersons)
          setPersons(initialPersons)
        })
      .catch(error => {
        console.error('Error updating the phonebook:', error);
      }); */
      
      
    })
    .catch(error => {
      console.error('Error deleting resource:', error);
    });
    
    }
    
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
      <PersonsOnThePhoneBook handleDeletePerson={handleDeletePerson} persons={persons}/>
    </div>
  )
}

export default App