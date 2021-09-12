export interface GeoLocation {
    lat: number;
    lon: number;
}

export interface GeoLocationCon {
    GeoLocation: GeoLocation | any,
    updateLocation: (geoLocation: GeoLocation) => void
}

export interface ShiftLog {
    author: string;
    supervisor?: string;
    logText: string;
    year: Date;
    month: Date;
    day: Date;
    time: Date;
}    
export interface UserLogin {
    username: string,
    password: string
}