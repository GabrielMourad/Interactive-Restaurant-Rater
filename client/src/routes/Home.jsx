import React, { useContext, useEffect, useState } from 'react'
import "../components/styles.css"
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RestaurantsContext } from '../context/RestaurantsContext'
import { ThemeContext } from '../App'
import Wheel from '../components/Wheel'
import BannerHome from '../components/Banners/BannerHome'



const Home = ({setAuth}) => { 

    const {userName, setUserName} = useContext(RestaurantsContext);
    const {setMode, setTheme} = useContext(ThemeContext)
    const {coupon, setCoupon} = useState();

    const coupons = [
        "Coupon1",
        "Coupon2",
        "Coupon3",
        "Coupon4",
        "Coupon5",

        
    ]

    
    function eEgg(){
        document.documentElement.style.setProperty('--bg-color',' url(IMPORTANT.jpg')
    }
    
    function eEgg2(){
        document.documentElement.style.setProperty('--bg-color',' url(download.png)')
    }
    
    function secret(){
        document.documentElement.style.setProperty('--bg-color',' url(ee.jpg)')

    }

    function finishEEgg(){
        document.documentElement.style.setProperty('--bg-color',' rgb(224, 99, 109)')
        setTheme("light")
        setMode("Light")

    }
    
    async function getProfile(){
        try {
          const response = await fetch("http://localhost:3006/dashboard/",{
            method: "GET",
            headers : {token: localStorage.token}

          })  

          const parseResponse = await response.json();
          setUserName(parseResponse.user_name)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setAuth(false)
        toast.success("ඞ Logged out Successfully, Have a nice day ඞ")
        
    }

    const easterEgg = (e) => {
        setTimeout(eEgg, 1000)
        setTimeout(eEgg2, 2500)
        setTimeout(eEgg, 4000)
        setTimeout(eEgg2, 4100)
        setTimeout(eEgg, 4200)
        setTimeout(eEgg2, 4300)
        setTimeout(eEgg, 4400)
        setTimeout(eEgg2, 4500)
        setTimeout(eEgg, 4600)
        setTimeout(eEgg2, 4700)
        setTimeout(eEgg2, 4800)
        setTimeout(eEgg, 4900)
        setTimeout(secret, 5500)
        setTimeout(finishEEgg, 7200)
            
            
        }
    

    useEffect(() => {
        getProfile();
        const a = Math.floor(Math.random() * (coupons.length-1));
        console.log(coupons[a])
        
    
        
    }, [])
    const a = Math.floor(Math.random() * (coupons.length-1));

    const webCoupon = coupons[a]

    return (
        //Banner 
        <div>
            <div className = "banner">
               <button onClick = {e => logout(e)}className = "mt-2 mr-3 float-right btn btn-danger">Log Out</button>

                <div className = "float-left">
                    <span className = "pl-2 pt-2 float-left font-weight-bold">Interactive Restaurant Rater</span>
                    <br/><h6 className = "pt-1 pl-2 float-left font-weight-bold">{userName}</h6>
                </div>
           </div>
         
            <Header/>
            <RestaurantList/>
            <button onClick = {(e) => easterEgg(e)} className = "btn-hidden">Hi</button>
        
            
        </div>
    )
}

export default Home