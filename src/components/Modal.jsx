import React, { useState } from 'react'
import { v4 } from "uuid"
import { useTranslation } from "react-i18next"

const Modal = ({ closeModal, addNoteOrChangeHandler, isEdit, currentNote }) => {
    
    let [title, setTitle] = useState(currentNote?.title ?? '')
    let [text, setText] = useState(currentNote?.text ?? '')

    const { t } = useTranslation()

    
    const addNoteOrChange = () => {
        if(title.trim().length > 1 && text.trim().length > 1) {
            const note = {
                id: currentNote ? currentNote?.id :  v4(),
                title: title,
                text: text,
                date: currentNote ? currentNote?.date : new Date().toLocaleDateString(),
                edited: currentNote ? true : false
            }
            addNoteOrChangeHandler(note)
            closeModal()
        }else {
            alert(t('alert'))
        }
        
    }
    
  return (
    <>
        <div className="modal" onClick={() => closeModal()}>
            <div className="modal__box" onClick={(event) => event.stopPropagation()}>
                <h2 className="modal__box-title">
                    {isEdit ? t('edit_note') : t('add_note')}
                </h2>
                <div className="modal__box-fields">
                    <div className="modal__box-field">
                        <input 
                            placeholder={t('title')} 
                            type="text" 
                            className="modal__box-field-input"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <span className="modal__box-field-span">{t('title')}</span>
                    </div>
                    <div className="modal__box-field">
                        <input 
                            placeholder={t('text')} 
                            type="text" 
                            className="modal__box-field-input" 
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                        <span className="modal__box-field-span">{t('text')}</span>
                    </div>
                </div>
                <div className="modal__box-buttons">
                    <button 
                        className="modal__box-button color2" 
                        onClick={() => closeModal()}
                    >
                        {t('cancel')}
                    </button>
                    <button 
                        className="modal__box-button color"
                        onClick={() => addNoteOrChange()}
                    >
                        {isEdit ? t('edit') : t('add')}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal