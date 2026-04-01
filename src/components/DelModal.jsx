import { useContext } from "react"
import NotesContext from "../context"
import { useTranslation } from "react-i18next"



export default function DelModal({deleteNoteHandler, currentNote}) {

    const { closeDelModal } = useContext(NotesContext)

    const { t } = useTranslation()

  return (
    <>
        <div className="modal" onClick={() => closeDelModal()}>
            <div className="modal__box" onClick={(event) => event.stopPropagation()}>
                <h2 className="modal__box-title">{t('confirm_del')}</h2>
                <span>{currentNote.title}</span>
            
                <div className="modal__box-buttons del_buttons">
                    <button 
                        className="modal__box-button color2" 
                        onClick={() => closeDelModal()}
                    >
                        {t('cancel')}
                    </button>
                    <button 
                        className="modal__box-button color"
                        onClick={() => deleteNoteHandler(currentNote.id)}
                    >
                        {t('yes')}
                    </button>
                </div>
            </div>
         </div>
    </>
  )
}
