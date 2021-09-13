import { Link } from "react-router-dom"



const SubmitIncidentReport = () => {


    return (
        <main>
            <form className="incidentInputForm" action="submit">
            <div className="incidentInputInfoContainer">
                <label htmlFor="author">Name</label>
                <input type="text" name="author" id="author"/>

                <label htmlFor="supervisor">Supervisor</label>
                <input type="text" name="supervisor" id="supervisor"/>
            </div>
            <label htmlFor="incdientEntry">Log Here:</label><br/>
            <input type="textArea" name="incidentEntry" id="incidentEntry"/>
            <button id="incidentSubmitButton" type="submit">Submit Log</button>
            <Link to="/HomeScreen"><button>Back</button></Link>
            </form>
        </main>
    )
}

export default SubmitIncidentReport;