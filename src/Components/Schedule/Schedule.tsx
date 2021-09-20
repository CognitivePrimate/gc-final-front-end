import { ObjectId } from 'mongodb';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {HistoricalSchedule, Schedule} from '../../Model/Interfaces'
import { addHistoricalSchedule, fetchSchedules } from '../../services';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import ScheduleRowComponent from '../ScheduleRow/schedule-row';

const ScheduleList = () => {
    // brings in all schedules from db && sets into state
    const loadSchedules = () => {
        fetchSchedules().then(setSchedules); 
    }

    useEffect(loadSchedules, []);
    
    // sets all schedule items into state
    const [schedules, setSchedules] = useState<Schedule[]>([]);
    
    // sets specific *searched* schedules into state for rendering
    const [searchedSchedules, setSearchedSchedules] = useState<Schedule[]>([]);
    // calls all schedules immediately upon component render, but only once per useEffect
    
    let schedule: Schedule | Schedule[] = searchedSchedules; 

    // get schedules by single date variables and functions
    let dateNeeded: Date = new Date;
    const newGetScheduleByDateInput = (e: any) => {dateNeeded = e.target.value}
    
    // iterates through schedules array state to match user date input to schedule date
    const onGetSchedulesByDateSubmit = (dateNeeded: Date) => {
        schedules.forEach((schedule) => {
            if (dateNeeded === schedule.dateNeeded){
                let newSearchedSchedule: Schedule[] = searchedSchedules;
                newSearchedSchedule.push(schedule);
                setSearchedSchedules(newSearchedSchedule);
                console.log("searchedSchedules", searchedSchedules);
            }
        })
    }

    const handleGetSchedulesByDate = (e: FormEvent) => {
        e.preventDefault();
        console.log("dateneeded", dateNeeded);
        onGetSchedulesByDateSubmit(dateNeeded);
        console.log("in handle get schedules function");
    }

    // handle submission of finalized form, with volunteer info, to historicalSchedules collection
    const submitHistoricalSchedule = (historicalSchedule: HistoricalSchedule) => {
        addHistoricalSchedule(historicalSchedule);
    }
    
    const handleHistoricalScheduleSubmit =(e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let yearCreated: any = d.getFullYear();
        let monthCreated: any = d.getMonth();
        let dayCreated: any = d.getDate();

        let _id = new ObjectId();

        submitHistoricalSchedule({
            schedule,
            yearCreated,
            monthCreated,
            dayCreated,
            _id
        });

        setSearchedSchedules([]);
    }

    

    return (
        <main>
            <h3>Schedules</h3>
            <div className="scheduleItemSearchContainer">
                    <form action="get" id="scheduleItemSearchByDate">
                        <h4>Search schedules by date:</h4>
                        <input type="date" id="getScheduleByDateInput" onChange={newGetScheduleByDateInput}/>
                        <button type="submit" form="scheduleItemSearchByDate" onClick={handleGetSchedulesByDate}>Search</button>
                    </form>
            </div>
            <section className="scheduleItemFoundSchedulesContainer">
                {/* TODO : the key needs a string or number. Currently not string or number to use
                    as the _id can be more than a string or number. Unsure what to use for the key in this instance.
                */}
                {searchedSchedules.map((schedule) =>
                    <div className="scheduleContainer" key={`${schedule._id}`}>
                        <form action="submit" id="historicalScheduleSubmissionForm">
                            <div className="scheduleContainerHeader">
                                <h4>{schedule.dateNeeded}</h4>
                            </div>
                            <div className="scheduleTimeBlockContainer">
                                {schedule.timeBlocks.map((timeBlock) =>
                                    <div key={`${timeBlock._id}`}>
                                        <div className="scheduleTimeBlockHeaderContainer">
                                            <h5>From: {timeBlock.startTime} To: {timeBlock.endTime}</h5>
                                        </div>
                                        <div>
                                            {timeBlock.scheduleRows.map((row, index) => 
                                                <div className="scheduleRowComponentWrapper" key={index}>
                                                    {/* <ScheduleRowComponent
                                                    key={`${row.lastName}`}
                                                    /> */}
                                                </div>
                                            )}
                                        </div>
                                    </div>                                                                                     
                                                                                        
                                )}
                            </div>
                            <button className="submitButton" type="submit" name="submit" form="historicalScheduleSubmissionForm" onClick={handleHistoricalScheduleSubmit}>Submit Completed Schedule</button>
                        </form>

                    </div>

                )}

               
            </section>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}


export default ScheduleList;