import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import editIcon from '/public/images/edit.svg'
import Modal from "./components/Modal"
import NotesContext from "./context"
import DelModal from "./components/DelModal"


function App() {


  const setLocalStorage = () => localStorage.notes = JSON.stringify(notes)
  const getLocalStorage = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notes, setNotes] = useState(getLocalStorage)
  const [isEdit, setIsEdit] = useState(false)
  const [currentNote, setCurrentNote] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [isDelModalOpen, setIsDelModalOpen] = useState(false)
  
  const notesBySearchValue = notes.filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))


  
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsEdit(false)
    setCurrentNote(null)
  }

  const openDelModalAndSetDelNote = (note) => {
    setIsDelModalOpen(true)
    setCurrentNote(note)
  }

  const closeDelModal = () => {
    setIsDelModalOpen(false)
    setCurrentNote(null)
  }


  
  const addNoteOrChangeHandler = (note) => {
    if(currentNote?.id) {
        const updatedNotes = notes.map((item) => {
          if(item.id == note.id) {
            return note
          }
          return item
        })
        setNotes(updatedNotes)
    }else {
      setNotes([...notes, note])
    }
    
  }

  const deleteNoteHandler = (id) => {
    setNotes(notes.filter((item) => item.id != id))
    setIsDelModalOpen(false)
    setCurrentNote(null)

  }

  const editNoteHandler = (note) => {
    setCurrentNote(note)
    setIsEdit(true)
    openModal()
  }


  useEffect(() => {
    setLocalStorage()
  }, [notes])


  return (
    <NotesContext.Provider value={{
      deleteNoteHandler,
      editNoteHandler,
      openDelModalAndSetDelNote,
      closeDelModal,
    }}>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Notes notes={notesBySearchValue} openDelModal={openDelModalAndSetDelNote} />
      {isModalOpen && <Modal
        currentNote={currentNote}
        isEdit={isEdit}
        addNoteOrChangeHandler={addNoteOrChangeHandler}
        closeModal={closeModal}
      />}
      {isDelModalOpen && <DelModal currentNote={currentNote} deleteNoteHandler={deleteNoteHandler}/>}
      <button className="add" onClick={() => openModal()}>
        <img src={editIcon} alt="" />
      </button>
    </NotesContext.Provider>
  )
}

export default App
