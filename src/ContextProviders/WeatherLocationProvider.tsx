import { createContext, ReactNode, useState } from "react"
import {GeoLocation, GeoLocationCon } from "../Model/Interfaces"



let defaultGeoLocation: GeoLocationCon = {
    GeoLocation: {
    },
    updateLocation: (newLocation) => {}
}


export const GeoLocationContext = createContext(defaultGeoLocation);



export const ItemContextProvider = ({children}: {children: ReactNode}) => {

    const [GeoLocation, setLocation] = useState<GeoLocation | any>({})

    function updateLocation(newLocation: GeoLocation){
        console.log("newLocation from serviceprovider", newLocation);
        let newGeoLocation = newLocation;
        setLocation(newGeoLocation);
    }

   

    return (<GeoLocationContext.Provider value={ {GeoLocation, updateLocation} }>
        {children}
    </GeoLocationContext.Provider>)
};