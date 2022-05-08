import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { RestaurantsContext } from '../../context/RestaurantsContext'
import { toast } from 'react-toastify'

function Banner({setAuth}) {

    const nav = useNavigate()
    const {userName} = useContext(RestaurantsContext)

    const handleHomeBtn = (e) => {
        e.preventDefault()
        nav("/home")
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        setAuth(false)
        toast.success("ඞ Logged out Successfully, Have a nice day ඞ")
        
    }


    return (
    <div className = "banner">
        <button onClick = {e => handleHomeBtn(e)}className = "mr-3 mt-3 float-right btn btn-primary">Home</button>

         <div className = "float-left">
             <span className = "pl-2 pt-2 float-left font-weight-bold">Interactive Restaurant Rater</span>
           <br/><h6 className = "mt-2 md-1 pt-1 pl-2 float-left font-weight-bold">{userName}</h6>
        </div>
    
    </div>
  )
}

export default Banner