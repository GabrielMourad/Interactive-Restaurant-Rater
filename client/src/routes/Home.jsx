import React, { useContext, useEffect, useState } from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RestaurantsContext } from '../context/RestaurantsContext'
import { ThemeContext } from '../App'


const Home = ({setAuth}) => { 

    const {userName, setUserName} = useContext(RestaurantsContext);
    const {theme, mode} = useContext(ThemeContext)

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
    }, [])

    return (
        <div>
            <Header/>
            <h1>Name: {userName}</h1>
            <h1>Mode: {mode}</h1>
            <AddRestaurant/>
            <RestaurantList/>
            <button onClick ={(e) => logout(e)}>Log Out</button>
        </div>
    )
}

export default Home