import React, {useContext, useState} from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import LoginAndRegisterBanner from '../components/Banners/LoginAndRegisterBanner';



const Login = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const {email, password} = inputs
  const {userName} = useContext(RestaurantsContext)
  
  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async(e) => {
       e.preventDefault()
      try {

       const body = {email, password}
       const response = await fetch("http://localhost:3006/auth/login",{
         method: "POST",
         headers: {"Content-Type" : "application/json"},
         body: JSON.stringify(body)
       })

       const parseResponse = await response.json();

        if(parseResponse.token){

           localStorage.setItem("token", parseResponse.token);
           setAuth(true)
           toast.success ("Login Successfully\n")
        }else{
           setAuth(false)
           toast.error(parseResponse)

        }


      } catch (error) {
       console.error(error.message)
     }
  }


  return (
  
  <div>
    <LoginAndRegisterBanner/>
      <div className = "login-box ">
        <h1 className = "mt-5 font-weight-bold">Login</h1> 
        <form onSubmit = {onSubmitForm}>
            <input className = "form-control my-3" type="email" name="email" placeholder='email' value = {email} onChange = {e => onChange(e)}/>
            <input className = "form-control my-3" type="password" name="password" placeholder='password' value = {password} onChange = {e => onChange(e)} />
            <button className = "btn btn-primary btn-block">Submit</button>
        </form>
        <Link to='/register'>Don't have an account? Click here</Link>
      </div>
  </div>
 
 )
}
export default Login 