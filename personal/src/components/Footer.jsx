import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

import Placeholder from 'react-bootstrap/Placeholder';

export default function Footer({lightMode}) {
    const [fact, setFact] = useState([])
    const [reload, setReload] = useState(false)

	useEffect(function() {
        setFact([])
		fetch('https://dog-api.kinduff.com/api/facts')
			.then(res => {
				if (!res.ok) {
					throw new Error('Something is wrong with the API')
				}
				return res.json()
			})
			.then(data => {
				setFact(data.facts[0])
			})
	}, [reload])

    return (
        <footer className="fade-in-footer">
            <div className="footer__title-container">
                <Icon icon="fluent-emoji:dog-face" className="scale" width="32" height="32" />
                <div className="footer__title capitalize">Random dog fact</div>
                <span onClick={() => setReload(prevValue => !prevValue)} className="material-symbols-outlined pointer hover rotate">refresh</span>
            </div>
            {fact.length > 0 
            ? <div style={{border: lightMode ? '1px dashed black' : '1px dashed white'}} className="footer__fact"> {fact}</div> 
            : <><Placeholder animation="glow">
                <Placeholder style={{width: '30vw'}} />{' '}
            </Placeholder>
            <Placeholder animation="glow">
                <Placeholder style={{width: '30vw', marginBottom: '2vh'}} />{' '}
            </Placeholder>
            </>}
            <div className={lightMode ? "footer__icons footer__github--dark pointer" : "footer__icons footer__github--light pointer"}></div>
        </footer>
    )
}