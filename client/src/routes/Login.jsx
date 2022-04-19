import React from 'react'
import '../components/styles.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e, id) => {
    e.stopPropagation();
    navigate(`/home`)
}

const handleRegister = (e, id) => {
  e.stopPropagation();
  navigate(`/register`)
}

  return (
  
  <div className = "login-page">

    
    <h1 className = "login-header">Login</h1>

    <div>
      <form action="Login.jsx" method = "GET">
   
    <div className = "login-piece">
      <label>Username</label>
      <input type="text" placeholder='Enter Username' />
    </div>
   
    <div>
      <label className = "login-piece">Password</label>
      <input type="text" placeholder='Enter Password' />
      
    </div>
   
    <div className = "login-piece">
    <button type = "submit" onClick={handleLogin} className = "btn btn-primary">Submit</button>
    </div>
      </form>
   
  <div className = "register-portion">
    <p>Dont have a login?</p>
    <span>Click Here to register</span>
    <div>
      <button onClick = {handleRegister}>Register</button>
    </div>
  </div>
    </div>
 
  </div>
 
 )
}
export default Login