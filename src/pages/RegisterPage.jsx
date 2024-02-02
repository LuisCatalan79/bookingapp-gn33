import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const {handleSubmit, reset, register} = useForm()

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset({
      fristName:'',
      lastName:'',
      email:'',
      password:'',
      gender:'other'
    })
  }

  return (
    <div className="register">
      <h2 className="register__title">Register</h2>
      <form onSubmit={handleSubmit(submit)} className="form-register">
        <div className="form-register__field" >
          <label className="form-register__lable" >
            <span>First Name: </span>
          </label>
            <input {...register('firstName')} type="text" className="form-register__input" />
        </div>
        <div className="form-register__field" >
          <label className="form-register__lable" >
            <span>Last Name: </span>
          </label>
            <input {...register('lastName')} type="text" className="form-register__input" />
        </div>
        <div className="form-register__field" >
          <label className="form-register__lable" >
            <span>Email: </span>
          </label>
            <input {...register('email')} type="email" className="form-register__input" />
        </div>
        <div className="form-register__field" >
          <label className="form-register__lable" >
            <span>Password: </span>
          </label>
            <input {...register('password')} type="password" className="form-register__input" />
        </div>
        <div className="form-register__field" >
          <label className="form-register__lable">
            <span>Gender: </span>
          </label>
            <select {...register('gender')} className="form-register__select" >
              <option value="male" className="form-register__option" >Male</option>
              <option value="female" className="form-register__option" >Female</option>
              <option value="other" className="form-register__option" >Other</option>
            </select>
        </div>
          
        <button className="form-register__btn">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage