import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Header from './Header'
import { Row, Col } from 'react-bootstrap'

const ShowCountry = ({country, newSearch}) =>{

    if(country !== null && newSearch !== ''){

        return(
            <Row >
                <Col>
                    <Header title={"You chose:"} headingLevel={"h2"}/>
                    <Card style={{width:'26rem'}}>
                        <Card.Img variant="top" src={country.flags.png} />
                        <Card.Body >
                        <Card.Title>{country.name.common}</Card.Title>
                        <Card.Subtitle>Capital: {country.capital[0]}</Card.Subtitle>
                        <Card.Subtitle>Area: {country.area}</Card.Subtitle>
                        <Card.Subtitle>Languages: </Card.Subtitle>
                        <ListGroup>
                        {
                            Object.values(country.languages).map(languageName =>(
                            <ListGroupItem key={languageName}> {languageName}</ListGroupItem>
            
                            ))
                        }   
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