import { FormEvent, useState } from "react";
import { ShiftLog } from "../../Model/Interfaces";

import "./new-log-entry-styles.css";
import "../../App.css";
import "../../index.css";

import { useAuthUser } from "../../ContextProviders/auth-context";
import { addShiftLog } from "../../services";
import BackButton from "../ButtonComponents/BackButton/BackButton";
import BreadCrumbButton from "../ButtonComponents/BreadCrumbButton/BreadCrumbButton";

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

// Variables for BreadCrumbButton

    let buttonName= "Shift Logs";
    let linkRoute=  "/DailyShiftLog";

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


       
        
        onSubmit({
            user,
            author,
            supervisor,
            logText,
            year,
            month,
            day,
            hours,
            minutes
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
                    <label htmlFor="author"></label>
                    <input type="text" name="author" id="author" value={author} onChange={newAuthor} placeholder="Name"/>
                </div>
                <div className="InputOptions">
                    <label htmlFor="supervisor"></label>
                    <input type="text" name="supervisor" id="supervisor" value={supervisor} onChange={newSupervisor} placeholder="Supervisor"/>
                </div>
            </div>
            <label htmlFor="logEntry"></label><br/>
            <textarea name="logEntry" id="logEntry" className="logEntry" placeholder="Log Here:" value={logText} onChange={newLogText} required minLength={2} rows={8}/><br />
            <div className="FinishButtons">
                <button className="SubmitButton" id="logSubmitButton" type="submit" onClick={handlesubmit}>Submit Log</button>
                <section className="BackCrumbContainer">
                    <BackButton/>
                    <BreadCrumbButton
                        buttonName={buttonName}
                        linkRoute={linkRoute}
                    />
                </section>
            </div>
        </form>
    </main>
    );
}


export default NewLogEntry;