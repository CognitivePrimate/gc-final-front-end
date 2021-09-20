import React, { FormEvent, useEffect, useState } from 'react';
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
        fetchIncidentReports().then((res) => {
            setIncidentReports(res);
            setSearchedIncidentReports(res);
        });
    }

    // state for when the IncidentReports are fetched, this gives us a place to keep them
    const [incidentReports, setIncidentReports] = useState<IncidentReport[]>([]);
    const [searchedIncidentReports, setSearchedIncidentReports] = useState<IncidentReport[]>([]);

    // Search Parameters

    const [searchAuthor, setSearchAuthor] = useState('');

    // use effect so it only loads up once
    useEffect(loadIncidentReports, []);

    
    function handleSubmit(e: FormEvent){
        e.preventDefault();

        
        let newSearchedIncidentReports: IncidentReport[] = [];
        incidentReports.forEach((report) => {
        if (searchAuthor === report.author) {
            newSearchedIncidentReports.push(report);
        }
        })
        setSearchedIncidentReports(newSearchedIncidentReports);


    }

    const resetSearch = () => {
        fetchIncidentReports().then((res) => {
            setSearchedIncidentReports(res);
        });
    }

    return (
        <main>
            <form action="submit" className="InputForm" onSubmit={handleSubmit}>
            <h4>Search Incidents</h4>
                <section>
                    <label htmlFor="firstNameSearch">Author: </label>
                    <input type="text" name="firstNameSearch" id="firstNameSearch" value={searchAuthor} onChange={ (e) => setSearchAuthor(e.target.value) }/>
                </section>
                <section>
                    <label htmlFor="supervisorSearch">Supervisor:</label>
                    <input type="text" name="supervisorSearch" id="supervisorSearch"/>
                </section>
                <button>Search</button>
                <button onClick={resetSearch}>Reset</button>
            </form>
            <section>
                {searchedIncidentReports.map((incident, index) =>
                    <IncidentReportItem
                        key={`${incident.author}-${index}`}
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