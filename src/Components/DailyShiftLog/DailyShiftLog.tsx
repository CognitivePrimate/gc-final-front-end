import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLog } from "../../Model/Interfaces";
import { fetchShiftLogs } from "../../services";
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
    fetchShiftLogs().then(setSearchedShiftLogs);
 }




    return (
        <main className="DailyShiftLogContainer">
            <section>
            <main>
            <form action="submit" className="InputForm" onSubmit={handleSubmit}>
                <h4>Search Logs</h4>
                <section>
                    <label htmlFor="firstNameSearch">Author: </label>
                    <input type="text" name="firstNameSearch" id="firstNameSearch" value={searchFirst} onChange={ (e) => setSearchFirst(e.target.value) }/>
                </section>
                <section>
                    <label htmlFor="supervisorSearch">Supervisor:</label>
                    <input type="text" name="supervisorSearch" id="supervisorSearch"/>
                </section>
                <button>Search</button>
                <button onClick={resetSearch}>Reset</button>
            </form>
        </main>
            </section>
            <section>
                {searchedShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={`${log.author}-${index}`}
                        log={log}
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