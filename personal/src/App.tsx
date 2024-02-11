import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

	const [fontIncreased, setFontIncreased] = useState(localStorage.getItem('font') === 'true')
	const [lightMode, setLightMode] = useState(localStorage.getItem('mode') === 'true')

	return (
		<BrowserRouter>
			<div 
				style={
					{fontSize: fontIncreased ? 'var(--increased)': 'var(--default)',
					color: lightMode ? 'black' : 'white'
					}} className={lightMode ? "bg--light" : "bg--dark"}>
				<Header lightMode={lightMode} setLightMode={setLightMode} fontIncreased={fontIncreased} setFontIncreased={setFontIncreased} />
				<Hero lightMode={lightMode} fontIncreased={fontIncreased} />
				<Footer lightMode={lightMode} />
			</div>
		</BrowserRouter>
	)
}

export default App
