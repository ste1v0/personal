export default function Footer({lightMode}) {
    return (
        <footer>
            <div className={lightMode ? "footer__icons footer__github--dark" : "footer__icons footer__github--light"}></div>
        </footer>
    )
}