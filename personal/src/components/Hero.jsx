import { useState } from 'react'
import { SlAnimation, SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';
import { Icon } from '@iconify/react';

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
                    <div className="hero__text">
                        <div className="hero__name" style={{fontSize: fontIncreased ? 'var(--name-increased)': 'var(--name-default)'}}>Stepan Serov</div>
                        <span className="hero__position" style={{fontSize: fontIncreased ? 'var(--position-increased)': 'var(--position-default)'}}>Frontend Developer</span>
                    </div>
                    <div className="hero__badges">
                        <Icon className="hover rotate" icon="mdi:react" width="32" height="32" />
                        <Icon className="hover" icon="mdi:language-javascript" width="32" height="32" />
                        <Icon className="hover" icon="mdi:tailwind" width="32" height="32" />
                        <Icon className="hover" icon="mdi:language-html5" width="32" height="32" />
                        <Icon className="hover" icon="mdi:language-css3" width="32" height="32" />
                    </div>
                    <div className="hero__icons">
                        <Icon icon="iwwa:file-pdf" className="hover" width="32" height="32" />  
                        <span>CV</span>
                    </div>
                    

                </section>
                <section className="hero__right">
                    <h2 className="kaushan-script-regular" style={{fontSize: fontIncreased ? 'var(--title-increased)': 'var(--title-default)'}}>Latest projects</h2>
                        <SlCarousel autoplay loop pagination mouseDragging className="hero__carousel">
                            <SlCarouselItem>
                                <img
                                    className="hero__carousel-pic"
                                    alt="Games Database"
                                    src="./boxd-min.png"
                                />
                                <a href="https://fabulous-marigold-8f871e.netlify.app"><div style={{color: lightMode ? 'black' : 'white'}} className="hero__carousel-title">Games Database</div></a>
                            </SlCarouselItem>
                            <SlCarouselItem>
                                <img
                                    className="hero__carousel-pic"
                                    alt="Gaming News"
                                    src="./rssgames-min.png"
                                        
                                />
                                <a href="https://stunning-shortbread-4017c3.netlify.app"><div style={{color: lightMode ? 'black' : 'white'}} className="hero__carousel-title">Gaming News</div></a>
                            </SlCarouselItem>
                        </SlCarousel>
                </section>
            </main>
        </>
    )
}