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
import ShowCountry from './components/ShowCountry'

function App() {

  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)

  useEffect(()=>{
    countryService
    .getAll()
    .then(initialCountries=>{
      setCountries(initialCountries)
    })
  },[])

    const handleShowCountryButton = (country) =>{
      setCountry(country);
    }

    const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    const filteredCountriesBySearch= countries.filter(function(country) {
      return country.name.common.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
    } )
    setFilteredCountries(filteredCountriesBySearch)
    console.log("this are the filtered countries at handleSearchChange function: ", filteredCountriesBySearch)
    if(event.target.value === ""){
      setFilteredCountries(null)
      setCountry(null)
    }
  }

  return (
    <Container>
      <Row>
        <Col><Header title={"Country Searcher"} headingLevel={"h1"}/></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        
        <Col lg={6}>
          <SearchFilter  handleSearchChange={handleSearchChange} newSearch={newSearch}/>
          <DisplayCountries  filteredCountries={filteredCountries} handleShowCountryButton={handleShowCountryButton}/>
        </Col>
        <Col >
        <ShowCountry country={country} newSearch={newSearch}/>
        
        </Col>
      </Row> 
    </Container>
  )
}

export default App
