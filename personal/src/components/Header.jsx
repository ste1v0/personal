import { Icon } from '@iconify/react';

export default function Header({lightMode, setLightMode, fontIncreased, setFontIncreased}) {
    
    function changeMode() {
        setLightMode(prevValue => !prevValue)
    }

    function changeFont() {
        setFontIncreased(prevValue => !prevValue)
    }
    return (
        <header className="fade-in-header">
            <nav style={{backgroundColor: lightMode ? '#282836' : '#CACAD3', color: lightMode ? 'white' : 'black'}}>
                <ul className="header__features">
                    <li style={{backgroundColor: lightMode ? '#141515' : '#EEF0F3'}} className="header__homepage"><Icon icon="line-md:home-md-twotone-alt" width="24" height="24" /></li>
                    <li className="header__link">
                        <Icon icon="iwwa:file-pdf" className="hover" width="24" height="24" />
                        <a className="header__cv" href="https://ste1v0.dev/serov_frontend.pdf" target="_blank" rel="noreferrer">Resume</a>
                     </li>
                    <li className="header__link">
                        <Icon icon="ic:twotone-telegram" className="hover rotate" width="24" height="24"/> 
                        <a className="header__tg" href="https://t.me/ste1v0" target="_blank" rel="noreferrer">Telegram</a>
                    </li>
                    <li className="header__right">
                        <span className="material-symbols-outlined hover pointer right" onClick={changeFont}>
                                {fontIncreased ? "text_decrease" : "text_increase"}
                        </span>
                        <span className="material-symbols-outlined hover pointer right" onClick={changeMode}>
                                {lightMode ? "dark_mode" : "light_mode"}
                        </span>
                    </li>

                </ul>
            </nav>
        </header>
    )
}