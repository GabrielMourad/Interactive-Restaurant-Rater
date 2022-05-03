import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("Light");


  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        userName,
        setUserName,
        theme,
        mode,
        setTheme,
        setMode,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};