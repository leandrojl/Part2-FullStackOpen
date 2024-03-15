import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Note from "./components/Note"
import Form from "./components/Form"
import axios from 'axios'
import noteService from './services/notes'




const App = () => {

  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newNote, setNewNote] = useState(
    'Type a new note'
  )
  
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        console.log("this is the response", initialNotes)
        setNotes(initialNotes)
      })
  }, [])
  

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      
    }

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
      console.log(returnedNote)
    })
  
    
    
  }

  const handleNoteChange = (event) => {
    
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    console.log("note", note)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
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
          <Note key={note.id} 
                note={note} 
                toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <Form addNote={addNote} handleNoteChange={handleNoteChange} newNote={newNote}/>

       
    </div>
  )
}

export default App 