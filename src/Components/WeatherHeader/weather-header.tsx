import { useEffect, useState, useContext } from "react";
import { GeoLocation } from "../../Model/Interfaces"
import {GeoLocationContext} from "../../ContextProviders/WeatherLocationProvider"
import "./weather-header-styles.css";
import axios, { AxiosResponse } from "axios";
import { fetchAllWeather } from "../../services";

// import weather API
// import { fetchAllWeather } from "../../services";


const WeatherHeader = () => {
    const [weather, setWeather] = useState<AxiosResponse>();
  
    const {GeoLocation, updateLocation} = useContext(GeoLocationContext);

    const weatherSetter = (res: AxiosResponse) => setWeather(res); 

    // TEST
    // gets API key from .env file
    // const key: string | undefined = process.env.REACT_APP_WEATHER_API;  
    // let APILongi: any = null;
    // let APILati: any = null
    // function fetchAllWeather(){
    //     // console.log("services location", location);
    //     // console.log("services location.lat", location.lat);
    //     const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${APILati}&lon=${APILongi}&appid=${key}`;
    //     // console.log("lat-services", location.lat);
    //     return axios.get(weatherAPIURL).then((response) => {
    //         console.log("services response.data", response.data);
    //         console.log("res.data", response.data);
    //         return response.data;
            
    //     });
    // }

    // END TEST

    const updateLocationTwo = (APILon: any, APILat: any) => {
        // updateLocation({lat: location.lat, lon: location.lon});
        // updateLocation(location);
        // APILon = APILongi;
        // APILat = APILati;
    }

    // FIND LOCATION FUNCTIONS <---- FIX ANY TYPE
    // const success = (pos: any) => {
    //     let crd = pos.coords;
    //     console.log(`lat: ${crd.latitude}`);
    //     console.log(`lon: ${crd.longitude}`);
    //     updateLocationTwo(crd.longitide, crd.latitude);
    //     fetchAllWeather(crd.latitude, crd.longitude);
    // }
    
    // if timeout/error
    const error = (err: any) => {
        console.warn(`ERROR:(${err.code}): ${err.message}`)
    }
    // // set timeout for error message, enable accuracy, and no reset
    // const options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    // };

    
    // to only call location access once
    useEffect(() => {
        // if location call is successful, do this
        const success = (pos: any) => {
            let crd = pos.coords;
            console.log(`lat: ${crd.latitude}`);
            console.log(`lon: ${crd.longitude}`);
            updateLocationTwo(crd.longitide, crd.latitude);
            fetchAllWeather(crd.latitude, crd.longitude).then((res) => {
                console.log("weatherRes", res);
                weatherSetter(res);
                console.log("weatherState", weather);

                
            })
        };

        // set timeout for error message, enable accuracy, and no reset
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
                <span className="lat-lon-span">{}</span>
            </section>
            
        </div>
    );
}


export default WeatherHeader;