import { useEffect, useState, useContext, useMemo } from "react";
import { GeoLocation } from "../../Model/Interfaces"
import {GeoLocationContext} from "../../ContextProviders/WeatherLocationProvider"
import "./weather-header-styles.css";
import axios, { AxiosResponse } from "axios";
import { fetchAllWeather } from "../../services";

// import weather API
// import { fetchAllWeather } from "../../services";


const WeatherHeader = () => {
    const [weather, setWeather] = useState<AxiosResponse>();
    const [temp, setTemp] = useState(0);
  
    const {GeoLocation, updateLocation} = useContext(GeoLocationContext);

    // const weatherSetter = (res: any) => {
    //     setWeather(res);
    //     console.log("weather from functino", weather);
    //     if (weather === undefined){
    //         console.log("secondAttempt", res);
    //         setWeather(res)
    //     }
    // } 

    const weatherLog = () => {
        console.log("weather", weather);
    }
    // if timeout/error
    const error = (err: any) => {
        console.warn(`ERROR:(${err.code}): ${err.message}`)
    }
   
    // use callback function, in setTemp  setTemp(()=>res.temp)
    
    // to only call location access once
    useEffect(() => {
        // if location call is successful, do this
        const success = (pos: any) => {
            let crd = pos.coords;
            console.log(`lat: ${crd.latitude}`);
            console.log(`lon: ${crd.longitude}`);
            fetchAllWeather(crd.latitude, crd.longitude).then((res) => {
                console.log("weatherRes", res);
                // setTemp(res.temp);
                // console.log(temp)
                setWeather(()=> res);              
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
            // fetchAllWeather();
        }

    }, []);
    

    return (
        <div className="weather-header">
            <section className="weather-header-sections">
                <span>City</span>
                <span>Time</span>
                <span>Temperature</span>
            </section>
            <section className="weather-header-sections">
                <span className="lat-lon-span">{}</span>
                <span className="lat-lon-span">{}</span>
            </section>
            
        </div>
    );
}


export default WeatherHeader;