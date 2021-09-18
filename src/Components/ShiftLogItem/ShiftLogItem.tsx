
// export interface ShiftLog {
//     author: string;
//     supervisor?: string;
//     logText: string;
//     year: Date;
//     month: Date;
//     day: Date;
//     time: Date;
// } 

import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogItem.css';

// import { ShiftLog } from "../../Model/Interfaces";

interface Props {
    log: ShiftLog
}

const ShiftLogItem = ({log}: Props) => {

    return (
        <main className="ShiftLogContainer">
            <section className="LogAuthorTime">
                <p>Author: {log.author}</p>
                <p>time: {log.time}</p>
            </section>
            <section className="LogTextContainer">
                <section>
                    <p>Supervisor: {log.supervisor}</p>
                    <p>Date: {log.month}/{log.day}/{log.year}</p>
                </section>
                <p>{log.logText}</p>
            </section>
        </main>
    )
}

export default ShiftLogItem;