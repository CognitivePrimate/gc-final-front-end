import { FormEvent, useState } from "react";
// import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import { ShiftLog } from "../../Model/Interfaces";
import {ObjectId} from "mongodb";

import "./new-log-entry-styles.css";
import { Link } from "react-router-dom";
import { useAuthUser } from "../../ContextProviders/auth-context";
import { addShiftLog } from "../../services";

// TODO
// remove log function
const NewLogEntry = () => {
   const [author, setAuthor] = useState("");
   const [supervisor, setSupervisor] = useState("");
   const [logText, setLogText] = useState("");

   const user = useAuthUser();


    const onSubmit = (shiftLog: ShiftLog) => {
        // record the input values
        console.log(shiftLog);
        addShiftLog(shiftLog)
    }

 //handles submit event with ShiftLog object key values -FIX ANY
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let year: any = d.getFullYear();
        let month: any = d.getMonth() + 1;
        let day: any = d.getDate();
        let hours: any = d.getHours();
        let minutes: any = d.getMinutes();

        // minutes does exact minutes. So if minutes is less than 10, add a '0' string before it
        if(minutes < 10){
            minutes = '0' + minutes;
        }


        // IS THIS CORRECT?
        let _id = new ObjectId();
        
        onSubmit({
            user,
            author,
            supervisor,
            logText,
            year,
            month,
            day,
            hours,
            minutes,
            _id
        });
        // onClose();
        setAuthor("");
        setSupervisor("");
        setLogText("");
    } 

    // functions to handle creation of shiftlog - FIX ANY
    const newAuthor = (e: any) => setAuthor(e.target.value);
    const newSupervisor = (e: any) => setSupervisor(e.target.value);
    const newLogText = (e: any) => setLogText(e.target.value);

    
    return (
    <main className="NewLogContainer">
        <form className="InputForm" action="submit">
        <h3 className="NewLogTitle">New Shift Log</h3>
            <div className="logInputInfoContainer">
                <div className="InputOptions">
                    <label htmlFor="author">Name</label>
                    <input type="text" name="author" id="author" value={author} onChange={newAuthor} />
                </div>
                <div className="InputOptions">
                    <label htmlFor="supervisor">Supervisor</label>
                    <input type="text" name="supervisor" id="supervisor" value={supervisor} onChange={newSupervisor} />
                </div>
            </div>
            <label htmlFor="logEntry">Log Here:</label><br/>
            <textarea name="logEntry" id="logEntry" className="logEntry" value={logText} onChange={newLogText} required minLength={2} rows={8}/><br />
            <div className="FinishButtons">
                <button className="SubmitButton" id="logSubmitButton" type="submit" onClick={handlesubmit}>Submit Log</button>
                <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
                </section>
            </div>
        </form>
    </main>
    );
}


export default NewLogEntry;