import React from 'react'
import { AddRestaurant } from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import ReactSwitch from 'react-switch'

export const Home = () => {
  return <div className = "container">
    <Header />
    <AddRestaurant  />
    <RestaurantList />
  </div>
  
}

export default Home