export default function Header({lightMode, setLightMode, fontIncreased, setFontIncreased}) {


    function changeMode() {
        setLightMode(prevValue => !prevValue)
    }

    function changeFont() {
        setFontIncreased(prevValue => !prevValue)
    }
    return (
        <header>
            <nav>
                <ul className="header__container">
                    <li className="material-symbols-outlined hover" onClick={changeFont}>
                        <span>
                            {fontIncreased ? "text_decrease" : "text_increase"}
                        </span>
                    </li>
                    <li className="material-symbols-outlined hover" onClick={changeMode}>
                    <span>
                            {lightMode ? "dark_mode" : "light_mode"}
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}