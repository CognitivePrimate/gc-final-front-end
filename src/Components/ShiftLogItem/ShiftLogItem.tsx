
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

// import { ShiftLog } from "../../Model/Interfaces";

interface Props {
    log: ShiftLog
}

const ShiftLogItem = ({log}: Props) => {

    return (
        <main>
            <section className="log-author-supervisor-section">
                <p>Author:{log.author}</p>
                <p>Supervvisor: {log.supervisor}</p>
            </section>
            <section>
                <p>Log Text: {log.logText}</p>
            </section>
        </main>
    )
}

export default ShiftLogItem;