import React from 'react'
import { StarRating } from './StarRating'

export const Reviews = () => {
  return (
    <div className ="row row-col-3 mb-2">
        <div className="card text-white bg-primary mb-3 mr-4 " style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Joan</span>
                <span><StarRating rating = {3}/></span>
                                
            </div>
            <div className = 'card-body'>
                <p className = 'card-text'>Dang bruv that was one of the best</p>
            </div>
        </div>

        
    </div>
  )
}
