import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportItem.css';
import { useState } from "react";

// icons
import deleteIcon from "../../Icons/delete.svg";
import IncidentReportUpdater from "../IncidentReportUpdater/IncidentReportUpdater";




interface Props {
    incident: IncidentReport
    deleteReport: () => void; 
    updateIncidentSubmit: (report: IncidentReport) => void;
}

const IncidentReportItem = ({incident, deleteReport, updateIncidentSubmit}: Props) => {

    // state controlling if modal is seen or not.
    const [updateForm, setUpdateForm] = useState<string>("hidden");


    // update hidden through state
    const handleHidden = () => {
        if(updateForm === "hidden"){
            setUpdateForm("ShiftUpdaterForm");
        } else if(updateForm === "ShiftUpdaterForm"){
            setUpdateForm("hidden");
        }
    }


    
    return (
        <main className="IncidentReportLogContainer">
            <section className="ReportHeaderSection">
                <section>
                    <span>Date: {incident.month}/{incident.day}/{incident.year}</span>
                    <span> Time: {incident.hours}:{incident.minutes}</span>
                </section>
                <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
                <section>
                    <IncidentReportUpdater
                        report={incident}
                        updateForm={updateForm}
                        updateIncidentSubmit={updateIncidentSubmit}
                        updateHidden={handleHidden}
                    />
                </section>
            </section>
            <section className="incident-author-supervisor-section">
                <p>Author: {incident.author}</p>
                <p>Supervisor: {incident.supervisor}</p>
            </section>
            <section>
                <p>Log Text: {incident.incident}</p>
                <p>Witness: {incident.witnesses}</p>
            </section>
        </main>
    )
}

export default IncidentReportItem;