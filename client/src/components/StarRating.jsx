import React from 'react'

export const StarRating = ({rating}) => {
 
  const stars = [];
  for(let i = 1; i<=5; i++){
    if(i <= rating){
      stars.push(<i key={i} className="fas fa-star text-warning"></i>) //full star
    }else if(i === Math.ceil(rating) && !Number.isInteger(rating)){
      stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>) //half star
    }else{
      stars.push(<i key={i} className="far fa-star text-warning"></i>) //empty star
    }
  }
  return (
    <>{stars}</>
    
  )
}

export default StarRating;