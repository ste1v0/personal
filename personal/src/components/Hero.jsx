import { useState } from 'react'
import { SlAnimation, SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';

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
                    {/* <div style={{backgroundColor: !lightMode ? 'whitesmoke' : 'purple', color: lightMode ? 'white' : 'black'}}className="hero__count capitalize">Taps count: {count}</div> */}

                </section>
                <section className="hero__right">
                    <h2 className="nabla" style={{fontSize: fontIncreased ? 'var(--title-increased)': 'var(--title-default)'}}>Latest projects</h2>
                        <SlCarousel autoplay loop pagination mouseDragging className="hero__carousel">
                            <SlCarouselItem>
                                <img
                                    className="hero__carousel-pic"
                                    alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                                    src="./src/assets/boxd-min.png"
                                />
                            </SlCarouselItem>
                            <SlCarouselItem>
                                <img
                                    className="hero__carousel-pic"
                                    alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                                    src="./src/assets/rssgames-min.png"
                                />
                            </SlCarouselItem>
                        </SlCarousel>
                </section>
            </main>
        </>
    )
}