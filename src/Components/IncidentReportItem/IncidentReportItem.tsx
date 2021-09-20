import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";



interface Props {
    incident: IncidentReport
    deleteReport: () => void; 
}

const IncidentReportItem = ({incident, deleteReport}: Props) => {

    
    return (
        <main className="IncidentReportLogContainer">
            <section className="ReportHeaderSection">
                <section>
                    <span>Date: {incident.month}/{incident.day}/{incident.year}</span>
                    <span> Time: {incident.hours}:{incident.minutes}</span>
                </section>
                <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
            </section>
            <section className="incident-author-supervisor-section">
                <p>Author: {incident.author}</p>
                <p>Supervisor: {incident.supervisor}</p>
            </section>
            <section>
                <p>Log Text: {incident.incident}</p>
                <p>Witness: {incident.witnesses}</p>
            </section>
        </main>
    )
}

export default IncidentReportItem;