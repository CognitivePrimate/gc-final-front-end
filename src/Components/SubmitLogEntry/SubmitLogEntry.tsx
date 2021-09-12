import { Link } from "react-router-dom";
import "./SubmitLogEntry.css";


const SubmitLogEntry = () => {


    return (
        <main className="submit-log-entry-main">
            <form action="submit" className="submit-log-entry-form">
                <div>
                <h3 className="log-entry-title">Log Entry</h3>
                </div>
                <section className="submit-log-info-section">
                    <input type="text" className="submit-log-entry-input"/>
                    <button>Submit</button>
                </section>
            </form>
            <Link to="/HomeScreen"><button>Back</button></Link>
        </main>
    )
}

export default SubmitLogEntry;