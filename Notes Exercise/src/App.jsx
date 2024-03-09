import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Note from "./components/Note"
import Form from "./components/Form"
import axios from 'axios'


const App = () => {

  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState(
    'Type a new note'
  )

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', notes.length, 'notes')
  

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