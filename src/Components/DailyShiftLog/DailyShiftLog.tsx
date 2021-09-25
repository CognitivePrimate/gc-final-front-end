import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLog, ShiftSearchParams } from "../../Model/Interfaces";
import { deleteShiftLog, fetchShiftLogs, updateShiftLog } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";
import './DailyShiftLog.css';
import refreshIcon from "../../Icons/refresh.svg";



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



// Search State ///

const [ searchFirst, setSearchFirst] = useState('');
const [ searchSup, setSearchSup] = useState('');
const [ searchMonth, setSearchMonth] = useState('');
const [ searchDay, setSearchDay] = useState('');
const [ searchYear, setSearchYear] = useState('');

function handleSubmit(e: FormEvent){
    e.preventDefault();


    // variable for the filtered shift logs from this search function.
    let newSearchedShiftLogs: ShiftLog[] = [];

    // for each shift log in the database, not filtered previously but straight from the DB.
    dailyShiftLogs.forEach((shiftLog) => {

        // variable for search params, all keys are optional
        let tempSearchParams: ShiftSearchParams = {}

        // variable that is the value of the input from the search, changed to all lower case. Also the current logs value(auth or sup) to lower case.
        let searchedFirst = searchFirst.toLowerCase();
        let currentFirst = shiftLog.author.toLowerCase();
        let searchedSup = searchSup.toLowerCase();
        let currentSup = shiftLog.supervisor?.toLowerCase();

        // variables that represent the value of the date to a string from the current Log
        let currentMonth = shiftLog.month.toString();
        let currentDay = shiftLog.day.toString();
        let currentYear = shiftLog.year.toString();

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
        newSearchedShiftLogs.push(shiftLog);

    // two params truthy, one falsey

    }else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup && tempSearchParams.supervisor === currentSup && searchedDate === '') {
        newSearchedShiftLogs.push(shiftLog);
    }else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup === '' && searchedDate && tempSearchParams.date === currentDate) {
        newSearchedShiftLogs.push(shiftLog);
    }else if ( searchFirst === '' && searchSup && tempSearchParams.supervisor === currentSup && searchedDate && tempSearchParams.date === currentDate) {
        newSearchedShiftLogs.push(shiftLog); 
    // one param truthy, two falsey
    } else if ( searchFirst && tempSearchParams.author === currentFirst && searchSup === '' && searchedDate === ''){
        newSearchedShiftLogs.push(shiftLog);
    } else if ( searchSup && tempSearchParams.supervisor === currentSup &&  searchFirst === '' && searchedDate === '') {
        newSearchedShiftLogs.push(shiftLog);
    } else if ( searchedDate && tempSearchParams.date === currentDate && searchFirst === '' && searchSup === '')
        newSearchedShiftLogs.push(shiftLog);
    })
    setSearchedShiftLogs(newSearchedShiftLogs);


}




// Handle CRUD Functions //


    const resetSearch = () => {
        loadDailyShiftLogs();
        setSearchFirst('');
        setSearchSup('');
        setSearchMonth('');
        setSearchDay('');
        setSearchYear('');
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

   




    return (
        <main className="DailyShiftLogContainer">
            <section>
                <form action="submit" className="InputForm" onSubmit={handleSubmit}>
                    <h3 className="CenterTextTitle">Search Logs</h3>
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
                        <button className="ResetButton" onClick={resetSearch}><img src={refreshIcon} alt="Refresh"/></button>
                    </section>
                </form>
            </section>
            <section className="ShiftLogsContainer">
                {searchedShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={`${log.author}-${index}`}
                        log={log}
                        deleteReport={ () => handleDelete(log)} 
                        updateLogSubmit={ (pendingLog) => handleUpdate(pendingLog)}
                        />
                )}
            </section>
            <BackButton/>
        </main>
    )
}

export default DailyShiftLog;