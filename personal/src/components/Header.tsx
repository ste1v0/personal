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
            <nav>
                <ul className="header__features">
                    <li className="header__left">
                        <Link to="https://t.me/ste1v0_dev" target="_blank" className="header__link">
                            <img src="/telegram-icon.svg" alt="Telegram" />
                        </Link>
                        <Link to="https://github.com/ste1v0" target="_blank" className="header__link">
                            <img src="/github-icon.svg" alt="GitHub" />
                        </Link>
                        <Link to="https://linkedin.com/in/stepanserov" target="_blank" className="header__link">
                            <img src="/linkedin-icon.svg" alt="LinkedIn" />
                        </Link>
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