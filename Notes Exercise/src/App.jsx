import { useState } from 'react'
import Header from "./components/Header"
import Note from "./components/Note"
import Form from "./components/Form"


const App = (props) => {

  console.log(props.notes)

  const [notes, setNotes] = useState(props.notes)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  return (
    <div>
      <Header name={"Notes"}/>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <Form addNote={addNote}/>

       
    </div>
  )
}

export default App 