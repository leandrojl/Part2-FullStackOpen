import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchFilter from './components/SearchFilter'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'
import countryService from './services/countries'

function App() {

  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(()=>{
    let counter=0
    /*countryService
    .getAll()*/
    /*axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')*/
    countryService
    .getAll()
    .then(initialCountries=>{
      counter++;
      setCountries(initialCountries)
      console.log(initialCountries)
      console.log(counter)
    })

  },[])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <SearchFilter handleSearchChange={handleSearchChange} newSearch={newSearch}/></Col>
        <Col>
        <DisplayCountries countries={countries}/>
        </Col>
      </Row> 
    </Container>
      
    
  )
}

export default App
