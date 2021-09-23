import { useEffect, useState, useContext } from "react";
import { GeoLocation } from "../../Model/Interfaces"
import {GeoLocationContext} from "../../ContextProviders/WeatherLocationProvider"
import "./weather-header-styles.css";
import axios from "axios";

// import weather API
// import { fetchAllWeather } from "../../services";


const WeatherHeader = () => {
    const [weather, setWeather] = useState([])
  
    const {GeoLocation, updateLocation} = useContext(GeoLocationContext);

    // TEST
    // gets API key from .env file
    const key: string | undefined = process.env.REACT_APP_WEATHER_API;  
    let APILon
    function fetchAllWeather(location: GeoLocation){
        console.log("services location", location);
        console.log("services location.lat", location.lat);
        const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${key}`;
        console.log("lat-services", location.lat);
        return axios.get(weatherAPIURL).then((response) => {
            console.log("services response.data", response.data)
            return response.data;
        });
    }

    // END TEST

    const updateLocationTwo = (location: GeoLocation) => {
        // updateLocation({lat: location.lat, lon: location.lon});
        updateLocation(location);
    }

    // FIND LOCATION FUNCTIONS <---- FIX ANY TYPE
    const success = (pos: any) => {
        let crd = pos.coords;
        console.log(`lat: ${crd.latitude}`);
        console.log(`lon: ${crd.longitude}`);
        updateLocationTwo({lon: crd.latitude, lat: crd.longitude})
        fetchAllWeather(GeoLocation);
    }
    
    // if timeout/error
    const error = (err: any) => {
        console.warn(`ERROR:(${err.code}): ${err.message}`)
    }
    // set timeout for error message, enable accuracy, and no reset
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    // to only call location access once
    useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error, options);
            // fetchAllWeather(GeoLocation);
        }
    }, []);
    

    // console.log(fetchAllWeather());




    return (
        <div className="weather-header">
            <section className="weather-header-sections">
                <span>City</span>
                <span>Time</span>
                <span>Temperature</span>
            </section>
            <section className="weather-header-sections">
                <span className="lat-lon-span">{}</span>
                <span className="lat-lon-span">Lon: {GeoLocation.lon}</span>
            </section>
            
        </div>
    );
}


export default WeatherHeader;