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
    year?: Date;
    month?: Date;
    day?: Date;
    time?: Date;
    _id: ObjectId;
}    
export interface UserLogin {
    username: string,
    password: string
}


export interface IncidentReport {
    author: string;
    supervisor?: string;
    incident: string;
    witnesses?: string[];
    year?: Date;
    month?: Date;
    day?: Date;
    time?: Date;
    _id?: ObjectId;
}
/** SCHEDULE INTERFACES */
export interface ScheduleRow {
    firstName: string;
    lastName:string;
    aliases?: string;
    email?: string;
    timeIn?: Date;
    timeOut?: Date;
    _id?: ObjectId;
}

// FIX ANY TYPE BELOW
export interface TimeBlock {
    scheduleRows: ScheduleRow[];
    volunteersNeeded: number;
    dateNeeded: any;
    startTime: number;
    endTime: number;
    yearCreated?: Date;
    monthCreated?: Date;
    dayCreated?: Date;
    _id?: ObjectId;
}

export interface Schedule {
    timeBlocks: TimeBlock[];
    dateNeeded: any;
    yearCreated?: Date;
    monthCreated?: Date;
    dayCreated?: Date;
    _id?: ObjectId;
}

/**SCHEDULE INTERFACES END */

export interface EmergencyContact {
    user?: firebase.User | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role?: string,
    email?: string;
    year?: Date;
    month?: Date;
    day?: Date;
    time?: Date;
    _id?: ObjectId;
}
