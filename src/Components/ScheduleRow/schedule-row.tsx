
import "./schedule-row-styles.css";

import {ScheduleRow} from "../../Model/Interfaces";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { ObjectId } from "mongodb";




const ScheduleRowComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aliases, setAliases] = useState("");
    const [email, setEmail] = useState("");
    const [timeIn, setTimeIn] = useState();
    const [timeOut, setTimeOut] = useState();

    
    const [scheduleRows, setScheduleRows] = useState();

 
  //functions to handle onSubmit
    const onSubmit = (scheduleRow: ScheduleRow) => {
        // addSchedule(schedule);
        console.log("schedule post onSubmit function", scheduleRows)
        //  ** NOTE ** ^ this is console logging scheduleRows the state, not the parameter in the function. Issue?//
    }    
 
  //handles submit event with ShiftLog object key values -FIX ANY
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();

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
            setFirstName("");
            setLastName("");
            setAliases("");
            setEmail("");
            setTimeIn(undefined);
            setTimeOut(undefined);
    } 
 
     // functions to handle creation of scheduleRow - FIX ANY
     const newFirstName = (e: any) => setFirstName(e.target.value);
     const newLastName = (e: any) => setLastName(e.target.value);
     const newAliases = (e: any) => setAliases(e.target.value);
     const newEmail = (e: any) => setEmail(e.target.value);
     const newTimeIn = (e: any) => setTimeIn(e.target.value);
     const newTimeOut = (e: any) => setTimeOut(e.target.value);





        return(
            <div className="scheduleRowContainer">
                
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" defaultValue={firstName} onChange={newFirstName} placeholder="first name"/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" defaultValue={lastName} onChange={newLastName} placeholder="last name" />
            
                <label htmlFor="aliases">Aliases</label>
                <input type="text" name="aliases" id="aliases" defaultValue={aliases} onChange={newAliases} placeholder={"aliases"}/>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" defaultValue={email} onChange={newEmail} placeholder="email"/>

                <label htmlFor="timeIn">Time In</label>
                <input type="time" name="timeIn" id="timeIn" defaultValue={timeIn} onChange={newTimeIn}/>

                <label htmlFor="timeOut">Time Out</label>
                <input type="time" name="timeOut" id="timeOut" defaultValue={timeOut} onChange={newTimeOut}/>
                
                
                {/* <button id="scheduleRowSubmitButton" type="submit" onClick={handlesubmit}>Submit</button> */}
            </div>
        )
}


export default ScheduleRowComponent;