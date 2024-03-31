import Form from 'react-bootstrap/Form'

const SearchFilter = (props) =>{

    return(
      <Form className='mb-2'>
        <Form.Group>
          <Form.Control onChange={props.handleSearchChange} value={props.newSearch} placeholder='Search here...'/>
        </Form.Group>
      </Form>
      /*<div>
        <p>Search your contact: <input onChange={props.handleSearchChange} value={props.newSearch}/> </p>
    </div>*/
    )
  
  }

  export default SearchFilter