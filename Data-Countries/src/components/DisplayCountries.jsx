import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const DisplayCountries = ({filteredCountries}) =>{

    console.log("displaycountries component:",filteredCountries)

    if(filteredCountries !== null && filteredCountries.length <= 10 && filteredCountries.length > 1){
        
        return(
            <ListGroup>
              {
                
              filteredCountries.map(
                  country =>
                  <ListGroupItem key={country.name.official}>{country.name.common}</ListGroupItem>
              )
              }
              
            </ListGroup>
          )

    } 
    

    
  
  }

  export default DisplayCountries