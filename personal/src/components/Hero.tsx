import { useState } from 'react'
import { SlAnimation } from '@shoelace-style/shoelace/dist/react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper' 
import 'swiper/css'
import '../App.css'

type HeroProps = {
    lightMode: boolean,
    fontIncreased: boolean
}

export default function Hero({lightMode, fontIncreased} : HeroProps) {

const [animate, setAnimate] = useState(false)

function handleClick() {
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

const lightTheme = {
    backgroundColor: 'black',
    color: 'white'
}

const darkTheme = {
    backgroundColor: 'white',
    color: 'black'
}

    return (
        <>
            <main className="fade-in-hero">
                <section className="hero__first">
                    <div onClick={handleClick} style={animate ? animation : {display: 'block'}} className={lightMode ? "hero__profile hero__profile__pic--dark light pointer" : "hero__profile hero__profile__pic--light light pointer"}>
                    <SlAnimation name="flash" duration={4000} play>
                        <span className="hero__tap hover">{animate ? '' : '← Tap!'}</span>
                    </SlAnimation>
                    </div>
                    <div className="hero__text">
                        <div className="hero__name" style={{fontSize: fontIncreased ? 'var(--name-increased)': 'var(--name-default)'}}>Stepan Serov</div>
                        <span className="hero__position" style={{fontSize: fontIncreased ? 'var(--position-increased)': 'var(--position-default)'}}>web Sorcery in the Making </span>
                    </div>
                </section>
                <section className="hero__second">
                <Swiper
                            className="sample-slider"
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{delay: 0}}
                            slidesPerView={5}
                            speed={7000}
                        >
                            <SwiperSlide><Icon className="sample-item hover" icon="mdi:language-css3" width="32" height="32" /></SwiperSlide> 
                            <SwiperSlide><Icon className="sample-item hover rotate" icon="mdi:react" width="32" height="32" /></SwiperSlide>
                            <SwiperSlide><Icon className="sample-item hover" icon="mdi:language-javascript" width="32" height="32" /></SwiperSlide>
                            <SwiperSlide><Icon className="sample-item hover" icon="mdi:language-typescript" width="32" height="32" /></SwiperSlide>
                            <SwiperSlide><Icon className="sample-item hover" icon="mdi:git" width="32" height="32" /></SwiperSlide>
                            <SwiperSlide><Icon className="sample-item hover" icon="mdi:language-html5" width="32" height="32" /></SwiperSlide>   
                        </Swiper>
                </section>
                <section className="hero__third" id="projects">
                <h2 className="hero__projects-title" style={{fontSize: fontIncreased ? 'var(--title-increased)': 'var(--title-default)'}}>Latest projects</h2>
                        <div className="hero__projects">
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Mindbox<sup className="hero__project-item-status green">done</sup></h4>
                                <p>ToDo App</p>
                                <ul>
                                    <li>NextJS</li>
                                    <li>React Hooks</li>
                                    <li>Vitest</li>
                                </ul>
                                <a href="https://github.com/ste1v0/mindbox-todo" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>NextJS App<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Playground</p>
                                <ul>
                                    <li>SSR</li>
                                    <li>Caching</li>
                                    <li>API endpoints</li>
                                </ul>
                                <a href="#" target="_blank" rel="noreferrer">→ TBD</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Helldivers 2<sup className="hero__project-item-status green">done</sup></h4>
                                <p>In-game activities status</p>
                                <ul>
                                    <li>Material UI</li>
                                    <li>TypeScript</li>
                                </ul>
                                <a href="https://github.com/ste1v0/helldivers2-status" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>VK Market Task<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Shopping cart</p>
                                <ul>
                                    <li>MobX</li>
                                    <li>Material UI</li>
                                    <li>TypeScript</li>
                                </ul>
                                <a href="https://github.com/ste1v0/vk-market" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Valantis Frontend Task<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Products catalog</p>
                                <ul>
                                    <li>Filters</li>
                                    <li>Pagination</li>
                                    <li>TypeScript</li>
                                </ul>
                                <a href="https://github.com/ste1v0/valantis-frontend-task" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>QSOFT Frontend Task<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Adaptive CSS page</p>
                                <ul>
                                    <li>Media queries</li>
                                    <li>BEM</li>
                                </ul>
                                <a href="https://github.com/ste1v0/QSOFT-Frontend-Task" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Personal<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Sandbox & playground</p>
                                <ul>
                                    <li>Mode/font changer</li>
                                    <li>CSS Animations</li>
                                    <li>Skeleton</li>
                                    <li>Custom components</li>
                                </ul>
                                <a href="https://github.com/ste1v0/personal" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>VK Frontend Challenge<sup className="hero__project-item-status green">done</sup></h4>
                                <p>Infinite cats feed</p>
                                <ul>
                                    <li>Favorites</li>
                                    <li>Lazyloading</li>
                                    <li>Loader</li>
                                </ul>
                                <a href="https://github.com/ste1v0/frontend-challenge" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Boxd<sup className="hero__project-item-status blue">on hold</sup></h4>
                                <p>Games database including most popular titles</p>
                                <ul>
                                    <li>Hotkeys</li>
                                    <li>Loader</li>
                                </ul>
                                <a href="https://github.com/ste1v0/boxd" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                            <div className="hero__project-item" style={lightMode ? lightTheme : darkTheme}>
                                <h4>Gaming News<sup className="hero__project-item-status green">done</sup></h4>
                                <p>All things related to gaming gathered from 4 different RSS feeds</p>
                                <ul>
                                    <li>Mode/font changer</li>
                                    <li>Mobile toggler</li>
                                </ul>
                                <a href="https://github.com/ste1v0/gaming-news" target="_blank" rel="noreferrer">→ GitHub</a>
                            </div>
                        </div>   
                </section>
                <section className="hero__fourth" id="contacts">
                <h2 className="hero__contacts-title" style={{fontSize: fontIncreased ? 'var(--title-increased)': 'var(--title-default)'}}>Contacts</h2>
                        <div className="hero__contacts">
                            <div style={lightMode ? lightTheme : darkTheme} className="hero__contact-item scale">
                                <a href="https://ste1v0.dev/cv_serov_stepan.pdf" target="_blank" rel="noreferrer">
                                    <Icon icon="vscode-icons:file-type-pdf2" width="96" height="96" />
                                </a>
                            </div>
                            <div style={lightMode ? lightTheme : darkTheme} className="hero__contact-item scale">
                                <a href="https://t.me/ste1v0" target="_blank" rel="noreferrer">
                                    <Icon icon="logos:telegram" width="96" height="96" />
                                </a>
                            </div>
                        </div>   
                </section>
            </main>
        </>
    )
}