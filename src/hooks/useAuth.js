import axios from "axios"


const useAuth = data => {
  //Register
  const createNewUser = (data) => {
    const url ='http://localhost:8080/users'
    axios.post(url, data)
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))
  }

  //Login
  const loginUser = (data) => {
    const url='http://localhost:8080/users/login'
    axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
        })
        .catch(err=>console.log(err))
  }
  return { createNewUser, loginUser }
}

export default useAuth