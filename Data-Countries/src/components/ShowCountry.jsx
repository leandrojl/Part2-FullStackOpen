import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Header from './Header'
import { Row, Col } from 'react-bootstrap'

const ShowCountry = ({country, newSearch, countryApi}) =>{

    if(country !== null && newSearch !== ''){

        return(
            <Row >
                <Col>
                    <Header title={"You chose:"} headingLevel={"h2"}/>
                    <Card style={{width:'26rem'}} >
                        <Card.Img variant="top" src={country.flags.png} />
                        <Card.Body>
                        <Card.Title>{country.name.common}</Card.Title>
                        <Card.Subtitle className="mt-1 mb-2">Capital: {country.capital[0]}</Card.Subtitle>
                        <Card.Subtitle className="mt-1 mb-2">Area: {country.area} m2</Card.Subtitle>
                        <Card.Subtitle className="mt-1 mb-2">Languages: </Card.Subtitle>
                        <ListGroup >
                        {
                            Object.values(country.languages).map(languageName =>(
                            <ListGroupItem key={languageName}> {languageName}</ListGroupItem>
            
                            ))
                        }
                        <Card.Title className="mt-1 mt-2">Weather in: {country.capital[0]}</Card.Title>
                        <Card.Subtitle className="mt-1 mb-2">Temperature in Celsius: {countryApi? countryApi.current.temp_c:''}</Card.Subtitle>
                        <Card.Subtitle className="mt-1 mb-2">Temperature in Fahrenheit: {countryApi? countryApi.current.temp_f:''}</Card.Subtitle>
                        <Card.Img style={{width:'5rem'}}src={countryApi? countryApi.current.condition.icon :  ''} />
                        <Card.Subtitle className="mt-1">Wind kph: {countryApi? countryApi.current.wind_kph  :''}</Card.Subtitle>
                        </ListGroup>            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        )
    }else{
        return (
            <>
            </>
        )
    } 
  }

  export default ShowCountry