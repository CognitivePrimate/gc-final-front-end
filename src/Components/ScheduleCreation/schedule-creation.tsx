



import { ObjectId } from "mongodb";
import { FormEvent, useState } from "react";
import { Schedule, ScheduleRow } from "../../Model/Interfaces";
import "./schedule-creation-styles.css";

const ScheduleCreation = () => {
    const [scheduleRows, setScheduleRows] = useState<ScheduleRow[]>([]);
   const [volunteersNeeded, setVolunteersNeeded] = useState(0);
   const [dateNeeded, setDateNeeded] = useState();
   const [startTime, setStartTime] = useState(0);
   const [endTime, setEndTime] = useState(0);


 //takes all log items to compile into shift log object
   const [schedules, setSchedules] = useState<Schedule[]>([]);

 //functions to handle onSubmit
    const onSubmit = (schedule: Schedule) => {
        let newSchedules: Schedule[] = schedules;
        newSchedules.push(schedule);
        setSchedules(newSchedules);
        console.log("schedules post onSubmit function", schedules)
    }    

 //handles submit event with ShiftLog object key values -FIX ANY
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        // IS THIS CORRECT?
        let _id = new ObjectId();
        
        onSubmit({
            scheduleRows,
            volunteersNeeded,
            dateNeeded,
            startTime,
            endTime,
            yearCreated,
            monthCreated,
            dayCreated,
            _id
        });
        // onClose();
        setScheduleRows([]);
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0)
    } 

    // functions to handle creation of shiftlog - FIX ANY
    const newScheduleRows = (e: any) => setScheduleRows(e.target.value);
    const newDateNeeded = (e: any) => setDateNeeded(e.target.value);
    const newVolunteersNeeded = (e: any) => setScheduleRows(e.target.value);
    const newSupervisor = (e: any) => setVolunteersNeeded(e.target.value);
    const newStartTime = (e: any) => setStartTime(e.target.value);
    const newEndTime = (e: any) => setEndTime(e.target.value);
    




    return(
        <div className="sheduleCreationContainer">
            <h3>Create a new schedule:</h3>
        <form className="scheduleCreationForm" action="submit">
            
            <label htmlFor="datesNeeded">Date Needed:</label>
            <input type="date" name="datesNeeded" id="datesNeeded" value={dateNeeded} onChange={newDateNeeded}/>
            <br/>
            <label htmlFor="volunteersNeeded">Volunteers Needed:</label>
            <input type="number" name="volunteersNeeded" id="volunteersNeeded" value={volunteersNeeded} onChange={newVolunteersNeeded}/>

            <label htmlFor="volunteersNeeded">Volunteers Needed:</label>
            <input type="number" name="volunteersNeeded" id="volunteersNeeded" value={volunteersNeeded} onChange={newVolunteersNeeded}/>

            
        </form>
        </div>
    );
}

export default ScheduleCreation