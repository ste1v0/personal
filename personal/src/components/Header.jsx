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
                <ul className="header__container">
                    <li style={{backgroundColor: lightMode ? '#141515' : '#EEF0F3'}} className="header__link"><Icon icon="line-md:home-md-twotone-alt" width="24" height="24" /></li>
                    <li className="material-symbols-outlined hover pointer" onClick={changeFont}>
                        <span>
                            {fontIncreased ? "text_decrease" : "text_increase"}
                        </span>
                    </li>
                    <li className="material-symbols-outlined hover pointer" onClick={changeMode}>
                        <span>
                            {lightMode ? "dark_mode" : "light_mode"}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}