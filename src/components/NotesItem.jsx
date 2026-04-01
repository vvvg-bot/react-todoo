import React, { useContext } from 'react'
import editIcon from '/public/images/edit.svg'
import delIcon from '/public/images/del.svg'
import NotesContext from "../context"
import { useTranslation } from "react-i18next"

const NotesItem = ({ note, toggle}) => {
    
    const { /*deleteNoteHandler,*/ editNoteHandler, openDelModalAndSetDelNote } = useContext(NotesContext)
    
    const { t} = useTranslation()

  return (
    <>
        <div className="notes__item">
            <div className={`notes__item-info ${!toggle ? 'active' : '' } `}>
                <h2 className="notes__item-title">{note.title}</h2>
                <span className="notes__item-date">{note.date}</span>
            </div>
            <p className="notes__item-text">{note.text}</p>
            {note.edited && <p className="notes__item-edited">{t('edited')}</p>}
            <div className="notes__item-buttons">
                <button className="notes__item-button color" onClick={() => editNoteHandler(note)}>
                    <img src={editIcon} alt="" />
                    <span>{t('edit')}</span>
                </button>
                <button className="notes__item-button color2" onClick={() => openDelModalAndSetDelNote(note)/*deleteNoteHandler(note.id)*/}>
                    <img src={delIcon} alt="" />
                    <span>{t('delete')}</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default NotesItem