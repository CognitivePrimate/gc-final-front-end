import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLog } from "../../Model/Interfaces";
import { deleteShiftLog, fetchShiftLogs, updateShiftLog } from "../../services";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";
import './DailyShiftLog.css';



const DailyShiftLog = () => {


    const [dailyShiftLogs, setDailyShiftLogs] = useState<ShiftLog[]>([]);
    const [searchedShiftLogs, setSearchedShiftLogs ] = useState<ShiftLog[]>([]);

    const loadDailyShiftLogs = () => {
        fetchShiftLogs().then((res) => {
            setDailyShiftLogs(res);
            setSearchedShiftLogs(res);
        })
       
    }
    useEffect(loadDailyShiftLogs, []);

    // Search State //
    const [ searchFirst, setSearchFirst] = useState('');

    // Search functions //
    function handleSubmit(e: FormEvent){
        e.preventDefault();

        
        let newSearchedShiftLogs: ShiftLog[] = [];
        dailyShiftLogs.forEach((shiftLog) => {
        if (searchFirst === shiftLog.author) {
            newSearchedShiftLogs.push(shiftLog);
        }
        })
        setSearchedShiftLogs(newSearchedShiftLogs);


}

    const resetSearch = () => {
        loadDailyShiftLogs();
    }

    const handleDelete = (shiftLog: ShiftLog) => {
        console.log(shiftLog);
        console.log(shiftLog._id)
        deleteShiftLog(shiftLog);
        resetSearch();
        };
    

    // Handle Updating the individual ShiftLog

    const handleUpdate = (pendingLog: ShiftLog) => {
        console.log(pendingLog);
        updateShiftLog(pendingLog);
        resetSearch();
    }

    // const handleUpdateSubmit =  (e: FormEvent) => {
    //     e.preventDefault();

    //     handleUpdate();
    // };




    return (
        <main className="DailyShiftLogContainer">
            <section>
                <form action="submit" className="InputForm" onSubmit={handleSubmit}>
                    <h3 className="CenterTextTitle">Search Logs</h3>
                    <section className="InputOptions">
                        <label htmlFor="firstNameSearch">Author: </label>
                        <input type="text" name="firstNameSearch" id="firstNameSearch" value={searchFirst} onChange={ (e) => setSearchFirst(e.target.value) }/>
                    </section>
                    <section className="InputOptions">
                        <label htmlFor="supervisorSearch">Supervisor:</label>
                        <input type="text" name="supervisorSearch" id="supervisorSearch"/>
                    </section>
                    <section className="SearchOptions">
                        <button className="SubmitButton">Search</button>
                        <button className="SubmitButton" onClick={resetSearch}>Reset</button>
                    </section>
                </form>
            </section>
            <section>
                {searchedShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={`${log.author}-${index}`}
                        log={log}
                        deleteReport={ () => handleDelete(log)} 
                        updateLogSubmit={ (pendingLog) => handleUpdate(pendingLog)}
                        />
                )}
            </section>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen" className="BackButtonLinkContainer"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}

export default DailyShiftLog;