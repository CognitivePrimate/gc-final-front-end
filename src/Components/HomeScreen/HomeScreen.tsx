import React from 'react';
import { Link } from 'react-router-dom';

import "./HomeScreen.css";
import "../../App.css";
import "../../index.css";

const homeScreenStyle = "home-screen-button"
const HomeScreen = () => {

    return (

        // TODO : make a variable and logic that says, if the context provider for the user info is = to
        // admin then make the hidden class variable 'hidden', which will be a variable on the admin section that adds the
        // hidden class or nothing
        <main className="home-screen-main">
            <div className="home-screen-container">

                {/*  D R Y, don't repeat yourself.  W E T,  */}
                <section className="home-screen-options-volunteers home-screen-options-containers">  
                    <Link to="/NewLogEntry" className="home-screen-button-link"><button className="home-screen-button">New Shift Log</button></Link>
                    <Link to="/DailyShiftLog" className="home-screen-button-link"><button className="home-screen-button">Shift Logs</button></Link>
                    <Link to="/SubmitIncidentReport" className="home-screen-button-link"><button className="home-screen-button">New Incident Report</button></Link>
                    <Link to="/IncidentReportLogs" className="home-screen-button-link"><button className="home-screen-button">Incident Reports</button></Link>
                    <Link to="/SubmitEmergencyContact" className="home-screen-button-link"><button className="home-screen-button">New Emergency Contact</button></Link>
                    <Link to="/EmergencyContacts" className="home-screen-button-link"><button className="home-screen-button">Emergency Contacts</button></Link>
                    <Link to="/ScheduleCreation" className="home-screen-button-link"><button className="home-screen-button">Create Schedule</button></Link>
                    <Link to="/Schedule" className="home-screen-button-link"><button className={homeScreenStyle}>Schedules</button></Link>
                </section>
                <section className="home-screen-options-admin home-screen-options-containers">
                    
                </section>
            </div>
        </main>
    )
}

export default HomeScreen;