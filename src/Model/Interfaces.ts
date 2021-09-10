export interface GeoLocation {
    lat: number;
    lon: number;
}

export interface GeoLocationCon {
    GeoLocation: GeoLocation | any,
    updateLocation: (geoLocation: GeoLocation) => void
}