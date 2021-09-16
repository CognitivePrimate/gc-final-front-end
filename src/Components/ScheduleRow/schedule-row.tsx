
import "./schedule-row-styles.css";

import {Schedule} from "../../Model/Interfaces";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { ObjectId } from "mongodb";




const ScheduleRow = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aliases, setAliases] = useState("");
    const [email, setEmail] = useState("");
    const [timeIn, setTimeIn] = useState();
    const [timeOut, setTimeOut] = useState();

    
    const [schedules, setSchedules] = useState();

 
  //functions to handle onSubmit
     const onSubmit = (schedule: Schedule) => {
        // addSchedule(schedule);
        console.log("schedule post onSubmit function", schedules)
    }    
 
  //handles submit event with ShiftLog object key values -FIX ANY
     const handlesubmit = (e: FormEvent) => {
         e.preventDefault();
         const d: Date = new Date();
         let year: any = d.getFullYear();
         let month: any = d.getMonth();
         let day: any = d.getDate();
         let time: any = Date.now();
 
         // IS THIS CORRECT?
         let _id = new ObjectId();
         
         onSubmit({
             firstName,
             lastName,
             aliases,
             email,
             timeIn,
             timeOut,
             _id
         });
         // onClose();
         setAuthor("");
         setSupervisor("");
         setLogText("");
     } 
 
     // functions to handle creation of shiftlog - FIX ANY
     const newAuthor = (e: any) => setAuthor(e.target.value);
     const newSupervisor = (e: any) => setSupervisor(e.target.value);
     const newLogText = (e: any) => setLogText(e.target.value);





    return(
        <form className="scheduleRowForm" action="submit">
            
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={newFirstName} placeholder="first name"/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={lastName} onChange={newLastName} />
        
            <label htmlFor="aliases">Aliases</label><br/>
            <input type="text" name="aliases" id="aliases" value={aliases} onChange={newAliases}/><br />

            <label htmlFor="email">Email</label><br/>
            <input type="text" name="email" id="email" value={email} onChange={newEmail}/><br />

            <label htmlFor="timeIn">Time In</label><br/>
            <input type="time" name="timeIn" id="timeIn" value={timeIn} onChange={newTimeIn}/><br />

            <label htmlFor="timeOut">Time Out</label><br/>
            <input type="time" name="timeOut" id="timeOut" value={timeOut} onChange={newTimeOut}/><br />
            
            
            <button id="scheduleRowSubmitButton" type="submit" onClick={handlesubmit}>Submit</button>
            <Link to="/HomeScreen"><button>Back</button></Link>
        </form>
    )
}


export default ScheduleRow;