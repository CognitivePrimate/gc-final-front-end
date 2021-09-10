import axios from "axios";
import { useContext} from "react";

// import variables from weather header component for api request
import { GeoLocation } from "./Model/Interfaces";
import {GeoLocationContext} from "./ContextProviders/WeatherLocationProvider"

// gets API key from .env file
const key: string | undefined = process.env.WEATHER_API;


// variables
// const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;



// get all weather
export function fetchAllWeather(location: GeoLocation){
    console.log(location);
    console.log(location.lat);
    const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${key}`;
    console.log("lat-services", location.lat);
    return axios.get(weatherAPIURL).then((response) => {
        console.log(response.data)
        return response.data;
        
    })
}


