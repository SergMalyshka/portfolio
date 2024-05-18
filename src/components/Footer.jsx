import style from './Footer.module.css'

function Footer() {
    return (
        <div className="footer"> 
        <nav className="navbar justify-content-center footer">
        <ul className="nav nav-underline">
            <li className="nav-item">
            <a href="mailto: SergMalyshka@gmail.com"><img className={style.github} src="\email.png"></img></a>
            </li>
            <li className="nav-item">
            <a href="https://github.com/SergMalyshka"><img className={style.github} src="\github.png"></img></a>
            </li>
        </ul>
        </nav>
    </div>
    )
}

export default Footer;