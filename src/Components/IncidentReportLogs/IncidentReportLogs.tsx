import React, { FormEvent, useEffect, useState } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IncidentReport } from '../../Model/Interfaces';
import { deleteIncidentReport, fetchIncidentReports, updateIncidentReport } from '../../services';
import BackButton from '../ButtonComponents/BackButton/BackButton';
import IncidentReportItem from "../IncidentReportItem/IncidentReportItem";
import './IncidentReportLogs.css';
import refreshIcon from '../../Icons/refresh.svg';



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
    const [searchSup, setSearchSup] = useState('');

    // use effect so it loads once when you go to the route, but only once.
    useEffect(loadIncidentReports, []);

    //Function for handling onSubmit in the form or the button 'submit' click.
    function handleSubmit(e: FormEvent){
        e.preventDefault();

        // Author matching
        let newSearchedIncidentReports: IncidentReport[] = [];
        incidentReports.forEach((report) => {
        if (searchAuthor === report.author) {
            newSearchedIncidentReports.push(report);
        }
        })

        // Set the Searched State to what is returned after filtering.
        setSearchedIncidentReports(newSearchedIncidentReports);


    }

    const resetSearch = () => {
        fetchIncidentReports().then((res) => {
            setSearchedIncidentReports(res);
        });
    }


    const handleDelete = (incident: IncidentReport) => {

        // delete report imported from services.
        deleteIncidentReport(incident);
        resetSearch();
    };


    const handleUpdate = (pendingIncident: IncidentReport) => {
        console.log(pendingIncident);
        updateIncidentReport(pendingIncident);
        resetSearch();
    }

    return (
        <main className="IncidentReportLogs">
            <form action="submit" className="InputForm" onSubmit={handleSubmit}>
            <h4>Search Incidents</h4>
                <section className="incident-search-field">
                    <label htmlFor="firstNameSearch"></label>
                    <input type="text" name="firstNameSearch" id="firstNameSearch" value={searchAuthor} onChange={ (e) => setSearchAuthor(e.target.value) } placeholder="Author"/>
                </section>
                <section>
                    <label htmlFor="supervisorSearch"></label>
                    <input type="text" name="supervisorSearch" id="supervisorSearch" placeholder="Supervisor"/>
                </section>
                <section className="SearchOptions">
                    <button className="SubmitButton">Search</button>
                    <button className="ResetButton" onClick={resetSearch}><img src={refreshIcon} alt="Refresh"/></button>
                </section>
            </form>
            <section>
                {/* Map the searched reports. The Reports initially have no filtering on useEffect load up render. */}
                {searchedIncidentReports.map((incident, index) =>
                    <IncidentReportItem
                        key={`${incident.author}-${index}`}
                        incident={incident}
                        deleteReport={ () => handleDelete(incident)}
                        updateIncidentSubmit={ (pendingIncident) => handleUpdate(pendingIncident)}
                        />
                )}
            </section>
            <BackButton/>
        </main>
    )
}

export default IncidentReportLogs;