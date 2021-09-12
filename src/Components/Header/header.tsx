import React from 'react'
import WeatherHeader from '../WeatherHeader/weather-header';
import "./header-styles.css";

const Header = () => {
    
    return (
        <div className="header">
            <h1 className="header-banner">Company Name</h1>
            <h2 className="header-banner">Username</h2>
            {/* <WeatherHeader />             */}
        </div>
    )
}


export default Header
