import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {


    return (
        <main className="home-screen-main">
            <div className="home-screen-container">
                <section className="home-screen-options-volunteers home-screen-options-containers">
                    <Link to="/SubmitLogEntry" className="home-screen-button"><button className="home-screen-button">Submit Log Entry</button></Link>
                    <button className="home-screen-button">Current Shift Log</button>
                    <button className="home-screen-button">Schedule</button>
                    <button className="home-screen-button">Submit Incident Report</button>
                    <button className="home-screen-button">Emergency Contacts</button>
                    <button className="home-screen-button">Incident Report Logs</button>
                    <button className="home-screen-button">Events</button>
                </section>
                <section className="home-screen-options-admin home-screen-options-containers">
                    <button className="home-screen-button">Add Emergency Contact</button>
                    <button className="home-screen-button">Add Event</button>
                    <button className="home-screen-button">Volunteer Scheduling</button>
                </section>
            </div>
        </main>
    )
}

export default HomeScreen;