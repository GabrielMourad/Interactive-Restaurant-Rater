import React from 'react'
import '../components/styles.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const handleLogin = (e, id) => {
    e.stopPropagation();
    navigate(`/`)


}
  return (
  <div className = "login-page">
    
    <h1 className = "login-header">Register</h1>

    <div>
      <form action="Login.jsx" method = "GET">
   
    <div className = "login-piece">
      <label>Name</label>
      <input type="text" placeholder='Enter Username' />
    </div>
    
    <div className = "login-piece">
      <label>Email</label>
      <input type="text" placeholder='Enter Email' />
    </div>
   
    <div>
      <label className = "login-piece">Password</label>
      <input type="text" placeholder='Enter Password' />
      
    </div>

    <div>
      <label className = "login-piece">Confirm Password</label>
      <input type="text" placeholder='Enter Password' />
      
    </div>
   
    <div>
    <button type = "submit" onClick={handleLogin} className = "btn btn-primary">Submit</button>
    </div>
      </form>
    </div>
  </div>
 
 )
}
export default Register