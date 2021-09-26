import { useState, FormEvent } from "react";
import { IncidentReport } from "../../Model/Interfaces";
import './IncidentReportUpdater.css' ;
import UpdateButton from "../ButtonComponents/UpdateButton/UpdateButton";
import ModalCloseButton from "../ButtonComponents/ModalCloseButton/ModalCloseButton";





interface Props {
    report: IncidentReport;
    updateForm: string;
    updateIncidentSubmit: (report: IncidentReport) => void;
    updateHidden: () => void;
}

const IncidentReportUpdater = ({report, updateForm, updateIncidentSubmit, updateHidden}: Props) => {

    const [pendingReport, setPendingReport] = useState<IncidentReport>({
        ...report,
    });

    const preventReload = (e: FormEvent) => {
        e.preventDefault();
        updateIncidentSubmit(pendingReport);

        // separation of concerns. Parent shouldn't be concerned //
    }

    return(
        <main className="IncidentReportUpdaterContainer">
            <UpdateButton
                updateHidden={updateHidden}
            />
            <section className={updateForm}>
                <form action="submit" className="InputFormUpdater"onSubmit={preventReload}>
                    <ModalCloseButton
                    updateHidden={updateHidden}
                    />
                    <h3 className="NewLogTitle">Update Incident</h3>
                    <div className="logInputInfoContainer">
                        <div className="InputOptions">
                            <label htmlFor="author">Name</label>
                            <input type="text" name="author" id="author" value={pendingReport.author} onChange={(e) => setPendingReport({...report, author: e.target.value})}/>
                        </div>
                        <div className="InputOptions">
                            <label htmlFor="supervisor">Supervisor</label>
                            <input type="text" name="supervisor" id="supervisor" value={pendingReport.supervisor} onChange={(e) => setPendingReport({...report, supervisor: e.target.value})}/>
                        </div>
                    </div>
                    <div className="InputOptions">
                        <label htmlFor="logEntry">Incident Here:</label><br/>
                        <textarea name="logEntry" id="logEntry" className="logEntry" value={pendingReport.incident} onChange={(e) => setPendingReport({...report, incident: e.target.value})} required minLength={2} rows={8}/><br />
                    </div>
                    <div className="SubmitButtonContainer">
                        <button className="SubmitButton" id="logSubmitButton" type="submit" >Update Incident</button>
                    </div>
                </form>
            </section>


        </main>
    )
}


export default IncidentReportUpdater;