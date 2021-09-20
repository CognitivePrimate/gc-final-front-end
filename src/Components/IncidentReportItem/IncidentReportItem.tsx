import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportItem.css';



interface Props {
    incident: IncidentReport
}

const IncidentReportItem = ({incident}: Props) => {

    
    return (
        <main className="IncidentReportLogContainer">
            <section>
                <span>Date: {incident.month}/{incident.day}/{incident.year}</span>
                <span> Time: {incident.hours}:{incident.minutes}</span>
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