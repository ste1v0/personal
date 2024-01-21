import { useState } from 'react'
import { SlAnimation } from '@shoelace-style/shoelace/dist/react';
import { Icon } from '@iconify/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

export default function Hero({lightMode, fontIncreased}) {

const [animate, setAnimate] = useState(false)
const [count, setCount] = useState(0)

const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])


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
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide boxd"><span className="embla__slide-text"><a href="https://fabulous-marigold-8f871e.netlify.app/" target="_blank">→ Games Database</a></span></div>
                            <div className="embla__slide gamingnews"><span className="embla__slide-text"><a href="https://stunning-shortbread-4017c3.netlify.app" target="_blank">→ Gaming News</a></span></div>
                        </div>   
                    </div>
                </section>
            </main>
        </>
    )
}