import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

	const [fontIncreased, setFontIncreased] = useState(false)
	const [lightMode, setLightMode] = useState(false)
	
	const [loading, setLoading] = useState(true)
	const [fact, setFact] = useState([])

	useEffect(function() {
		fetch('https://dog-api.kinduff.com/api/facts')
			.then(res => {
				if (!res.ok) {
					throw new Error('Something is wrong with the API')
				}
				return res.json()
			})
			.then(data => {
				setFact(data.facts[0])
				setLoading(false)
			})
	}, [])

	return (
		<div 
			style={
				{fontSize: fontIncreased ? 'var(--increased)': 'var(--default)',
				color: lightMode ? 'black' : 'white'
				}} className={lightMode ? "bg--light" : "bg--dark"}>
			<Header lightMode={lightMode} setLightMode={setLightMode} fontIncreased={fontIncreased} setFontIncreased={setFontIncreased} />
			<Hero lightMode={lightMode} fontIncreased={fontIncreased} />
			<Footer lightMode={lightMode} fact={fact}/>
		</div>
	)
}

export default App
