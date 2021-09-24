import { ObjectId } from 'mongodb';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {HistoricalSchedule, Schedule} from '../../Model/Interfaces'
import { addHistoricalSchedule, fetchSchedules } from '../../services';
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
            // setSearchedSchedules(res);
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
    const newGetScheduleByDateInput = (e: any) => {setSearchDate(e.target.value)}
    
    // iterates through schedules array state to match user date input to schedule date
    const handleGetSchedulesByDate = (e: FormEvent) => {
        e.preventDefault();
        let newSearchedSchedule: Schedule[] = [];
        schedules.forEach((schedule) => {
            if (searchDate === schedule.dateNeeded){
                newSearchedSchedule.push(schedule);
            }
        });
        setSearchedSchedules(newSearchedSchedule);
    }
   

    // resetSearch
    const resetSearch = () => {
        fetchSchedules().then(setSearchedSchedules);
        console.log(searchedSchedules);
    }
    
    // const onGetSchedulesByDateSubmit = (dateNeeded: Date) => {
    //     setSearchedSchedules([]);
    //     console.log("what");
    //     schedules.forEach((schedule) => {
    //         if (dateNeeded === schedule.dateNeeded){
    //             let newSearchedSchedule: Schedule[] = searchedSchedules;
    //             newSearchedSchedule.push(schedule);
    //             setSearchedSchedules(newSearchedSchedule);
    //             console.log("searchedSchedules", searchedSchedules);
    //         }
    //     })
    // }

    // const handleGetSchedulesByDate = (e: FormEvent) => {
    //     e.preventDefault();
    //     setSearchedSchedules([]);
    //     console.log("setSearchedinByDate", searchedSchedules);
    //     console.log("dateneeded", dateNeeded);
    //     onGetSchedulesByDateSubmit(dateNeeded);
    //     console.log("in handle get schedules function");
    // }

    // handle submission of finalized form, with volunteer info, to historicalSchedules collection
    const submitHistoricalSchedule = (historicalSchedule: HistoricalSchedule) => {
        addHistoricalSchedule(historicalSchedule);
    }
    // finalizes submission of finalized form, calling submit function from above
    const handleHistoricalScheduleSubmit =(e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        

        submitHistoricalSchedule({
            schedule,
            yearCreated,
            monthCreated,
            dayCreated,
        });

        setSearchedSchedules([]);
    }

    const HandleDeleteRow = (schedule: Schedule) => {
        console.log("sched id to delete", schedule._id);



    }

    const handleFetchSchedules = () => {
        setSearchedSchedules(schedules);
        console.log("searchedSchedules", searchedSchedules);
    }

    

    return (
        <main>
            <h3>Schedules</h3>
            <div className="scheduleItemSearchContainer">
                    <form action="submit" id="scheduleItemSearchByDate" onSubmit={handleGetSchedulesByDate}>
                        <h4>Search schedules by date:</h4>
                        <input type="date" id="getScheduleByDateInput" onChange={newGetScheduleByDateInput}/>
                        <button form="scheduleItemSearchByDate">Search</button>
                    </form>
                    <button type="button" onClick={handleFetchSchedules}>View All Schedules</button>
                    <button onClick={resetSearch}>Reset</button>
            </div>
            <section className="scheduleItemFoundSchedulesContainer">
                {/* TODO : the key needs a string or number. Currently not string or number to use
                    as the _id can be more than a string or number. Unsure what to use for the key in this instance.
                */}
                {searchedSchedules.map((schedule, index) =>
                    <div className="scheduleContainer" key={`${schedule._id}-${schedule}`}>
                        <form action="submit" id="historicalScheduleSubmissionForm">
                            <div className="scheduleContainerHeader">
                                <h4>{schedule.dateNeeded}</h4>
                            </div>
                            <div className="scheduleTimeBlockContainer" key={`${schedule._id}-${index}`}>
                                {schedule.timeBlocks.map((timeBlock, index) =>
                                    <div key={`${timeBlock._id}-${index}`}>
                                        <div className="scheduleTimeBlockHeaderContainer">
                                            <h5>From: {timeBlock.startTime} To: {timeBlock.endTime}</h5>
                                        </div>
                                        <div>
                                            {timeBlock.scheduleRows.map((row, index) => 
                                                <div className="scheduleRowComponentWrapper" key={`${row._id}-${index}`}>
                                                    <ScheduleRowComponent
                                                    firstName={row.firstName}
                                                    lastName={row.lastName}
                                                    aliases={row.aliases}
                                                    email={row.email}
                                                    timeIn={row.timeIn}
                                                    timeOut={row.timeOut}
                                                    _id={row._id}
                                                    key={`${row._id}-${index}`}
                                                    onDelete={() => HandleDeleteRow(schedule)}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>                                                                                     
                                                                                        
                                )}
                            </div>
                            <button className="submitButton" type="submit" name="submit" form="historicalScheduleSubmissionForm" onClick={handleHistoricalScheduleSubmit}>Submit Completed Schedule</button>
                        </form>
                        <div className="scheduleIconContainer">

                        </div>

                    </div>

                )}

               
            </section>
            <BackButton/>
        </main>
    )
}



export default ScheduleList;