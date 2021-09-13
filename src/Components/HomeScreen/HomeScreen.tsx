<<<<<<< HEAD
import React from 'react';

const HomeScreen= () => {
    
    return (
        <div>
            
        </div>
    )
}


=======
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {


    return (

        // TODO : make a variable and logic that says, if the context provider for the user info is = to
        // admin then make the hidden class variable 'hidden', which will be a variable on the admin section that adds the
        // hidden class or nothing
        <main className="home-screen-main">
            <div className="home-screen-container">
                <section className="home-screen-options-volunteers home-screen-options-containers">
                    <Link to="/NewLogEntry" className="home-screen-button"><button className="home-screen-button">Submit Log Entry</button></Link>
                    <Link to="/DailyShiftLog"><button className="home-screen-button">Current Shift Log</button></Link>
                    <button className="home-screen-button">Schedule</button>
                    <Link to="/SubmitIncidentReport"><button className="home-screen-button">Submit Incident Report</button></Link>
                    <button className="home-screen-button">Emergency Contacts</button>
                    <Link to="/IncidentReportLogs"><button className="home-screen-button">Incident Report Logs</button></Link>
                    <button className="home-screen-button">Events</button>
                </section>
                <section className="home-screen-options-admin home-screen-options-containers hidden">
                    <button className="home-screen-button">Add Emergency Contact</button>
                    <button className="home-screen-button">Add Event</button>
                    <button className="home-screen-button">Volunteer Scheduling</button>
                </section>
            </div>
        </main>
    )
}

>>>>>>> 03cc32b21af170009b394a1dae0882731550fbc3
export default HomeScreen;