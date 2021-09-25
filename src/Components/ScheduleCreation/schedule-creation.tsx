import firebase from "firebase";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { Schedule, ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import { addSchedule } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";
import "./schedule-creation-styles.css";
import "../LoginScreen/LoginScreen.css";



const ScheduleCreation = () => {
    // setting with state all required properties for Schedule object
   const [scheduleRows, setScheduleRows] = useState<ScheduleRow[]>([]);
   const [volunteersNeeded, setVolunteersNeeded] = useState(0);
   const [dateNeeded, setDateNeeded] = useState(Date);
   const [startTime, setStartTime] = useState(0);
   const [endTime, setEndTime] = useState(0);
   
    //  finalized schedule template to be submitted
   const [scheduleTemplate, setScheduleTemplate] = useState<Schedule[]>([]);


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
            newScheduleRow.push(scheduleRow);
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
        })
        
        onTimeBlockSubmit({
            scheduleRows,
            volunteersNeeded,
            dateNeeded,
            startTime,
            endTime
        });

        // should stay false until submission for editing post-template-finalization
        let templated = false;

        setScheduleTemplate([{
            user: user,
            timeBlocks: timeBlocks,
            dateNeeded: dateNeeded,
            // yearCreated,
            // monthCreated,
            // dayCreated,
            templated
        }])

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

    // sends ScheduleItem template to database
    const handleScheduleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("insubmitform");
        // IS THIS REDUNDANT BECAUSE IT'S SET ABOVE?
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth() + 1;
        let dayCreated: any = d.getDate();

        // set templating to true for editing on call from db
        let dateNeeded = timeBlocks[0].dateNeeded;

        let schedule: Schedule | undefined = undefined;

        if (scheduleTemplate[0]) {
            schedule = scheduleTemplate[0];
            console.log("schedule", schedule);
            addSchedule({
                user: schedule.user,
                timeBlocks: schedule.timeBlocks,
                dateNeeded: schedule.dateNeeded,
                yearCreated: yearCreated,
                monthCreated: monthCreated,
                dayCreated: dayCreated,
                templated: true
            })
        }

        setScheduleRows([]);
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0);

        // resets timeBlocks & template array to remove properties from display upon schedule submission
        setTimeBlocks([]);
        setScheduleTemplate([]);

        console.log("schedule submitted", schedule);

    }

    // NEW TEST AREA
    const handleScheduleDelete = () => {
        setScheduleRows([]);
        setTimeBlocks([]);
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0);
        setScheduleTemplate([]);
    }

    // functions and variables to rerender page on schedule template changes
    let timeBlockIndex: number = 0; 
    const resetTemplateRender = (index: number) => {
        console.log("shceudleTempla", scheduleTemplate);
        // takes in index of scheduleRow, removes it from the schedTemplate and resets state
        setScheduleTemplate(prevTemplate => [
            ...prevTemplate.slice(index)
        ]);
        console.log("tbIndex", timeBlockIndex);
        // STILL NEED TO MAKE THIS PART WORK -- LOW PRIORITY THOUGH
        if (scheduleTemplate[0].timeBlocks[timeBlockIndex].scheduleRows.length === 0){
            console.log("blergh");
            setScheduleTemplate(prevTemplate => [
                ...prevTemplate.slice(index)
            ]);
        }

    }

    const handleTimeBlockDelete = (index: number) => {
        timeBlockIndex = index;
        setScheduleTemplate(prevTemplate => [
            ...prevTemplate.slice(index)
        ]);
        if (scheduleTemplate[0].timeBlocks.length === 0){
            setScheduleTemplate([]);
        }
    }
    
    // NEW TEST AREA

    return(
        <main className="sheduleComponentContainer">
            <h3>Create a new schedule:</h3>
            <div className="scheduleCreationContainer">
                <form className="scheduleCreationForm InputForm" action="submit">

                    {/* TEST */}
                        <div className="StylishDivSize1 testBox1"></div>
                    {/* END TEST */}
                    
                    <label htmlFor="dateNeeded" className="schedCreateInputLabel">Date Needed:</label>
                    <input type="date" name="dateNeeded" id="dateNeeded" value={dateNeeded} onChange={newDateNeeded}/>
                    <br/>
                    <label htmlFor="volunteersNeeded">Volunteers Needed:</label>
                    <input type="number" name="volunteersNeeded" id="volunteersNeeded" value={volunteersNeeded} onChange={newVolunteersNeeded}/>

                    <label htmlFor="startTime" className="schedCreateInputLabel">Start Time:</label>
                    <input type="time" name="startTime" id="startTime" value={startTime} onChange={newStartTime}/>

                    <label htmlFor="endTime" className="schedCreateInputLabel">end Time:</label>
                    <input type="time" name="endTime" id="endTime" value={endTime} onChange={newEndTime}/>
                    <button type="button" className="schedSub SubmitButton" onClick={handleTimeBlocksubmit}>Generate Time Block</button>
                </form>
            </div>
            <form className="scheduleCreationTemplateContainer" action="submit" id="scheduleSubmissionForm" onSubmit={handleScheduleSubmit}>
                {scheduleTemplate.map((schedule, index) => 
                    <ScheduleItem
                        key={`${schedule.dateNeeded}-${index}`} 
                        schedule={schedule}
                        onScheduleDelete={() => handleScheduleDelete()}
                        onScheduleEdit={() => {}}
                        onInputChangeSubmit3={() => {}}
                        onRowDeleteThree={() => resetTemplateRender(index)}
                        onTimeBlockDeleteTwo={() => handleTimeBlockDelete(index)}
                        // onTimeBlockRowReset={() => handleTimeBlockRowReset}
                        // onScheduleSubmission={() => handleScheduleSubmit}
                    /> 
                )}
            </form>
            {scheduleTemplate[0] && <button className="schedSub SubmitButton" type="submit" name="submit" form="scheduleSubmissionForm">Submit Schedule Template</button>
}
            <section className="BackButtonLinkContainer">
                {/* <Link to="/HomeScreen"><button className="BackButton">Back</button></Link> */}
                <BackButton/>
            </section>
            
        </main>
        
    );
}

export default ScheduleCreation