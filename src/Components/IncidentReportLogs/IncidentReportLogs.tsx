import { useContext } from "react";
import { Link } from "react-router-dom";
import { IncidentReportsContext } from "../../ContextProviders/IncidentReportsProvider";
import IncidentReportItem from "../IncidentReportItem/IncidentReportItem";



const IncidentReportLogs = () => {

    const {incidentReports} = useContext(IncidentReportsContext);

    return (
        <main>
            <section>
                {incidentReports.map((incident, index) =>
                    <IncidentReportItem
                        key={incident.author}
                        incident={incident}
                        />
                )}
            </section>

            <Link to="/HomeScreen"><button>Back</button></Link>
        </main>
    )
}

export default IncidentReportLogs;