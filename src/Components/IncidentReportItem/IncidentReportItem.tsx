import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportItem.css';
import { useState } from "react";
import IncidentReportUpdater from "../IncidentReportUpdater/IncidentReportUpdater";
import DeleteButton from "../ButtonComponents/DeleteButton/DeleteButton";






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
            <section className="ReportHeaderSection ReportLogSections">
                <section>
                    <span>Date: {incident.month}/{incident.day}/{incident.year}</span>
                    <span> Time: {incident.hours}:{incident.minutes}</span>
                </section>
            </section>
            <section className="incident-author-supervisor-section ReportLogSections">
                <div>
                    <p>Author: {incident.author}</p>
                    <p>Supervisor: {incident.supervisor}</p>
                </div>
                <section className="UpdateDeletecontainer">
                        <IncidentReportUpdater
                            report={incident}
                            updateForm={updateForm}
                            updateIncidentSubmit={updateIncidentSubmit}
                            updateHidden={handleHidden}
                        />
                        <DeleteButton
                        deleteReport={deleteReport}
                        />
                </section>
            </section>
            <section className="ReportLogSections">
                <p>Log Text: {incident.incident}</p>
                <p>Witness: {incident.witnesses}</p>
            </section>
        </main>
    )
}

export default IncidentReportItem;