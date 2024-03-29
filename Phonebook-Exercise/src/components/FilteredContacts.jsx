import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const FilteredContacts = (props) =>{

    return(
     

<Row >
{
  props.filteredArray.map(
    person =>
    <Col lg={12} key={person.id} className='mb-2'>
      <Card >
      <Card.Body>
        <Card.Title>Name: {person.name}</Card.Title>
        <Card.Subtitle>Number: {person.number}</Card.Subtitle>
      </Card.Body>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col><Button style={{ width: '8rem' }}  variant="danger" onClick={()=> props.handleDeletePerson(person)}>Delete</Button></Col>
      </Row>
      </Card>
      
    </Col>
  )
}
</Row>
    )
  
  }

  export default FilteredContacts