import {ObjectId} from "mongodb";
import firebase from '../firebaseConfig'
export interface GeoLocation {
    lat: number;
    lon: number;
}

export interface GeoLocationCon {
    GeoLocation: GeoLocation | any,
    updateLocation: (geoLocation: GeoLocation) => void
}



export interface ShiftLog {
    user?: firebase.User | null;
    author: string;
    supervisor?: string;
    logText: string;
    year: Date;
    month: Date;
    day: Date;
    hours: Date;
    minutes?: Date;
    _id?: string;
}    
export interface UserLogin {
    username: string,
    password: string
}


export interface IncidentReport {
    user?: firebase.User | null;
    author: string;
    supervisor?: string;
    incident: string;
    witnesses?: string[];
    year: Date;
    month: Date;
    day: Date;
    hours: Date;
    minutes: Date;
    _id?: string;
}
/** SCHEDULE INTERFACES */
export interface ScheduleRow {
    firstName: string;
    lastName: string;
    aliases?: string;
    email?: string;
    timeIn?: number;
    timeOut?: number;
    _id?: string;
}

// FIX ANY TYPE BELOW
export interface TimeBlock {
    scheduleRows: ScheduleRow[];
    volunteersNeeded: number;
    dateNeeded: any;
    startTime: number;
    endTime: number;
    _id?: string;
}

export interface Schedule {
    user?: firebase.User | null;
    timeBlocks: TimeBlock[];
    dateNeeded: Date | string;
    yearCreated: Date;
    monthCreated: Date;
    dayCreated: Date;
    _id?: string;
}

export interface HistoricalSchedule {
    user?: firebase.User | null;
    schedule: Schedule;
    yearCreated: Date;
    monthCreated: Date;
    dayCreated: Date;
    _id?: string;
}

/**SCHEDULE INTERFACES END */

export interface EmergencyContact {
    user?: firebase.User | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role?: string,
    email?: string;
    _id?: string;
}
