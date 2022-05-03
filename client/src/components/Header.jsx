import React, { useContext } from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';

export const Header = () => {
  const {userName} = useContext(RestaurantsContext)
  return (
    <div>
        <h2>{userName}</h2>

        <h1  className = "font-weight-light display-1 text-center">
           Restaurant Rater</h1>
        
    </div>
  )
}

export default Header;