import React, { useContext, useEffect, useState } from 'react'
import "../components/styles.css"
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RestaurantsContext } from '../context/RestaurantsContext'
import { ThemeContext } from '../App'
import { useNavigate } from 'react-router-dom'



const Home = ({setAuth}) => { 

    const {userName, setUserName} = useContext(RestaurantsContext);
    const {setMode, setTheme} = useContext(ThemeContext)
    const nav = useNavigate();
    const coupons = [
        "Coupon1",
        "Coupon2",
        "Coupon3",
        "Coupon4",
        "Coupon5",

        
    ]

  
    
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

    const handleGames = e => {
        e.preventDefault();
        nav("/fun")
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
                    <br/><h6 className = "pt-1 pl-2 float-left font-weight-bold">User: {userName}</h6>
                </div>
           </div>
         
            <Header/>
            <RestaurantList/>
        
            
        </div>
    )
}

export default Home