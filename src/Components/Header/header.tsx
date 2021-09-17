import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextProviders/auth-context';
import WeatherHeader from '../WeatherHeader/weather-header';
import "./header-styles.css";

const Header = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <div className="header">
            <Link to="/HomeScreen"><h1 className="header-banner">Company Name</h1></Link> 
            <section>
            <h2 className="header-banner">{user?.displayName}</h2>
            <Link to="/"><button>Logout</button></Link>
            </section>
            {/* <WeatherHeader />             */}
        </div>
    )
}


export default Header
