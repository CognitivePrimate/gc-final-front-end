import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogItem.css';

// icons
import deleteIcon from "../../Icons/delete.svg";


interface Props {
    log: ShiftLog,
    deleteReport: () => void;
}

const ShiftLogItem = ({log, deleteReport}: Props) => {

    return (
        <main className="ShiftLogContainer">
            <section className="LogAuthorTime">
                <section className="AuthDateSection">
                    <p className="ParaInfo">{log.author}</p>
                    <p className="ParaInfo">{log.month}/{log.day}/{log.year}</p>
                </section>
                <button className="DeleteButton" type="button" onClick={deleteReport}><img src={deleteIcon} alt="delete button" /></button>
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