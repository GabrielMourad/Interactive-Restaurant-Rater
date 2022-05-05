import React, { useContext, useEffect, useState } from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RestaurantsContext } from '../context/RestaurantsContext'
import { ThemeContext } from '../App'
import Wheel from '../components/Wheel'



const Home = ({setAuth}) => { 

    const {userName, setUserName} = useContext(RestaurantsContext);
    const {theme, mode} = useContext(ThemeContext)
    const {coupon, setCoupon} = useState();

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
        setAuth(false)
        toast.success("ඞ Logged out Successfully, Have a nice day ඞ")
        
    }

    useEffect(() => {
        getProfile();
        const a = Math.floor(Math.random() * (coupons.length-1));
        console.log(coupons[a])
        
    
        
    }, [])
    const a = Math.floor(Math.random() * (coupons.length-1));

    const webCoupon = coupons[a]

    return (
        <div>
            <button className = "btn btn-danger float-left" onClick ={(e) => logout(e)}>Log Out</button>
            <Header/>
            <RestaurantList/>
        
            
        </div>
    )
}

export default Home