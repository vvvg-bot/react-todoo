import React, { useState } from 'react'
import listIcon from '/public/images/list.svg'
import gridIcon from '/public/images/grid.svg'
import NotesItem from "./NotesItem"
import { useTranslation } from "react-i18next"

const Notes = ({ notes}) => {
    
    const [toggle, setToggle] = useState(true)

    const { t } = useTranslation()

  return (
    <>
        <div className="notes">
            <div className="container">
                <div className="notes__top">
                    <h2 className="notes__top-title">
                        {notes.length > 0 ?  t('allNotes') : t('no_notes') }
                    </h2>
                    <button onClick={() => setToggle(!toggle)} className="notes__top-btn">
                        <img src={toggle ? listIcon : gridIcon} alt="" />
                        {toggle ? t('list') : t('grid')}
                    </button>
                </div>
                <div className={`notes__list ${!toggle ? 'active' : '' }`}>
                    {notes.map((note) => (
                        <NotesItem
                            key={note.id} 
                            note={note}
                            toggle={toggle}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Notes