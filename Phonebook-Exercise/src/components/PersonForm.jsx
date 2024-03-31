
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PersonForm = (props) =>{

    return(
      
        <Form onSubmit={props.addPersonToThePhoneBook} >
          <Stack gap={2}>
          
            <Form.Group controlId='formBasicName'>
            <Row>
                <Col lg={4}>
                  <Form.Label>
                  Name:
                  </Form.Label>
                </Col>
                <Col lg={8}>
                <Form.Control  onChange={props.handlePersonNameChange} value={props.newName} placeholder='Enter name'/>
                </Col>
              </Row>
              
            </Form.Group>

            <Form.Group controlId='formBasicNumber'>
              <Row>
                <Col lg={4}>
                  <Form.Label>
                  Number:
                  </Form.Label>
                </Col>
                <Col lg={8}>
                <Form.Control onChange={props.handlePersonNumberChange} value={props.newNumber} placeholder='Enter number' />
                </Col>
              </Row>
              
              </Form.Group>
            <Button className='mb-2 mt-1' variant='primary' type='submit'>Save</Button>
            </Stack>
          </Form>
            
          
        /*
      <div>
        <form onSubmit={props.addPersonToThePhoneBook}>
            <div>Name: <input onChange={props.handlePersonNameChange} value={props.newName}/></div>
            <div>Number: <input onChange={props.handlePersonNumberChange} value={props.newNumber} /></div>
            <button type="submit">Save</button>   
        </form>
      </div>*/
        
    )
  
  }

  export default PersonForm