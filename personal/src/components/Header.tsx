import { Icon } from '@iconify/react';
import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

type HeaderProps = {
    lightMode: boolean,
    setLightMode: React.Dispatch<React.SetStateAction<boolean>>
    fontIncreased: boolean,
    setFontIncreased: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({lightMode, setLightMode, fontIncreased, setFontIncreased} : HeaderProps) {

    const location = useLocation()
    const lastHash = useRef('')

    useEffect(function() {
        if (location.hash) {
            lastHash.current = location.hash.slice(1)
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(function() {
                document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                lastHash.current = ''
            }, 100)
        }
    }, [location])
    
    function changeMode() {
        setLightMode(prevValue => !prevValue)
        localStorage.setItem('mode', String(!lightMode))
    }

    function changeFont() {
        setFontIncreased(prevValue => !prevValue)
        localStorage.setItem('font', String(!fontIncreased))
    }

    return (
        <header className="fade-in-header">
            <nav style={{backgroundColor: lightMode ? '#282836' : '#CACAD3', color: lightMode ? 'white' : 'black'}}>
                <ul className="header__features">
                    <li style={{backgroundColor: lightMode ? '#141515' : '#EEF0F3'}} className="header__homepage">
                        <Link to="#">
                            <Icon icon="line-md:home-md-twotone-alt" width="24" height="24" />
                        </Link>
                    </li>
                    <li className="header__link">
                        <Link to="#projects">Projects</Link>
                     </li>
                    <li className="header__link">
                        <Link to="#contacts">Contacts</Link>
                    </li>
                    <li className="header__link">
                        <a href="https://github.com/lydiahallie/javascript-questions#1-whats-the-output" target="_blank" rel="noreferrer">JS ES6 Interview Prep</a>
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