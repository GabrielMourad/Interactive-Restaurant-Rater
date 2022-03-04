import React, {useContext} from 'react'
import { useEffect } from 'react';
import { useParams} from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { AddReview } from '../components/AddReview';
import { Reviews } from '../components/Reviews';
import { StarRating } from '../components/StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
  
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)
  
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
        setSelectedRestaurant(response.data.data)
      
      } catch (error) {
        console.log(error);
      }

    }
    fetchData();
  }, [])
  return (
    <div>Restaurant: {selectedRestaurant && (
      <>
      <div className="mt-3">
        <Reviews reviews ={selectedRestaurant}/>
      </div>
      <AddReview/>
      </>
    )}</div>
  )
}

export default RestaurantDetailPage