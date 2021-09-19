import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import { ShiftLog } from "../../Model/Interfaces";
import { fetchShiftLogs } from "../../services";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";
import './DailyShiftLog.css';



const DailyShiftLog = () => {

    // const {shiftLogs} = useContext(ShiftLogContext);
    const loadDailyShiftLogs = () => {
        fetchShiftLogs().then(setDailyShiftLogs);
    }

    const [dailyShiftLogs, setDailyShiftLogs] = useState<ShiftLog[]>([]);
    useEffect(loadDailyShiftLogs, []);

    const [searchedShiftLogs, setSearchedShiftLogs ] = useState<ShiftLog[]>([]);

    

    // Search State //
    const [ searchFirst, setSearchFirst] = useState('');

    // Search functions //
    function handleSubmit(e: FormEvent){
        e.preventDefault();
        // query is type Query
        // fetchShiftLogs().then( (res) => {
        //     setDailyShiftLogs([]);
        //     let searchedShiftLogs = [];
        //     res.forEach((shift) => {
        //         if (shift.author === searchFirst){
                    
        //         }
        //     })
        

        // let searchedShiftLogs: ShiftLog[] = []
        // dailyShiftLogs.forEach((shiftLog) => {
        //     if (searchFirst === shiftLog.author) {
        //         searchedShiftLogs.push(shiftLog);
        //     }
        // })
        // setDailyShiftLogs(searchedShiftLogs);
        
    //     fetchShiftLogs().then ( (res) => {
    //     setDailyShiftLogs(res);
    //     let searchedShiftLogs: ShiftLog[] = []
    //     dailyShiftLogs.forEach((shiftLog) => {
    //         if (searchFirst === shiftLog.author) {
    //             searchedShiftLogs.push(shiftLog);
    //         }
    //     })
    //     setDailyShiftLogs(searchedShiftLogs);
    // })

        

    //     let newSearchedShiftLogs: ShiftLog[] = searchedShiftLogs;
    //     dailyShiftLogs.forEach((log) => {
    //         if (searchFirst === log.author){
    //             // let newSearchedShiftLogs: ShiftLog[] = searchedShiftLogs;
    //             newSearchedShiftLogs.push(log);
    //             setSearchedShiftLogs(newSearchedShiftLogs);
    //             console.log(searchedShiftLogs);
    //         }
    //     })
    // }

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
                {/* <section>
                    <label htmlFor="lastNameSearch">Last Name:</label>
                    <input type="text" name="lastNameSearch" id="lastNameSearch"/>
                </section> */}
                <section>
                    <label htmlFor="supervisorSearch">Supervisor:</label>
                    <input type="text" name="supervisorSearch" id="supervisorSearch"/>
                </section>
                <button>Search</button>
            </form>
        </main>
            </section>
            <section>
                {dailyShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={log.author}
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