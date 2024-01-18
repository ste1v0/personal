import { useState, useEffect } from 'react'

import Placeholder from 'react-bootstrap/Placeholder';

export default function Hero({lightMode}) {

const [animate, setAnimate] = useState(false)

function handleClick() {
    setAnimate(true)
    setTimeout(function() {
        setAnimate(false)
    }, 3250)
}

const animation = {
    transform: 'rotate(1turn)',
	transition: 'transform 3.25s'
}

    return (
        <>
            <main>
                <section className="hero__left">
                    <div onClick={handleClick} style={animate ? animation : {display: 'block'}} className={lightMode ? "hero__profile hero__profile__pic--dark" : "hero__profile hero__profile__pic--light"}></div>

                </section>
                <section className="hero__right">
                    <div>Part II</div>
                    <Placeholder animation="glow">
                        <Placeholder style={{ width: '25vh' }} /> {' '}
                    </Placeholder>
                </section>
            </main>
        </>
    )
}