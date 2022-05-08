import React, { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { RestaurantsContext, RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import Login from './routes/Login';
import Register from './routes/Register';
import ReactSwitch from "react-switch";
import "./components/styles.css"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import BannerHome from './components/Banners/BannerHome';

export const ThemeContext = createContext(null); 
toast.configure();

const App = ()=>{
   
    const [theme, setTheme] = useState("light");
    const [mode, setMode] = useState("Light");
    

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        setMode((curr => (theme === "light" ? "Dark" : "Light")))

        if(theme === "light"){
            document.documentElement.style.setProperty('--bg-color',' rgb(59, 32, 34)')
        }else{
            document.documentElement.style.setProperty('--bg-color',' rgb(224, 99, 109)')
            
        }

    };
    console.log(theme)
    //useState(true) == LOGIN 
    //useState(false) == HOME
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    }

    async function isAuth(){
        try {
            
            const response = await fetch("http://localhost:3006/auth/verify", {
                method: "GET",
                headers: {token : localStorage.token}
            })

            const parseResponse = await response.json();

            parseResponse === true ? setIsAuthenticated(true): setIsAuthenticated(false)

        } catch (error) {
            
        }
    }
    

    //DELETE TO ADD TRUE OR FALSE

    // useEffect(() => {
    //     isAuth()
    // })

    useEffect(() => {
        isAuth()
    })
    
    return(
    

    <ThemeContext.Provider value ={{theme, setTheme, mode, setMode}}>
        <RestaurantsContextProvider>
        <div className = "container" id ={theme}>
            <Router>
                <Routes>
                 <Route  path = "/" element = {<Navigate to="/login" />}/>
                 <Route path = "/login" element = {!isAuthenticated ? (<Login setAuth = {setAuth}/>) : (<Navigate to="/home" />)}/>
                 <Route  path = "/register" element = {!isAuthenticated ? (<Register setAuth = {setAuth}/>) : (<Navigate to="/home" />)}/>
                 <Route  path = "/home" element = {isAuthenticated ? ( <Home setAuth = {setAuth}/>) : (<Navigate to="/login" />)}/>
                 <Route  path = "/restaurants/:id/update" element = {<UpdatePage/>}/>
                 <Route  path = "/restaurants/:id" element = {<RestaurantDetailPage/>}/>
                </Routes>
            </Router>

            <div>
            <span>{mode} Mode</span>
            <ReactSwitch  onChange = {toggleTheme} checked ={theme === "dark"}/>
            
            </div>
        
        </div>
        
        </RestaurantsContextProvider>
        </ThemeContext.Provider>
        
    )
}

export default App; 