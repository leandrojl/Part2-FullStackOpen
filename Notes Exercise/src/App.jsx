import { useState } from 'react'
import Header from "./components/Header"
import Note from "./components/Note"
import Form from "./components/Form"


const App = (props) => {

  

  const [notes, setNotes] = useState(props.notes)
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState(
    'Type a new note'
  )
  console.log(notes)

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
      
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
    
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <Header name={"Notes"}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
      {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <Form addNote={addNote} handleNoteChange={handleNoteChange} newNote={newNote}/>

       
    </div>
  )
}

export default App 