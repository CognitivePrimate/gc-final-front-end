
import "./schedule-row-styles.css";

import {ScheduleRow} from "../../Model/Interfaces";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { ObjectId } from "mongodb";

// icons
import deleteIcon from "../../Icons/delete.svg";
import editIcon from "../../Icons/edit.svg";

// css
import "../../../src/index.css";

interface Props {
    onRowDelete: (row: ScheduleRow) => void;
    onRowEdit: (index: number) => void;
    row: ScheduleRow
    onInputChangeSubmit: () => void;
    index: number;
}


const ScheduleRowComponent = ({onRowDelete, onInputChangeSubmit, row, index}: Props) => {
    // LEAVE COMMENTED OUT CODE FOR FIXING LATER, POST BOOTCAMP
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [aliases, setAliases] = useState("");
//     const [email, setEmail] = useState("");
//     const [timeIn, setTimeIn] = useState();
//     const [timeOut, setTimeOut] = useState();

//   //handles submit event with ShiftLog object key values -FIX ANY
//     const onRowSubmit = (e: FormEvent) => {
//         e.preventDefault();

//         rowSubmit(e);
       
//         // let newRow: ScheduleRow = row;
//         console.log("row from sched-row", row);

//         // onClose();
//         setFirstName("");
//         setLastName("");
//         setAliases("");
//         setEmail("");
//         setTimeIn(undefined);
//         setTimeOut(undefined);
        
    
//             // NOTE FOR LATER: forEachRow --- do below?
//     }

//      // functions to handle creation of scheduleRow - FIX ANY
//         const rowSubmit = (e: FormEvent) => {
//             const newFirstName = (e: any) => setFirstName(e.target.value);
//             const newLastName = (e: any) => setLastName(e.target.value);
//             const newAliases = (e: any) => setAliases(e.target.value);
//             const newEmail = (e: any) => setEmail(e.target.value);
//             const newTimeIn = (e: any) => setTimeIn(e.target.value);
//             const newTimeOut = (e: any) => setTimeOut(e.target.value);
//             newFirstName(e);
//             newLastName(e);
//             newAliases(e);
//             newEmail(e);
//             newTimeIn(e);
//             newTimeOut(e);

//         }
     


        return(
            <div className="scheduleRowContainer">
                
                <label htmlFor={`firstName-${index}`} className="schedRowInputLabel">First Name</label>
                <input type="text" name={`firstName-${index}`} id={`firstName-${index}`} defaultValue={row.firstName} onChange={onInputChangeSubmit} placeholder="first name"/>

                <label htmlFor={`lastName-${index}`} className="schedRowInputLabel">Last Name</label>
                <input type="text" name={`lastName-${index}`} id={`lastName-${index}`} defaultValue={row.lastName} onChange={onInputChangeSubmit} placeholder="last name" />
            
                <label htmlFor={`aliases-${index}`} className="schedRowInputLabel">Aliases</label>
                <input type="text" name={`aliases-${index}`} id={`aliases-${index}`} defaultValue={row.aliases} onChange={onInputChangeSubmit} placeholder="aliases"/>

                <label htmlFor={`email-${index}`} className="schedRowInputLabel">Email</label>
                <input type="text" name={`email-${index}`} id={`email-${index}`} defaultValue={row.email} onChange={onInputChangeSubmit} placeholder="email"/>

                <label htmlFor={`timeIn-${index}`} className="schedRowInputLabel">Time In</label>
                <input type="time" name={`timeIn-${index}`} id={`timeIn-${index}`} defaultValue={row.timeIn} onChange={onInputChangeSubmit}/>

                <label htmlFor="timeOut" className="schedRowInputLabel">Time Out</label>
                <input type="time" name={`timeOut-${index}`} id={`timeOut-${index}`} defaultValue={row.timeOut} onChange={onInputChangeSubmit}/>

                <div className="scheduleRowIconContainer">
                    <img className="trashIcon" src={deleteIcon} alt="delete" onClick={() => onRowDelete(row)}/>
                </div>
                {/* <button id="scheduleRowSubmitButton" type="submit" onClick={handlesubmit}>Submit</button> */}
            </div>
        )
}


export default ScheduleRowComponent;