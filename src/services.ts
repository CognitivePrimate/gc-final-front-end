import axios from "axios";
import { useContext} from "react";

// import variables from weather header component for api request
import { EmergencyContact, GeoLocation, HistoricalSchedule, IncidentReport, Schedule, ShiftLog } from "./Model/Interfaces";
import {GeoLocationContext} from "./ContextProviders/WeatherLocationProvider"

// gets API key from .env file
const key: string | undefined = process.env.REACT_APP_WEATHER_API;


console.log (key);
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


// to mongodb

const baseUrl = 'https://us-central1-my-scheduling-backend.cloudfunctions.net/api';



/// **  ShiftLogs access ** /// 


export function fetchShiftLogs() : Promise<ShiftLog[]> {
  return axios.get(`${baseUrl}/ShiftLogs`)
  .then(res => res.data)
}



export function addShiftLog(shiftLog: ShiftLog | undefined) : Promise<ShiftLog> {
  return axios.post(`${baseUrl}/ShiftLogs`, shiftLog).then(res => res.data);
}

export function deleteShiftLog(shiftLog: ShiftLog | undefined) : Promise<ShiftLog> {
  return axios.delete(`${baseUrl}/ShiftLogs/${shiftLog?._id}`).then(res => res.data);
}

export function updateShiftLog(shiftLog: ShiftLog | undefined) : Promise<ShiftLog> {
  return axios.put(`${baseUrl}/ShiftLogs/${shiftLog?._id}`, shiftLog).then(res => res.data);
}






/// ** IncidentReports Access ** ///


export function fetchIncidentReports() : Promise<IncidentReport[]> {
  return axios.get(`${baseUrl}/IncidentReports`)
  .then(res => res.data)
}

export function addIncidentReport(report: IncidentReport | undefined) : Promise<IncidentReport> {
  return axios.post(`${baseUrl}/IncidentReports`, report).then(res => res.data);
}

export function deleteIncidentReport(report: IncidentReport | undefined) : Promise<IncidentReport> {
  return axios.delete(`${baseUrl}/IncidentReports/${report?._id}`).then(res => res.data);
}


/// ** EmergencyContacts Access ** ///

export function fetchEmergencyContacts() : Promise<EmergencyContact[]> {
  return axios.get(`${baseUrl}/EmergencyContacts`)
  .then(res => res.data)
}

export function addEmergencyContact(shiftLog: EmergencyContact | undefined) : Promise<EmergencyContact> {
  return axios.post(`${baseUrl}/EmergencyContacts`, shiftLog).then(res => res.data);
}

export function deleteEmergencyContact (contact: EmergencyContact | undefined) : Promise<EmergencyContact> {
  return axios.delete(`${baseUrl}/EmergencyContacts/${contact?._id}`).then(res => res.data);
}


/// ** Schedule Access ** ///

export function fetchSchedules() : Promise<Schedule[]>{
  return axios.get(`${baseUrl}/Schedules`).then(res => res.data)
}

export function addSchedule(schedule: Schedule | undefined) : Promise<Schedule> {
  return axios.post(`${baseUrl}/Schedules`, schedule).then(res => res.data)
}

export function deleteSchedule(schedule: Schedule) : Promise<Schedule> {
  return axios.delete(`${baseUrl}/Schedules/:id`).then(res => res.data)
}

/// ** Historical Schedule Access **///

export function fetchHistoricalSchedules() : Promise<HistoricalSchedule[]>{
  return axios.get(`${baseUrl}/HistoricalSchedules`).then(res => res.data)
}

export function addHistoricalSchedule(historicalSchedule: HistoricalSchedule | undefined) : Promise<HistoricalSchedule> {
  return axios.post(`${baseUrl}/HistoricalSchedules`, historicalSchedule).then(res => res.data)
}

export function editHistoricalSchedule(historicalSchedule: HistoricalSchedule | undefined) : Promise<HistoricalSchedule> {
  return axios.put(`${baseUrl}/HistoricalSchedules`, historicalSchedule).then(res => res.data)
}


