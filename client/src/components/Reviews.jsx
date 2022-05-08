import React, { useContext } from "react";
import {StarRating} from "./StarRating";
import { RestaurantsContext } from "../context/RestaurantsContext";

export const Reviews = ({ reviews }) => {
  const  {userName} = useContext(RestaurantsContext)
  return (
    <div className="row row-cols-3 mb-2 ">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card text-white bg-dark mb-3 mr-4"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Reviews;