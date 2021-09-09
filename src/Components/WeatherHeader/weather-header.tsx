import { useEffect, useState } from "react";


// import weather API
import { fetchAllWeather } from "../../services";

export let lat: number = 0;
export let lon: number = 0;


const WeatherHeader = () => {
    const [weather, setWeather] = useState([])

    // const lat: number = 0;
    // const lon: number = 0;

    // FIND LOCATION FUNCTIONS <---- FIX ANY TYPE
    const success = (pos: any) => {
        let crd = pos.coords;
        console.log(`lat: ${crd.latitude}`);
        console.log(`lon: ${crd.longitude}`);
        lat = crd.latitude;
        lon = crd.longitude;
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
        }
    }, []);
    

    // console.log(fetchAllWeather());




    return (
        <div>
            <p>test</p>
            <p>{lon}</p>
            <p>{lat}</p>
            
        </div>
    );
}


export default WeatherHeader;