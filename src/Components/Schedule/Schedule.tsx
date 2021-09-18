import { get } from 'https';
import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Schedule} from '../../Model/Interfaces'
import { fetchSchedules } from '../../services';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import ScheduleRowComponent from '../ScheduleRow/schedule-row';

const ScheduleList = () => {
    // brings in all schedules from db
    const loadSchedules = () => {
        fetchSchedules().then(setSchedules);
    }
    // sets all schedule items into state
    const [schedules, setSchedules] = useState<Schedule[]>([]);

    // sets specific *searched* schedules into state for rendering
    const [searchedSchedules, setSearchedSchedules] = useState<Schedule[]>([]);
    // calls all schedules immediately upon component render, but only once per useEffect
    useEffect(loadSchedules, []);

    // get schedules by single date
    let dateNeeded: Date = new Date;
    const newGetScheduleByDateInput = (e: any) => {dateNeeded = e.target.value}
    
    const onGetSchedulesByDateSubmit = (dateNeeded: Date) => {
        schedules.forEach((schedule) => {
            if (schedule.dateNeeded === dateNeeded){
                let newSearchedSchedule: Schedule[] = searchedSchedules;
                newSearchedSchedule.push(schedule);
                setSearchedSchedules(newSearchedSchedule);
                console.log("searchedSchedules", searchedSchedules);
            }else{
                alert("No schedules found for this date");
            }
        })
    }

    const handleGetSchedulesByDate = (e: FormEvent) => {
        e.preventDefault();
        console.log("dateneeded", dateNeeded);
        onGetSchedulesByDateSubmit(dateNeeded);
        console.log("in handle get schedules function");
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
                {searchedSchedules.map((schedule, index) =>
                    <div className="scheduleContainer">
                        <div className="scheduleContainerHeader">
                            <h4>{schedule.dateNeeded}</h4>
                        </div>
                        <div className="scheduleTimeBlockContainer">
                            {schedule.timeBlocks.map((timeBlock, index) =>
                                <div className="scheduleTimeBlockHeaderContainer">
                                    <h4>From: {timeBlock.startTime} To: {timeBlock.endTime}</h4>
                                </div>
                                
                                // {schedule.timeBlocks.scheduleRows.map((row, index) => 
                                //     <div className="scheduleRowComponentWrapper">
                                //         <ScheduleRowComponent
                                //         key={`${row.lastName}-${index}`}
                                //         />
                                //     </div>
                                // )}

                            
                            )}
                        </div>

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