import { useState } from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import { SlAnimation } from '@shoelace-style/shoelace/dist/react';

export default function Hero({lightMode, fontIncreased}) {

const [animate, setAnimate] = useState(false)
const [count, setCount] = useState(0)

function handleClick() {
    setCount(prevValue => prevValue + 1)
    setAnimate(true)
    setTimeout(function() {
        setAnimate(false)
    }, 3250)
}

const animation = {
    transform: 'rotate(1turn) scale(0.4)',
	transition: 'all 3.25s',
    borderRadius: '50%'
}

    return (
        <>
            <main className="fade-in-hero">
                <section className="hero__left">
                    <div onClick={handleClick} style={animate ? animation : {display: 'block'}} className={lightMode ? "hero__profile hero__profile__pic--dark light pointer" : "hero__profile hero__profile__pic--light light pointer"}>
                    <SlAnimation name="flash" duration={4000} play>
                        <span className="hero__tap hover">{animate ? '' : '← Tap!'}</span>
                    </SlAnimation>
                    </div>
                    <div style={{backgroundColor: !lightMode ? 'whitesmoke' : 'purple', color: lightMode ? 'white' : 'black'}}className="hero__count capitalize">Taps count: {count}</div>

                </section>
                <section className="hero__right">
                    <h1 style={{fontSize: fontIncreased ? 'var(--title-increased)': 'var(--title-default)'}}>Lorem ipsum</h1>
                    {animate ?
                    <Placeholder animation="glow">
                        <Placeholder style={{ width: '20vw' }} />{' '}
                    </Placeholder>
                    : <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>}
                </section>
            </main>
        </>
    )
}