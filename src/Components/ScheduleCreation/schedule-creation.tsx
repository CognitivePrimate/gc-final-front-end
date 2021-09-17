import { ObjectId } from "mongodb";
import { FormEvent, useState } from "react";
import { Schedule, ScheduleRow } from "../../Model/Interfaces";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";
import "./schedule-creation-styles.css";

const ScheduleCreation = () => {
    // setting with state all required properties for Schedule object
   const [scheduleRows, setScheduleRows] = useState<ScheduleRow[]>([]);
   const [volunteersNeeded, setVolunteersNeeded] = useState(0);
   const [dateNeeded, setDateNeeded] = useState();
   const [startTime, setStartTime] = useState(0);
   const [endTime, setEndTime] = useState(0);


 //takes all log items to compile into shift log object
   const [timeBlocks, setTimeBlocks] = useState<Schedule[]>([]);

 //functions to handle onSubmit
    const onTimeBlockSubmit = (schedule: Schedule) => {
        let newTimeBlock: Schedule[] = timeBlocks;
        newTimeBlock.push(schedule);
        setTimeBlocks(newTimeBlock);
        console.log("schedules post onSubmit function", timeBlocks);

        // TEST
        for (let i = 0; i < volunteersNeeded; i++){
            setScheduleRows([]); 
        }
        // TEST

    }
    
    

 //handles submit event with ShiftLog object key values -FIX ANY
    const handleTimeBlocksubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        // IS THIS CORRECT?
        let _id = new ObjectId();
        
        onTimeBlockSubmit({
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
    const newVolunteersNeeded = (e: any) => setVolunteersNeeded(e.target.value);
    // const newSupervisor = (e: any) => setVolunteersNeeded(e.target.value);
    const newStartTime = (e: any) => setStartTime(e.target.value);
    const newEndTime = (e: any) => setEndTime(e.target.value);
    




    return(
        <main className="sheduleComponentContainer">
            <h3>Create a new schedule:</h3>
            <div className="scheduleCreationContainer">
                <form className="scheduleCreationForm" action="submit">
                    
                    <label htmlFor="dateNeeded">Date Needed:</label>
                    <input type="date" name="dateNeeded" id="dateNeeded" value={dateNeeded} onChange={newDateNeeded}/>
                    <br/>
                    <label htmlFor="volunteersNeeded">Volunteers Needed:</label>
                    <input type="number" name="volunteersNeeded" id="volunteersNeeded" defaultValue={volunteersNeeded} onChange={newVolunteersNeeded}/>

                    <label htmlFor="startTime">Start Time:</label>
                    <input type="time" name="startTime" id="startTime" value={startTime} onChange={newStartTime}/>

                    <label htmlFor="endTime">end Time:</label>
                    <input type="time" name="endTime" id="endTime" value={endTime} onChange={newEndTime}/>
                    <button type="button" onClick={handleTimeBlocksubmit}>Generate Time Block</button>
        
                </form>
            </div>
            <div className="generatedTimeBlockContainer">
                
            
            </div>
        </main>
        
    );
}

export default ScheduleCreation