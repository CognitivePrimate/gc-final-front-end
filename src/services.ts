import axios from "axios";
import { useContext} from "react";

// import variables from weather header component for api request
import { GeoLocation } from "./Model/Interfaces";
import {GeoLocationContext} from "./ContextProviders/WeatherLocationProvider"

// gets API key from .env file
const key: string | undefined = process.env.REACT_APP_WEATHER_API;


// get all weather
export function fetchAllWeather(location: GeoLocation){
    console.log("services location", location);
    console.log("services location.lat", location.lat);
    const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${key}`;
    console.log("lat-services", location.lat);
    return axios.get(weatherAPIURL).then((response) => {
        console.log("services response.data", response.data)
        return response.data;
    });
}


