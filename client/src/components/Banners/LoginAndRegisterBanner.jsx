import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginAndRegisterBanner() {


    const nav = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        nav("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()
        nav("/register")
    }




    return (
    <div className = "banner">
        <button onClick = {e => handleRegister(e)}className = " mr-2 mt-2 float-right btn btn-primary" >Register</button>
        <button onClick = {e => handleLogin(e)}className = "mr-2 mt-2 float-right btn btn-primary">Login</button>


         <div className = "float-left">
             <span className = "pl-2 pt-2 float-left font-weight-bold">Interactive Restaurant Rater</span>
        </div>
    
    </div>
  )
}

export default LoginAndRegisterBanner