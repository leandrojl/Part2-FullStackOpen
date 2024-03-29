import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }else{

      return (
        
        <Alert variant='primary'>
          {message}
        </Alert>
      
  )

    }
  }

  export default Notification