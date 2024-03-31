import { useState, useEffect } from 'react'
import SearchFilter from "./components/SearchFilter"
import PersonForm from "./components/PersonForm"
import FilteredContacts from "./components/FilteredContacts"
import Header from "./components/Header"
import PersonsOnThePhoneBook from "./components/PersonsOnThePhoneBook"
import axios from 'axios'
import personsService from './services/persons'
import Notification from './components/Notification'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/esm/Stack'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filteredArray, setFilteredArray] = useState([])
  const [notification, setNotification] = useState(null)
  const [colorMessage, setColorMessage] = useState('')

  const hook = () => {
    console.log('effect')

    personsService.getAll()
    .then(initialPersons => {
        console.log("this is the response", initialPersons)
        setPersons(initialPersons)
      })
    .catch(error => {console.error('Error updating the phonebook:', error)});
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
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        const personDuplicated = persons.find(person => person.name === personObject.name)
        console.log("Person duplicated:", personDuplicated)
        const changedPersonNumber = { ...personDuplicated, number: newNumber }
        
        personsService.update(personDuplicated.id,changedPersonNumber)
        .then(returnedPerson =>{setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))})
        .catch(error => 
          {if (error.response && error.response.status === 404) {
            console.error('Error 404: Contact not found');
            setNotification(
              `${personObject.name} has already been removed from the Phonebook.`
            );
            setColorMessage('danger') 
            setTimeout(() => {
              setNotification(null);
              setColorMessage('')
            }, 5000);
          } else {
            console.error('Error deleting resource:', error);
      }})
        setNotification(
          `Succesfully changed ${personDuplicated.name} number in the Phonebook`
        )
        setColorMessage('success')
        setTimeout(() => {
          setNotification(null)
          setColorMessage('')
        }, 5000)
      }
    }else{
      setNewName("")
      setNewNumber("")
      personsService.create(personObject)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson)
        
        
        )
        setNotification(
          `${personObject.name} has been added to the Phonebook`
        )
        setColorMessage('success')
        setTimeout(() => {
          setNotification(null)
          setColorMessage('')
        }, 5000)
      console.log(createdPerson)
    })
    }  
  }

  const handleDeletePerson = (personObject) =>{
    if(window.confirm(`Wanna proceed deleting ${personObject.name}?`)){
      personsService
      .deleteEntry(personObject)
      .then(deletedEntry => {
        console.log('Resource deleted successfully:', deletedEntry);
        setPersons(prevPersons => prevPersons.filter(person => person.id !== personObject.id))})
      .catch(error => 
        {if (error.response && error.response.status === 404) {
          console.error('Error 404: Contact not found');
          setNotification(
            `${personObject.name} is no longer on the phonebook.`
          );
          setColorMessage('danger') 
          setTimeout(() => {
            setNotification(null);
            setColorMessage('')
          }, 5000);
        } else {
          console.error('Error deleting resource:', error);
      }});
    } 
  }

  return (
    <div>
      <Container>
      <Stack gap={2}>
      <Row className='bg-light rounded'>
        <Col><Header title={"Phonebook"} headingLevel={"h1"}/></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row >
        <Col>
        </Col>
        <Col  className='bg-light rounded-4' >
          <Header title={"Submit your contact:"} headingLevel={"h2"}/>
          <PersonForm addPersonToThePhoneBook={addPersonToThePhoneBook}
                      handlePersonNameChange={handlePersonNameChange}
                      handlePersonNumberChange={handlePersonNumberChange}
                      newName={newName}
                      newNumber={newNumber}/>
        </Col>
        <Col >
          <Notification message={notification} colorMessage={colorMessage}/>
        </Col>
        
      </Row>
      <Row>
        <Col xs={8} md={8} lg={8} className="bg-light">
          <Header title={"Added to Phonebook:"} headingLevel={"h2"}/>
          <PersonsOnThePhoneBook handleDeletePerson={handleDeletePerson} persons={persons}/>
        </Col>
        <Col xs={4} md={4} lg={4} className="bg-info">
          <Header title={"Search your contact:"} headingLevel={"h2"}/>
          <SearchFilter handleSearchChange={handleSearchChange} newSearch={newSearch}/>
          <FilteredContacts filteredArray={filteredArray}/>
        </Col>
      </Row>
      </Stack>
      
      
      
      </Container>
    </div>
  )
}

export default App