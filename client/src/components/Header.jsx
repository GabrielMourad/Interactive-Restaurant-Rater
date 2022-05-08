import React, { useContext } from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';

export const Header = () => {
  return (
    <div className = "fw-bolder">
      
        

        <h1  className = "font-weight-light display-1 text-center pt-5 mb-3">
           Restaurant Rater</h1>
           
        
    </div>
  )
}

export default Header;