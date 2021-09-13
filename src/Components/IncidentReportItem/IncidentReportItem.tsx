import { IncidentReport } from "../../Model/Interfaces";



interface Props {
    incident: IncidentReport
}

const IncidentReportItem = ({incident}: Props) => {

    
    return (
        <main>
            <section className="incident-author-supervisor-section">
                <p>Author: {incident.author}</p>
                <p>Supervisor: {incident.supervisor}</p>
            </section>
            <section>
                <p>Log Text: {incident.logText}</p>
            </section>
        </main>
    )
}

export default IncidentReportItem;