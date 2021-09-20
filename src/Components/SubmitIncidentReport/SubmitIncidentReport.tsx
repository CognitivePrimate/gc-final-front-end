import { ObjectId } from 'bson';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IncidentReport } from '../../Model/Interfaces';
import { addIncidentReport } from '../../services';
import './SubmitIncidentReport.css';

const SubmitIncidentReport = () => {
   const [author, setAuthor] = useState("");
   const [supervisor, setSupervisor] = useState("");
   const [incident, setIncident] = useState("");
   const [witnesses, setWitnesses] = useState([]);

 //takes all log items to compile into shift log object
   const [incidentReports, setIncidentReports] = useState<IncidentReport[]>([]);

 //functions to handle onSubmit
    // const onSubmit = (incidentReport: IncidentReport) => {
    //     // setShiftLogs(prevShiftLogs => [
    //     //     ...prevShiftLogs,
    //     //     shiftLog
    //     // ]);
    //     // console.log("trying", shiftLogs);
    //     // WHY ONLY WORK THIS WAY?! 
    //     let newIncidentReport: IncidentReport[] = incidentReports;
    //     newIncidentReport.push(incidentReport);
    //     setIncidentReports(newIncidentReport);
    //     console.log("incidentReports post onSubmit function", incidentReports)
    // }    

    const onSubmit = (incidentReport: IncidentReport) => {
        // record the input values
        console.log(incidentReport);
        addIncidentReport(incidentReport)
    }



 //handles submit event with ShiftLog object key values -FIX ANY
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let year: any = d.getFullYear();
        let month: any = d.getMonth() +1;
        let day: any = d.getDate();
        let hours: any = d.getHours();
        let minutes: any = d.getMinutes();

        if (minutes < 10){
            minutes = '0' + minutes;
        }

        // IS THIS CORRECT?
        // let _id = new ObjectId();
        
        onSubmit({
            author,
            supervisor,
            incident,
            witnesses,
            year,
            month,
            day,
            hours,
            minutes,
        });
        // onClose();
        setAuthor("");
        setSupervisor("");
        setIncident("");
        setWitnesses([]);
    } 

    // functions to handle creation of shiftlog - FIX ANY
    const newAuthor = (e: any) => setAuthor(e.target.value);
    const newSupervisor = (e: any) => setSupervisor(e.target.value);
    const newIncident = (e: any) => setIncident(e.target.value);
    const newWitnesses = (e: any) => setWitnesses(e.target.value);







    return (
        <main className="SubmitIncidentReportContainer">
            <form className="incidentInputForm InputForm" action="submit">
                <div className="incidentInputInfoContainer">
                    <section className="AuthSupStyle">
                        <label htmlFor="author">Name:</label>
                        <input type="text" name="author" id="author" value={author} onChange={newAuthor}/><br/>
                    </section>
                    <section className="AuthSupStyle">
                        <label htmlFor="supervisor">Supervisor:</label>
                        <input type="text" name="supervisor" id="supervisor" value={supervisor} onChange={newSupervisor}/>
                    </section>
                </div>
                <label htmlFor="incidentEntry">Log Here:</label><br/>
                <textarea className="IncidentTextArea"name="incidentEntry" id="incidentEntry" required minLength={10} rows={16} value={incident} onChange={newIncident}/><br/>

                <label htmlFor="witnesses">Witnesses:</label><br/>
                <input type="text" name="witnesses" id="witnesses" value={witnesses} onChange={newWitnesses}/><br/>

                <button className="SubmitButton" id="incidentSubmitButton" type="submit" onClick={handlesubmit}>Submit Report</button>
            </form>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}

export default SubmitIncidentReport;