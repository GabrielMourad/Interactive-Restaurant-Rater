import React, { Fragment, useState, useEffect } from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import Wheel from "../components/Wheel";
import { toast } from "react-toastify";
const Home = ({ setAuth }) => {
  const [name, setName] = useState("");
  async function getName() {
    try {
      const response = await fetch("http://localhost:3006/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setName(parseResponse.user_name);
    } catch (err) {
      console.log(err.message);
    }
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("Logged out successfully!");
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <div>
      <h1>Welcome "{name}"</h1>
      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        Logout
      </button>
      <Header />
      <AddRestaurant />
      <RestaurantList />
      <Wheel />
    </div>
  );
};

export default Home;
