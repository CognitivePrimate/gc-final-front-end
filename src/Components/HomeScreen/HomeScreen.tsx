import React from 'react';
import { Link } from 'react-router-dom';

import "./HomeScreen.css";

const HomeScreen = () => {

    return (

        // TODO : make a variable and logic that says, if the context provider for the user info is = to
        // admin then make the hidden class variable 'hidden', which will be a variable on the admin section that adds the
        // hidden class or nothing
        <main className="home-screen-main">
            <div className="home-screen-container">
                <section className="home-screen-options-volunteers home-screen-options-containers">
                    <Link to="/Schedule" className="home-screen-button-link"><button className="home-screen-button">Schedules</button></Link>
                    <Link to="/NewLogEntry" className="home-screen-button-link"><button className="home-screen-button">Submit Log Entry</button></Link>
                    <Link to="/DailyShiftLog" className="home-screen-button-link"><button className="home-screen-button">Current Shift Log</button></Link>
                    <Link to="/SubmitIncidentReport" className="home-screen-button-link"><button className="home-screen-button">Submit Incident Report</button></Link>
                    <Link to="/IncidentReportLogs" className="home-screen-button-link"><button className="home-screen-button">Incident Report Logs</button></Link>
                    <Link to="/SubmitEmergencyContact" className="home-screen-button-link"><button className="home-screen-button">Submit Emergency Contact</button></Link>
                    <Link to="/EmergencyContacts" className="home-screen-button-link"><button className="home-screen-button">Emergency Contacts</button></Link>
                    {/* <button className="home-screen-button">Events</button> */}
                </section>
                <section className="home-screen-options-admin home-screen-options-containers">
                    {/* <button className="home-screen-button">Add Event</button></Link> */}
                    <Link to="/ScheduleCreation" className="home-screen-button-link"><button className="home-screen-button">Create Schedule</button></Link>
                </section>
            </div>
        </main>
    )
}

export default HomeScreen;