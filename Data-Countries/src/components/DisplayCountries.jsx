import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const DisplayCountries = ({filteredCountries, handleShowCountryButton}) =>{


    if(filteredCountries !== null && filteredCountries.length <= 10 && filteredCountries.length > 1){
        
        return(
            <ListGroup>
              {
              
              filteredCountries.map(
                  country =>
                  <ListGroupItem key={country.name.official}>
                    <Row>
                      <Col lg={10}>
                        {country.name.common}
                      </Col>
                      <Col lg={2} className="d-flex justify-content-end">
                        <Button onClick={()=> handleShowCountryButton(country)}>Show</Button>
                      </Col>
                    </Row>
                  </ListGroupItem>   
              )
              }
            </ListGroup>  
          )
    } else {
      if (filteredCountries === null || filteredCountries.length === 0) {
        return <Alert variant="info">No countries found!</Alert>;
      } else {
        if(filteredCountries.length === 1){
          return( 
                <Card >
                <Card.Img variant="top" src={filteredCountries[0].flags.png} />
                  <Card.Body>
                  <Card.Title>{filteredCountries[0].name.common}</Card.Title>
                    <Card.Subtitle>Capital: {filteredCountries[0].capital[0]}</Card.Subtitle>
                    <Card.Subtitle>Area: {filteredCountries[0].area}</Card.Subtitle>
                    <Card.Subtitle>Languages: </Card.Subtitle>
                    <ListGroup>
                      {
                        Object.values(filteredCountries[0].languages).map(languageName =>(
                          <ListGroupItem key={languageName}> {languageName}</ListGroupItem>

                        ))
                      }   
                    </ListGroup>  
                  </Card.Body>
                  </Card>
          )       
        }else{
          return(
            <Row>
              <Col>
              <Alert variant="danger">
              There are {filteredCountries.length} countries, specify more characters!
              </Alert>
              </Col>
            </Row>
          )
        }  
      }}
  }

  export default DisplayCountries