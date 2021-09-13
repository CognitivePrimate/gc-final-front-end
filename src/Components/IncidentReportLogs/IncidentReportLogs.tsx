<<<<<<< HEAD
import React from 'react';

const IncidentReportLogs = () => {
    
    return (
        <div>
            
        </div>
    )
}


=======
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

>>>>>>> 03cc32b21af170009b394a1dae0882731550fbc3
export default IncidentReportLogs;