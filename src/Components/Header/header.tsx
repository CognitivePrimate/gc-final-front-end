import React from 'react'
import { Link } from 'react-router-dom';
import WeatherHeader from '../WeatherHeader/weather-header';
import "./header-styles.css";

const Header = () => {
    
    return (
        <div className="header">
            <h1 className="header-banner">Company Name</h1>
            <section>
            <h2 className="header-banner">Username</h2>
            <Link to="/"><button>Logout</button></Link>
            </section>
            {/* <WeatherHeader />             */}
        </div>
    )
}


export default Header
