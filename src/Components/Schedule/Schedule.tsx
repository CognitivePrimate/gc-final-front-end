import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Schedule} from '../../Model/Interfaces'
import { fetchSchedules } from '../../services';
import ScheduleItem from '../ScheduleItem/ScheduleItem';

const ScheduleList = () => {

    const loadSchedules = () => {
        fetchSchedules().then(setSchedules);
    }
    
    const [schedules, setSchedules] = useState<Schedule[]>([])

    useEffect(loadSchedules, []);

    return (
        <main>
            <h3>Master Schedule List</h3>
            <section>
                {/* TODO : the key needs a string or number. Currently not string or number to use
                    as the _id can be more than a string or number. Unsure what to use for the key in this instance.
                */}
                {/* {schedules.map((schedule, index) =>
                    <ScheduleItem
                        key={schedule._id}
                    />
                
                )} */}
            </section>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}


export default ScheduleList;