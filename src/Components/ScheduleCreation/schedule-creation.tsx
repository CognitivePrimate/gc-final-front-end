import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { Schedule, ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import { addSchedule } from "../../services";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";
import "./schedule-creation-styles.css";

interface Props {
    schedule: Schedule
}

const ScheduleCreation = ({schedule}: Props) => {
    // setting with state all required properties for Schedule object
   const [scheduleRows, setScheduleRows] = useState<ScheduleRow[]>([]);
   const [volunteersNeeded, setVolunteersNeeded] = useState(0);
   const [dateNeeded, setDateNeeded] = useState(Date);
   const [startTime, setStartTime] = useState(0);
   const [endTime, setEndTime] = useState(0);

   const user= useAuthUser();


 //takes all log items to compile into shift log object
   const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);

 //functions to handle onSubmit
    const onTimeBlockSubmit = (timeBlock: TimeBlock) => {
        let newTimeBlock: TimeBlock[] = timeBlocks;
        newTimeBlock.push(timeBlock);
        setTimeBlocks(newTimeBlock);
        console.log("timeBlocks post onSubmit function", timeBlocks);
    }
 // generates a Schedule Row component in respective TimeBlock based on number of volunteers input by user
    const handleScheduleRows = (scheduleRow: ScheduleRow) => {     
        for (let i = 0; i < volunteersNeeded; i++){
            let newScheduleRow: ScheduleRow[] = scheduleRows;
            newScheduleRow.push(scheduleRow)
            setScheduleRows(newScheduleRow);
            console.log("ScheduleRows", scheduleRows);
        }
    }
    
 //handles submit event with ShiftLog object key values -FIX ANY
    const handleTimeBlocksubmit = (e: FormEvent) => {
        e.preventDefault();

        handleScheduleRows({
            firstName: "",
            lastName: "",
            aliases: "",
            email: "",
            timeIn: undefined,
            timeOut: undefined,
            templated: false
        })
        
        onTimeBlockSubmit({
            scheduleRows,
            volunteersNeeded,
            dateNeeded,
            startTime,
            endTime
        });

        // onClose();
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0)
        setScheduleRows([]);
    } 

    // functions to handle creation of schedule - FIX ANY
    const newScheduleRows = (e: any) => setScheduleRows(e.target.value);
    const newDateNeeded = (e: any) => setDateNeeded(e.target.value);
    const newVolunteersNeeded = (e: any) => setVolunteersNeeded(e.target.value);
    // const newSupervisor = (e: any) => setVolunteersNeeded(e.target.value);
    const newStartTime = (e: any) => setStartTime(e.target.value);
    const newEndTime = (e: any) => setEndTime(e.target.value);
    
    // sends entire schedule object to server --- called by handleScheduleSubmit function
    const submitSchedule = (schedule: Schedule) => {
        let dateNeeded: Date | string = timeBlocks[0].dateNeeded;
        console.log("timeblocks:", timeBlocks);
        addSchedule(schedule);
    }
    
    const handleScheduleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        // set templating to true for editing on call from db
        let templated = true;
        // let dateNeeded = timeBlocks[0].dateNeeded;

        // IS THIS CORRECT?
        console.log("timeblocks", timeBlocks);

        // TODO? timeblocks for each block templated = true?
        
        submitSchedule({
            timeBlocks,
            dateNeeded,
            yearCreated,
            monthCreated,
            dayCreated,
            templated
        })

        setScheduleRows([]);
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0);

        // resets timeBlocks array to remove TimeBlock properties from display upon schedule submission
        setTimeBlocks([]);

    }

    return(
        <main className="sheduleComponentContainer">
            <h3>Create a new schedule:</h3>
            <div className="scheduleCreationContainer">
                <form className="scheduleCreationForm InputForm" action="submit">
                    
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
            <ScheduleItem 
                schedule={schedule}
                onScheduleDelete={() => handleScheduleDelete(schedule)}
                onScheduleEdit={() => handleScheduleEdit(schedule)}
                onScheduleSubmission={() => handleScheduleSubmit}
            />

      
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
        
    );
}

export default ScheduleCreation