import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { Schedule, ScheduleRow, TimeBlock } from "../../Model/Interfaces";
import { addSchedule } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import ScheduleRowComponent from "../ScheduleRow/schedule-row";
import "./schedule-creation-styles.css";

const ScheduleCreation = () => {
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

    const handleScheduleRows = (scheduleRow: ScheduleRow) => {
        // generates a Schedule Row component in respective TimeBlock based on number of volunteers input by user
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
        })
        
        onTimeBlockSubmit({
            scheduleRows,
            volunteersNeeded,
            dateNeeded,
            startTime,
            endTime,
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

        // let dateNeeded = timeBlocks[0].dateNeeded;

        // IS THIS CORRECT?
        console.log("timeblocks", timeBlocks);
        
        submitSchedule({
            timeBlocks,
            dateNeeded,
            yearCreated,
            monthCreated,
            dayCreated,
        })

        setScheduleRows([]);
        setVolunteersNeeded(0);
        setStartTime(0);
        setEndTime(0);

        // resets timeBlocks array to remove TimeBlock properties from display upon schedule submission
        setTimeBlocks([]);

    }

    const HandleDeleteRow = (index: number) => {
        console.log("trying to delete");
        console.log("index", index);
        // let newTimeBlocks: TimeBlock[] = timeBlocks;
        // newTimeBlocks.splice(index, 1);
        // setTimeBlocks(newTimeBlocks);
        console.log("pre-delete", timeBlocks);

        timeBlocks.forEach((timeBlock) => {
            console.log("first foreach");
            timeBlock.scheduleRows.forEach((row) => {
                console.log("second for each")
                if (timeBlock.scheduleRows[index]){
                    console.log("in if statement");
                    // setScheduleRows([]);
                    // setVolunteersNeeded(0);

                    // handleScheduleRows({
                    //     firstName: "",
                    //     lastName: "",
                    //     aliases: "",
                    //     email: "",
                    //     timeIn: undefined,
                    //     timeOut: undefined,
                    // })
                    
                    // onTimeBlockSubmit({
                    //     scheduleRows,
                    //     volunteersNeeded,
                    //     dateNeeded,
                    //     startTime,
                    //     endTime,
                    // });
                    
                    
                }
            })
            // if (index === timeBlock.scheduleRows[index]){
            //     console.log("trying to slice");
            //     let newVolunteersNeeded: number = timeBlock.volunteersNeeded -1;
            //     setVolunteersNeeded(newVolunteersNeeded);
            //     console.log("v needed", volunteersNeeded);
                
                
            //     timeBlock.scheduleRows.splice(index, 1);


                // console.log("timeblocks.scheduleRows", timeBlock.scheduleRows);
                // setTimeBlocks([prevTimeBlocks =>
                //     ...timeBlocks.slice(0, index),
                //     ...timeBlocks.slice(index+1)
                // ]);
            // }
            console.log("afterDeleteAttempt", timeBlocks);
        })
        
        
        
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
            <div className="generatedTimeBlockContainer">
                {timeBlocks.map((timeblock, index) =>
                // maps each time block and within that timeblock maps scheduleRowComponents based on VolunteersNeeded input
                    <div className="timeBlockContainer" key={index}>
                        <div className="timeBlockContainerHeaderContainer">
                            <h4 className="timeBlockTimeHeader">{timeblock.dateNeeded}</h4>
                            <div className="timeBlockDateHeaderRight">
                                {/* <h5 className="timeBlockTimeHeader">From: {timeblock.startTime}</h5> */}
                                {/* <h5 className="timeBlockTimeHeader">To: {timeblock.endTime}</h5> */}
                                {timeBlocks.length > 0 && <h5 className="timeBlockTimeHeader">From: {timeblock.startTime.toLocaleString("en-US")}</h5>}
                                {timeBlocks.length > 0 && <h5 className="timeBlockTimeHeader">To: {timeblock.endTime.toLocaleString("en-US")}</h5>}
                            </div>
                        </div>
                        
                        <form action="submit" className="timeBlockSubmissionContainerForm InputForm" id="timeBlockSubmissionContainerForm" onSubmit={handleScheduleSubmit}>
                            {timeblock.scheduleRows.map((row, index) => 
                                <div className="scheduleRowComponentWrapper">
                                    <ScheduleRowComponent
                                        firstName={row.firstName}
                                        lastName={row.lastName}
                                        aliases={row.aliases}
                                        email={row.email}
                                        timeIn={row.timeIn}
                                        timeOut={row.timeOut}
                                        _id={row._id}
                                        key={index}
                                        onDelete={() => HandleDeleteRow(index)}
                                    />
                                </div>
                            )}
                        </form>
                        
                    </div>
                )}

                {/* TEST */}
                <section className="SubmitButtonContainer">
                <button className="submitButton SubmitButton" type="submit" name="submit" form="timeBlockSubmissionContainerForm">Submit Schedule</button>
                </section>
            </div>
            <BackButton/>
        </main>
        
    );
}

export default ScheduleCreation