import { Link, useNavigate } from "react-router-dom"
import './style/HeaderShared.css'
import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"

const HeaderShared = ({}) => {

  const [menu, setMenu] = useState(true)

  const { loginUser } = useAuth()
 
  const navigate = useNavigate()

  useEffect(() => {
    loginUser
  }, [navigate])
  

  const handlemenu = () => {
    setMenu(!menu)
  }

  return (
    <header className="header">
        <h1 className="header__logo"><Link to="/">Booking</Link> <span className="header__app">App</span> </h1>
          <div className="header__menu">
            <span className="material-symbols-outlined" onClick={handlemenu}>menu</span>
          </div>
          <nav className={`header__nav ${menu? 'open' : ''}`}>
            <ul className={`header__list `}>
              <li className="header__list__item"><Link to='/'>Home</Link></li>
              {
                loginUser&&<li className="header__list__item"><Link className={`${!loginUser ? 'dissapear' : ''}`} to='/reservations'>Reservations</Link></li>
              }
              {
               loginUser&&<li className="header__list__item"><Link to='/register'>Register</Link></li>
              }
              {
               loginUser? <li className="header__list__item"><Link to='/login'>Profile</Link></li>: <li li className="header__list__item"><Link to="/login">Login</Link></li>
              }
            </ul>
          </nav>
    </header>
  )
}



export default HeaderShared