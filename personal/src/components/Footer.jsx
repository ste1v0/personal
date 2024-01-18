import Placeholder from 'react-bootstrap/Placeholder';

export default function Footer({lightMode, fact}) {
    return (
        <footer>
            <p className="footer__title capitalize">Random dog fact</p>
            {fact.length > 0 
            ? <div className="footer__fact"> {fact}</div> 
            : <><Placeholder animation="glow">
                <Placeholder style={{width: '30vw'}} />{' '}
            </Placeholder>
            <Placeholder animation="glow">
                <Placeholder style={{width: '30vw'}} />{' '}
            </Placeholder>
            </>}
            <div className={lightMode ? "footer__icons footer__github--dark" : "footer__icons footer__github--light"}></div>
        </footer>
    )
}