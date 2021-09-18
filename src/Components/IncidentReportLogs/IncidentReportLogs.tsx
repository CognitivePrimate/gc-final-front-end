import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IncidentReportsContext } from "../../ContextProviders/IncidentReportsProvider";
import { IncidentReport } from '../../Model/Interfaces';
import { fetchIncidentReports } from '../../services';
import IncidentReportItem from "../IncidentReportItem/IncidentReportItem";



const IncidentReportLogs = () => {

    // This is a function importing the API call from the services tab.
    // we use that API call, and 'then' set the state to what returns from the API call
    const loadIncidentReports = () => {
        fetchIncidentReports().then(setIncidentReports);
    }

    // state for when the IncidentReports are fetched, this gives us a place to keep them
    const [incidentReports, setIncidentReports] = useState<IncidentReport[]>([]);

    // use effect so it only loads up once
    useEffect(loadIncidentReports, []);

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
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}

export default IncidentReportLogs;