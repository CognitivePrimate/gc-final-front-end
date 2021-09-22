import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";
import ShiftLogUpdater from "../ShiftLogUpdater/ShiftLogUpdater";
import { FormEvent, useState } from "react";
import { updateShiftLog } from "../../services";


interface Props {
    log: ShiftLog;
    deleteReport: () => void;
    updateLogSubmit: (shiftLog: ShiftLog) => void;
}

const ShiftLogItem = ({log, deleteReport, updateLogSubmit}: Props) => {

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
                        updateLogSubmit={updateLogSubmit}
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