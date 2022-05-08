import React, { useContext } from 'react'
import { RestaurantsContext } from '../../context/RestaurantsContext'
import { toast } from 'react-toastify';
import App from '../../App';
function BannerHome({setAuth}) {
    const {userName} = useContext(RestaurantsContext);

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setAuth(false)
        toast.success("ඞ Logged out Successfully, Have a nice day ඞ")
        
    }
  return (
    <div className = "banner">
        <button onClick = {e => logout(e)}className = "pt-3 float-right btn btn-primary">Home</button>

         <div className = "float-left">
             <span className = "pl-2 pt-2 float-left font-weight-bold">Interactive Restaurant Rater</span>
           <br/><h6 className = "mb-3 pt-1 pl-2 float-left font-weight-bold">{userName}</h6>
        </div>
    
    </div>
  )
}

export default BannerHome