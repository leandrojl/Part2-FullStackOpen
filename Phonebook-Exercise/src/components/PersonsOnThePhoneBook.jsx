import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const PersonsOnThePhoneBook = (props) =>{

  

    return(
        <Row >
        {
          props.persons.map(
            person =>
            <Col lg={4} key={person.id} className="mb-2">
              <Card >
              <Card.Body>
                <Card.Title>Name: {person.name}</Card.Title>
                <Card.Subtitle>Number: {person.number}</Card.Subtitle>
              </Card.Body>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col><Button  className="mb-1 p-2" variant="danger" onClick={()=> props.handleDeletePerson(person)}>Delete</Button></Col>
              </Row>
              </Card>
              
            </Col>
          )
        }
        </Row>
    )
  
  }

  export default PersonsOnThePhoneBook