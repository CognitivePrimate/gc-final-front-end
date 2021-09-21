import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";
import ShiftLogUpdater from "../ShiftLogUpdater/ShiftLogUpdater";
import { useState } from "react";


interface Props {
    log: ShiftLog;
    // UpdateForm: string;
    deleteReport: () => void;
    updateLog: () => void;
    // updateHidden: () => void;
}

const ShiftLogItem = ({log, deleteReport, updateLog}: Props) => {

    const [updateForm, setUpdateForm] = useState<string>("hidden");

    const handleHidden = () => {
        if(updateForm === "hidden"){
            setUpdateForm("ShiftUpdaterForm");
        } else if(updateForm === "ShiftUpdaterForm"){
            setUpdateForm("hidden");
        }
    }

    return (
        <main className="ShiftLogContainer">
            <section className="LogAuthorTime">
                <section className="AuthDateSection">
                    <p className="ParaInfo">{log.author}</p>
                    <p className="ParaInfo">{log.month}/{log.day}/{log.year}</p>
                </section>
                <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
                <section>
                    <ShiftLogUpdater
                        shiftLog={log}
                        UpdateForm={updateForm}
                        updateLog={updateLog}
                        updateHidden={handleHidden}
                    />
                </section>
            </section>
            <section className="LogTextContainer">
                <section>
                    <p>Supervisor: {log.supervisor}</p>
                    <p>Log Time: {log.hours}:{log.minutes} </p>
                </section>
                <p>{log.logText}</p>
            </section>
        </main>
    )
}

export default ShiftLogItem;