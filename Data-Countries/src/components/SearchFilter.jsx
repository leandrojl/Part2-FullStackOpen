import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchFilter = (props) =>{

    return(
      <Form className='mb-2 mt-5'>
        <Form.Group>
            <Row>
                <Col lg={5}><Form.Label>Search your country:</Form.Label></Col>
                <Col lg={7}><Form.Control onChange={props.handleSearchChange} value={props.newSearch} placeholder='Search here...'/></Col>
            </Row>
        </Form.Group>
      </Form>
    )
  
  }

  export default SearchFilter