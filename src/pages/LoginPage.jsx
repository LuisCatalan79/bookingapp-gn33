import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/LoginPaje.css'
import { useNavigate } from "react-router-dom"

const LoginPage = () => {

  window.location.replace

  const {handleSubmit,reset,register} = useForm()

  const navigate = useNavigate()

  const { loginUser, logout } = useAuth()

  const submit = data =>{

    loginUser(data)

    reset({
      email:'',
      password:''
    })

  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    logout();  
    navigate('/login')    

  }

  if(localStorage.getItem('token')){
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="logout">
        <h2 className="logout__title" >Welcome {firstName + ' ' + lastName}</h2>
        <button onClick={handleLogout} className="logout__btn"><a href="/">Logout</a></button>
      </div>
    )
  }else{

    
    return (
      <div className="loginPage">
      <header className="loginPage__header">
        <img className="loginPage__img" src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" alt="" />

      </header>

    <form onSubmit={handleSubmit(submit)} className="login">
      <h2 className="loginPage__title" >USER</h2>
        <div className="loginPage__field" >
          <label className="loginPage__label" >
            <span>Email</span>
          </label>
            <input {...register('email')} type="email" className="loginPage__input" />
        </div>
        <div className="loginPage__field" >
          <label className="loginPage__label" >
            <span>Password</span>
          </label>
            <input {...register('password')} type="password" className="loginPage__input" />
        </div>

        <button className="loginPage__btn">Submit</button>
      </form>
    </div>
  )
}
}

export default LoginPage