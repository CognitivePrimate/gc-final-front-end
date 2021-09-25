import { useEffect, useState, useContext, useMemo } from "react";
import { GeoLocation } from "../../Model/Interfaces"
import {GeoLocationContext} from "../../ContextProviders/WeatherLocationProvider"
import "./weather-header-styles.css";
import axios, { AxiosResponse } from "axios";
import { fetchAllWeather } from "../../services";

// import weather API
// import { fetchAllWeather } from "../../services";


const WeatherHeader = () => {
    const [temp, setTemp] = useState([]);
    // sets icon code to be used in url for weather image
    const [icon, setIcon] = useState();
    const [timeZone, setTimeZone] = useState<string>();
    const [alert, setAlert] = useState<string>();
    const [windSpeed, setWindSpeed] = useState();
    const [windGusts, setWindGusts] = useState();
    
    // in the event of no alerts, won't crash app. probably a good thing. = 
    const alertSetWorkAround = (res: any) => {
        res.alerts ? setAlert(res.alerts) : setAlert("None");
    }

    
    // if timeout/error
    const error = (err: any) => {
        console.warn(`ERROR:(${err.code}): ${err.message}`)
    }
    
    // to only call location access once
    useEffect(() => {
        // if location call is successful, do this
        const success = (pos: any) => {
            let crd = pos.coords;
            console.log(`lat: ${crd.latitude}`);
            console.log(`lon: ${crd.longitude}`);
            fetchAllWeather(crd.latitude, crd.longitude).then((res) => {
                console.log("weatherRes", res);
                setTemp(res.current.temp.toFixed(0));
                setIcon(res.current.weather[0].icon);
                // takes timezone from api, splits into array, and cuts first index. initially "country/city"
                setTimeZone(res.timezone.split("/").splice(1));
                // MAKE FUNCTIO TO SET ALERT?
                alertSetWorkAround(res);
                // setAlert(res.alerts[0].event || setAlert());
                setWindSpeed(res.current.wind_speed);
                setWindGusts(res.current.wind_gust);
                              
            })
        };

        // set timeout for error message, enable accuracy, and no reset bullshit 
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error, options);
        }

    }, []);
    

    return (
        <div className="weather-header">
            {/* <section className="weather-header-sections">
                <span>Location</span>
                <span>Time</span>
                <span>Temperature</span>
            </section> */}
            <section className="weather-info-sections">
                <span className="timeZoneSpan">{timeZone}</span>
                {alert === undefined &&  <span className="weatherHidden">Alerts: {alert}</span>}
                <span className="weatherHidden">Wind Speed: {windSpeed}-{windGusts}mph</span>
                <div id="tempIconContainer">
                    <img id="weatherIcon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
                    <span className="lat-lon-span">{temp} F</span>
                </div>
                
            </section>
            
        </div>
    );
}


export default WeatherHeader;