import { Link } from "react-router-dom"
import './style/HeaderShared.css'

const HeaderShared = () => {
  return (
    <header className="header">
        <h1 className="header__logo"><a href="/">Booking <span className="header__app">App</span> </a></h1>

        <nav className="header__nav">
            <ul className="header__list">
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared