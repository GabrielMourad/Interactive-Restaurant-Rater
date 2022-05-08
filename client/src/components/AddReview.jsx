import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { toast } from 'react-toastify'
export const AddReview = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [reviewText,setReviewText] = useState("")
    const [rating,setRating] = useState("")
    const {userName, setUserName, setTheme, theme, setMode, mode} = useContext(RestaurantsContext)
    const [name, setName] = useState(userName);

    const handleSubmitReview = async(e) => {
            e.preventDefault();
           
           try{
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name : userName,
                review : reviewText,
                rating,
            })


            window.location.reload()
            toast.success ("Review Submitted\n Hopefully nobody hates you now")

           }catch(err){

           }
           
           
    }


    useEffect(() =>{
        const fetchData = async() => {
            try {
                const response = await fetch("http://localhost:3006/dashboard/",{
                method: "GET",
                headers : {token: localStorage.token}

          })  

              const parseResponse = await response.json();
              setUserName(parseResponse.user_name)
                
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
  
    }, [])

 


  return (

    <div>
     <div className = "mb-2">
        <form action="">
            <div className="form-row">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input value = {name} onChange = {e => setName(e.target.value)} id = "name" placeholder = {userName} type="text" className="form-control"  />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="rating">Rating</label>
                    <select value = {rating} onChange = {e => setRating(e.target.value)} id="rating" className="custom-select">
                        <option value="disabled">Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea value = {reviewText} onChange = {(e) => setReviewText(e.target.value)} id="Review" className = "form-control"></textarea>
            </div>
            <button type ="submit" onClick={handleSubmitReview} className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
</div>
  )
}
