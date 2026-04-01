import React, { useState } from 'react'
import searchIcon from '/public/images/search.svg'
import backIcon from '/public/images/back.svg'
import closeIcon from '/public/images/close.svg'
import { useTranslation } from "react-i18next"

const Navbar = ({ searchValue,  setSearchValue }) => {

    const { t, i18n } = useTranslation()
    const [toggleNav, setToggleNav] = useState(true)
    
    const changeLang = () => {
        const newLang = i18n.language == 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLang)
    }
    
    const reset = () => {
        setToggleNav(true)
        setSearchValue('')
    }
    

    return (
        <>
            <nav className="nav">
                {toggleNav ?
                    <>
                        <button className="nav__lang" onClick={() => changeLang()}>
                            {i18n.language == 'ru' ? 'RU' : 'EN'}
                        </button>
                        <h1 className="nav__title">{t('notes')}</h1>
                        <button className="nav__search" onClick={() => setToggleNav(false)}>
                            <img src={searchIcon} alt="" />
                        </button>
                    </>     
                    :   
                    <>
                        <button className="nav__back" onClick={() => reset()}>
                            <img src={backIcon} alt="" />
                        </button>
                        <input 
                            placeholder={t('search')}
                            type="text" 
                            className="nav__input"
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                        <button className="nav__clear" onClick={() => setSearchValue('')}>
                            <img src={closeIcon} alt="" />
                        </button>
                    </>
                }
            </nav>
        </>
    )
}

export default Navbar