import axios from "axios";

// import variables from weather header component for api request
import { lat, lon } from "./Components/WeatherHeader/weather-header";

// gets API key from .env file
const key: string | undefined = process.env.WEATHER_API;


// variables
const weatherAPIURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`;



// get all weather
export const fetchAllWeather = () => {
    return axios.get(weatherAPIURL).then((response) => {
        console.log(response.data)
        return response.data;
        
    })
}


