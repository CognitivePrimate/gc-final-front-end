import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogItem.css';


interface Props {
    log: ShiftLog
}

const ShiftLogItem = ({log}: Props) => {

    return (
        <main className="ShiftLogContainer">
            <section className="LogAuthorTime">
                {/* <button className="DeleteButton">X</button> */}
                <p>{log.author}</p>
                <p>{log.month}/{log.day}/{log.year}</p>
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