import { ObjectId } from 'mongodb';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {HistoricalSchedule, Schedule, ScheduleRow} from '../../Model/Interfaces'
import { addHistoricalSchedule, deleteSchedule, fetchSchedules } from '../../services';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import ScheduleRowComponent from '../ScheduleRow/schedule-row';

import deleteIcon from "../../Icons/delete.svg";
import BackButton from '../ButtonComponents/BackButton/BackButton';
// import 

const ScheduleList = () => {   
    // sets all schedule items into state
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    
    // sets specific *searched* schedules into state for rendering
    const [searchedSchedules, setSearchedSchedules] = useState<Schedule[]>([]);

    // brings in all schedules from db && sets into state
    const loadSchedules = () => {
        fetchSchedules().then((res) => {
            setSchedules(res);

        }); 
    }
    
    // calls all schedules immediately upon component render, but only once per useEffect
    useEffect(loadSchedules, []);

    // variable for historical schedule submission and finalization
    let schedule: Schedule | any = searchedSchedules;
    // Search State
    const [searchDate, setSearchDate] = useState();

    // get schedules by single date variables and functions
    let dateNeeded: Date = new Date;
    const newGetScheduleByDateInput = (e: any) => {setSearchDate(e.target.value)};
    
    // iterates through schedules array state to match user date input to schedule date or message if not &&
    // function to set on timer for schedules not found
    const notFoundFunc = () => {notFound = true}
    let notFound: Boolean = false;
    let notFoundMessage: string = "Schedule Not Found. Much Sorry."
    const handleGetSchedulesByDate = (e: FormEvent) => {
        e.preventDefault();
        notFound = false;
        let newSearchedSchedule: Schedule[] = [];
        schedules.forEach((schedule) => {
            if (searchDate === schedule.dateNeeded){
                console.log("found");
                newSearchedSchedule.push(schedule);
            }else{
                notFoundFunc()
            }
        });
        

        
        // TODO --- if not found, message on screen, not alert probably
        setSearchedSchedules(newSearchedSchedule);
        console.log("newSearchedbeforeReset", searchedSchedules)
        console.log("searched", searchedSchedules);
    }
   

    // resetSearch
    const resetSearch = () => {
        loadSchedules();
        setSearchedSchedules([]);
    }
    

    // handle submission of finalized form, with volunteer info, to historicalSchedules collection
    // const submitHistoricalSchedule = (historicalSchedule: HistoricalSchedule) => {
    //     addHistoricalSchedule(historicalSchedule);
    // }
    
    // finalizes submission of finalized form, calling submit function from above
    const handleHistoricalScheduleSubmit =(e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        // TEST TEST
        // functions to handle creation of scheduleRow - FIX ANY
        
        const rowSubmit = (e: FormEvent) => {
            console.log("in Row Submit")
            const newFirstName = (e: any) => setFirstName(e.target.value);
            const newLastName = (e: any) => setLastName(e.target.value);
            const newAliases = (e: any) => setAliases(e.target.value);
            const newEmail = (e: any) => setEmail(e.target.value);
            const newTimeIn = (e: any) => setTimeIn(e.target.value);
            const newTimeOut = (e: any) => setTimeOut(e.target.value);
            newFirstName(e);
            newLastName(e);
            newAliases(e);
            newEmail(e);
            newTimeIn(e);
            newTimeOut(e);
        }
        searchedSchedules.forEach((schedule) => {
            for (let i = 0; i > schedule.timeBlocks.length; i++){
                schedule.timeBlocks.forEach((block) => {
                    block.scheduleRows.forEach((row) => {
                        rowSubmit(e);
                        row.firstName = firstName;
                        row.lastName = lastName;
                        row.aliases = aliases;
                        row.email = email;
                        row.timeIn = timeIn;
                        row.timeOut = timeOut
                    })
                })
                
            }
        })

        let schedule = searchedSchedules[0];
        
        addHistoricalSchedule({
            schedule,
            yearCreated,
            monthCreated,
            dayCreated
        })
        
        // ENDTEST

        // submitHistoricalSchedule(e);

        

        // TEST
        // searchedSchedules.forEach((schedule) => {
        //     for (let i = 0; i > schedule.timeBlocks.length; i++){
        //         schedule.timeBlocks[i].scheduleRows.forEach((row) => {
        //          onInputChange(e: any) => row.firstName = (e.target.value);
        //         const newLastName = (e: any) => row.lastName = (e.target.value);
        //         const newAliases = (e: any) => row.aliases = (e.target.value);
        //         const newEmail = (e: any) => row.email = (e.target.value);
        //         const newTimeIn = (e: any) => row.timeIn = (e.target.value);
        //         const newTimeOut = (e: any) => row.timeOut = (e.target.value); 
        //         })
        //     }
        //     block.scheduleRows.forEach((row) => {
        //         // functions to handle creation of scheduleRow - FIX ANY
        //         const newFirstName = (e: any) => row.firstName = (e.target.value);
        //         const newLastName = (e: any) => row.lastName = (e.target.value);
        //         const newAliases = (e: any) => row.aliases = (e.target.value);
        //         const newEmail = (e: any) => row.email = (e.target.value);
        //         const newTimeIn = (e: any) => row.timeIn = (e.target.value);
        //         const newTimeOut = (e: any) => row.timeOut = (e.target.value);
        //     })
        // })
        

        // END TEST

        // submitHistoricalSchedule({
        //     historicalSchedule,
        //     yearCreated,
        //     monthCreated,
        //     dayCreated,
        // });

        setSearchedSchedules([]);
    }

    // TESTING FOR SCHEDULE SUBMISSION FINAL
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aliases, setAliases] = useState("");
    const [email, setEmail] = useState("");
    const [timeIn, setTimeIn] = useState();
    const [timeOut, setTimeOut] = useState();

  //handles submit event with ShiftLog object key values -FIX ANY
    const submitHistoricalSchedule = (schedule: Schedule) => {
        // e.preventDefault();
        console.log("in form event");
        // let newRow: ScheduleRow = row;

        // rowSubmit({
        //     firstName,
        //     lastName,
        //     aliases,
        //     email,
        //     timeIn,
        //     timeOut
        // });
       
        // let newRow: ScheduleRow = row;
        // console.log("row from sched-row", row);

        // onClose();
        // setFirstName("");
        // setLastName("");
        // setAliases("");
        // setEmail("");
        // setTimeIn(undefined);
        // setTimeOut(undefined);
        
    
            // NOTE FOR LATER: forEachRow --- do below?
    }

     

    // END TESTING FOR SCHEDULE SUBMISSION FINAL

    const handleDeleteRow = (schedule: Schedule) => {
        console.log("sched id to delete", schedule._id);

    }

    const handleRowEdit = (row: ScheduleRow) => {

    }

    const handleFetchSchedules = () => {
        setSearchedSchedules(schedules);
        console.log("searchedSchedules", searchedSchedules);
    }

    const handleScheduleDelete = (schedule: Schedule) => {
        console.log("scheduleId to delete", schedule._id);
        deleteSchedule(schedule);
        resetSearch();
    }

    const handleScheduleEdit = (schedule: Schedule) => {
        console.log("schedule to edit", schedule._id);
        // schedule.timeBlocks.forEach((block) => {
        //     block.scheduleRows.forEach((row) => {
        //         // functions to handle creation of scheduleRow - FIX ANY
        //         const newFirstName = (e: any) => row.firstName = (e.target.value);
        //         const newLastName = (e: any) => row.lastName = (e.target.value);
        //         const newAliases = (e: any) => row.aliases = (e.target.value);
        //         const newEmail = (e: any) => row.email = (e.target.value);
        //         const newTimeIn = (e: any) => row.timeIn = (e.target.value);
        //         const newTimeOut = (e: any) => row.timeOut = (e.target.value);
        //     })
        // })
    }

    return (
        <main>
            <h3>Schedules</h3>
            <div className="scheduleItemSearchContainer">
                    <form action="submit" id="scheduleItemSearchByDate" onSubmit={handleGetSchedulesByDate}>
                        <h4>Search schedules by date:</h4>
                        <input type="date" id="getScheduleByDateInput" onChange={newGetScheduleByDateInput}/>
                        <button type="submit" form="scheduleItemSearchByDate">Search</button>
                    </form>
                    <button type="button" onClick={handleFetchSchedules}>View All Schedules</button>
                    <button onClick={resetSearch}>Reset</button>
            </div>
            
                <main className="sheduleComponentContainer">
                    <h3>Schedule Search:</h3>
                    {/* fix below (notFound) */}
                    {notFound && <div className="notFoundMessage"><h4>{notFoundMessage}</h4></div>}
                    <form className="scheduleCreationTemplateContainer" action="submit" id="scheduleSubmissionForm" onSubmit={handleHistoricalScheduleSubmit}>
                        {searchedSchedules && searchedSchedules.map((schedule, index) => 
                            <ScheduleItem
                                key={`${schedule.dateNeeded}-${index}`} 
                                schedule={schedule}
                                onScheduleDelete={() => handleScheduleDelete(schedule)}
                                onScheduleEdit={() => handleScheduleEdit(schedule)}
                                onInputChangeSubmit3={() => handleHistoricalScheduleSubmit}
                                // onTimeBlockRowReset={()=>{}}
                                // onScheduleSubmission={() => handleScheduleSubmit}
                            />
                        )}
                        {searchedSchedules[0] && <button className="submitButton" type="submit" name="submit" form="scheduleSubmissionForm">Submit Finalized Schedule</button>}
                    </form>

                    <section className="BackButtonLinkContainer">
                        <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
                    </section>
                </main>
        </main>

        // TEST END
    )
     
    
}



export default ScheduleList;