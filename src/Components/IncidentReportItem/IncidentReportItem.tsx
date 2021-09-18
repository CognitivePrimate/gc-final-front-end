import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportItem.css';



interface Props {
    incident: IncidentReport
}

const IncidentReportItem = ({incident}: Props) => {

    
    return (
        <main className="IncidentReportLogContainer">
            <section>
                <span>Date:</span>
                <span>{incident.month}</span>
                <span>{incident.day}</span>
                <span>{incident.year}</span>
                <span>{incident.time}</span>
            </section>
            <section className="incident-author-supervisor-section">
                <p>Author: {incident.author}</p>
                <p>Supervisor: {incident.supervisor}</p>
            </section>
            <section>
                <p>Log Text: {incident.incident}</p>
            </section>
        </main>
    )
}

export default IncidentReportItem;