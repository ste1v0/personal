import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

	const [fontIncreased, setFontIncreased] = useState(false)
	const [lightMode, setLightMode] = useState(false)

	return (
		<div 
			style={
				{fontSize: fontIncreased ? 'var(--increased)': 'var(--default)',
				color: lightMode ? 'black' : 'white'
				}} className={lightMode ? "bg--light" : "bg--dark"}>
			<Header lightMode={lightMode} setLightMode={setLightMode} fontIncreased={fontIncreased} setFontIncreased={setFontIncreased} />
			<Hero lightMode={lightMode} />
			<Footer lightMode={lightMode} />
		</div>
	)
}

export default App
