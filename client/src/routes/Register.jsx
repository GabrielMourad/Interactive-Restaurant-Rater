import React, {useState} from 'react'
import '../components/styles.css'
import { useNavigate } from 'react-router-dom';
const Register = ({setAuth}) => {
  let nav = useNavigate();
  const[inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  })

  
  const {email, password, name} = inputs

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault() //prevents refreshing

    try {
    
    const body = {email, password, name}

    const response = await fetch("http://localhost:3006/auth/register", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(body)
    })

    const parseResponse = await response.json()


    localStorage.setItem("token", parseResponse.token); 
    setAuth(true)
    
      
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
  <div>
    <h1 className = "text-center my-5">Register</h1>
    <form onSubmit = {onSubmitForm}>
      <input className = "form-control my-3" type="email" name = "email" placeholder = "email" value = {email} onChange = {e => onChange(e)} />
      <input className = "form-control my-3" type="password" name = "password" placeholder = "password" value = {password} onChange = {e => onChange(e)} />
      <input className = "form-control my-3" type="text" name = "name" placeholder = "name" value = {name} onChange = {e => onChange(e)}/>
      <button className = "btn btn-primary btn-block">Submit</button>
    </form>
  </div>
 
 )
}
export default Register