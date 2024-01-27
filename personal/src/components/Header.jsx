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
                    <li className="header__text">home</li>
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