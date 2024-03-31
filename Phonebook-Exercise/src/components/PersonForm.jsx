
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const PersonForm = (props) =>{

    return(
      
        <Form onSubmit={props.addPersonToThePhoneBook} >
          <Stack gap={2}>
            <Form.Group controlId='formBasicName'>
              <Form.Label>
                Name:
              </Form.Label>
              <Form.Control  onChange={props.handlePersonNameChange} value={props.newName} placeholder='Enter name'/>
            </Form.Group>

            <Form.Group controlId='formBasicNumber'>
              <Form.Label>
                Number:
              </Form.Label>
              <Form.Control onChange={props.handlePersonNumberChange} value={props.newNumber} placeholder='Enter number' />
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