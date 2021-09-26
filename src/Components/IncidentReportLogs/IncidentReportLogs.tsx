import React, { FormEvent, useEffect, useState } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IncidentReport, ShiftSearchParams } from '../../Model/Interfaces';
import { deleteIncidentReport, fetchIncidentReports, updateIncidentReport } from '../../services';
import BackButton from '../ButtonComponents/BackButton/BackButton';
import IncidentReportItem from "../IncidentReportItem/IncidentReportItem";
import './IncidentReportLogs.css';
import refreshIcon from '../../Icons/refresh.svg';
import ResetButton from '../ButtonComponents/ResetButton/ResetButton';



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

    const [ searchFirst, setSearchFirst] = useState('');
    const [ searchSup, setSearchSup] = useState('');
    const [ searchMonth, setSearchMonth] = useState('');
    const [ searchDay, setSearchDay] = useState('');
    const [ searchYear, setSearchYear] = useState('');

    // use effect so it loads once when you go to the route, but only once.
    useEffect(loadIncidentReports, []);

    //Function for handling onSubmit in the form or the button 'submit' click.
    

function handleSubmit(e: FormEvent){
    e.preventDefault();


    // variable for the filtered shift logs from this search function.
    let newSearchedIncidentReports: IncidentReport[] = [];

    // for each shift log in the database, not filtered previously but straight from the DB.
    incidentReports.forEach((incidentReport) => {

        // variable for search params, all keys are optional
        let tempSearchParams: ShiftSearchParams = {}

        // variable that is the value of the input from the search, changed to all lower case. Also the current logs value(auth or sup) to lower case.
        let searchedFirst = searchFirst.toLowerCase();
        let currentFirst = incidentReport.author.toLowerCase();
        let searchedSup = searchSup.toLowerCase();
        let currentSup = incidentReport.supervisor?.toLowerCase();

        // variables that represent the value of the date to a string from the current Log
        let currentMonth = incidentReport.month.toString();
        let currentDay = incidentReport.day.toString();
        let currentYear = incidentReport.year.toString();

        // these variables combined into one variable to make it easier to check against. 
        let currentDate = currentMonth + currentDay + currentYear;
        console.log(currentDate);

        // variables the currently searched parameters to be put into a single variable to check against the current logs combined string value.
        let searchedDate = searchMonth + searchDay + searchYear;


    // if the value of the input from the search is a truthy statement, then compare the lower case truthy statement to see if matches the current logs value in lowercase.
    // if it matches then make the temporary search parameters value equal to that matched value of the current log we are on.
 
    if (searchFirst) {
        if (currentFirst?.includes(searchedFirst)){
            tempSearchParams.author = currentFirst;
        } 
    }
    if (searchSup) {
        if (currentSup?.includes(searchedSup)){
            tempSearchParams.supervisor = currentSup
        }
    }
    if (searchedDate){
        if (currentDate.includes(searchedDate)){
            tempSearchParams.date = currentDate;
        }
    }

    // tricky part. All combinations of potential searches. If all the searches match, if two of them do, if only one of each matches.
    // not the most effective code because it gets exponentially bigger with each additional search parameter.


    // all three params truthy
    if (searchFirst && tempSearchParams.author === currentFirst && searchSup && tempSearchParams.supervisor === currentSup && searchedDate 
        && tempSearchParams.date === currentDate){
            newSearchedIncidentReports.push(incidentReport);

    // two params truthy, one falsey

    }else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup && tempSearchParams.supervisor === currentSup && searchedDate === '') {
        newSearchedIncidentReports.push(incidentReport);
    }else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup === '' && searchedDate && tempSearchParams.date === currentDate) {
        newSearchedIncidentReports.push(incidentReport);
    }else if ( searchFirst === '' && searchSup && tempSearchParams.supervisor === currentSup && searchedDate && tempSearchParams.date === currentDate) {
        newSearchedIncidentReports.push(incidentReport); 
    // one param truthy, two falsey
    } else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup === '' && searchedDate === ''){
        newSearchedIncidentReports.push(incidentReport);
    } else if ( searchSup && tempSearchParams.supervisor === currentSup &&  searchFirst === '' && searchedDate === '') {
        newSearchedIncidentReports.push(incidentReport);
    } else if ( searchedDate && tempSearchParams.date === currentDate && searchFirst === '' && searchSup === '')
        newSearchedIncidentReports.push(incidentReport);
    })
    setSearchedIncidentReports(newSearchedIncidentReports);


}

    const resetSearch = () => {
        fetchIncidentReports().then((res) => {
            setSearchedIncidentReports(res);
        });
        setSearchFirst('');
        setSearchSup('');
        setSearchMonth('');
        setSearchDay('');
        setSearchYear('');
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
            <h3 className="IncidentTitle">Search Incidents</h3>
                    <section className="InputOptions">
                        <input type="text" name="firstNameSearch" id="firstNameSearch" value={searchFirst} onChange={ (e) => setSearchFirst(e.target.value) } placeholder="Name"/>
                    </section>
                    <section className="InputOptions">
                        <input type="text" name="supervisorSearch" id="supervisorSearch" value={searchSup} onChange={ (e) => setSearchSup(e.target.value) } placeholder="Supervisor"/>
                    </section>
                    <section className="SearchDateContainer">
                        <input type="text" name="monthSearch" id="monthSearch" value={searchMonth} onChange={ (e) => setSearchMonth(e.target.value) } placeholder="Month"/>
                        <input type="text" name="daySearch" id="daySearch" value={searchDay} onChange={ (e) => setSearchDay(e.target.value) } placeholder="Day"/>
                        <input type="text" name="yearSearch" id="yearSearch" value={searchYear} onChange={ (e) => setSearchYear(e.target.value) } placeholder="Year"/>
                    </section>
                <section className="SearchOptions">
                    <button className="SubmitButton">Search</button>
                    <ResetButton
                        resetSearch={resetSearch}
                    />
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