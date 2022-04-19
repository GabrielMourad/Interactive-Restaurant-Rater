import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';
import Login from './routes/Login';
import Register from './routes/Register';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null); 

const App = ()=>{
   
    const [theme, setTheme] = useState("light");
    const [mode, setMode] = useState("Dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        setMode((curr => (theme === "light" ? "Dark" : "Light")))

        if(theme === "light"){
            document.documentElement.style.setProperty('--bg-color',' #333')
        }else{
            document.documentElement.style.setProperty('--bg-color',' white')
            
        }

    };
    console.log(theme)
    
 

    return(

    <ThemeContext.Provider value ={{theme, setTheme}}>
        <RestaurantsContextProvider>
        <div className = "container" id ={theme}>
            <Router>
                <Routes>
                 <Route  path = "/" element = {<Login/>}/>
                 <Route  path = "/register" element = {<Register/>}/>
                 <Route  path = "/home" element = {<Home/>}/>
                 <Route  path = "/restaurants/:id/update" element = {<UpdatePage/>}/>
                 <Route  path = "/restaurants/:id" element = {<RestaurantDetailPage/>}/>
                </Routes>
            </Router>
            <span>{mode} Mode</span>
            
            <ReactSwitch id = "btn_modes" onChange = {toggleTheme} checked ={theme === "dark"}/>
        </div>
        
        </RestaurantsContextProvider>
        </ThemeContext.Provider>
    )
}

export default App; 