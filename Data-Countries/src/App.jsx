import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchFilter from './components/SearchFilter'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'
import countryService from './services/countries'
import Header from './components/Header'

function App() {

  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)

  useEffect(()=>{
    /*countryService
    .getAll()*/
    /*axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')*/
    countryService
    .getAll()
    .then(initialCountries=>{

      setCountries(initialCountries)

    })

  },[])

  
    /*

    
    grab first element of newSearch
    iterate through countries with the first element
    if result its less than 10 countries ? show : hide (ask for more characters)
*/
    const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    if(event.target.value === ""){
      setFilteredCountries(null)
        }else{
          const filteredCountriesBySearch= countries.filter(function(country) {
            return country.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
          } )
          setFilteredCountries(filteredCountriesBySearch)
        }

      }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col><Header title={"Country Searcher:"} headingLevel={"h1"}/></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
          <SearchFilter  handleSearchChange={handleSearchChange} newSearch={newSearch}/>
          <DisplayCountries  filteredCountries={filteredCountries}/>
        </Col>
        <Col>
        </Col>
      </Row> 
    </Container>
      
    
  )
}

export default App
