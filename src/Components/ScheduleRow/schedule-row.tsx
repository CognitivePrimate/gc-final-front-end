
import "./schedule-row-styles.css";

import {Schedule} from "../../Model/Interfaces";
import { Link } from "react-router-dom";




const ScheduleRow = () => {





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