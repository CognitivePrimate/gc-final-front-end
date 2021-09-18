import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import { ShiftLog } from "../../Model/Interfaces";
import { fetchShiftLogs } from "../../services";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";
import './DailyShiftLog.css';



const DailyShiftLog = () => {

    // const {shiftLogs} = useContext(ShiftLogContext);
    const loadDailyShiftLogs = () => {
        fetchShiftLogs().then(setDailyShiftLogs);
    }

    const [dailyShiftLogs, setDailyShiftLogs] = useState<ShiftLog[]>([]);
    useEffect(loadDailyShiftLogs, []);

    




    return (
        <main className="DailyShiftLogContainer">
            <section>
                {dailyShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={log.author}
                        log={log}
                        />
                )}
            </section>
            <section className="BackButtonLinkContainer">
                <Link to="/HomeScreen" className="BackButtonLinkContainer"><button className="BackButton">Back</button></Link>
            </section>
        </main>
    )
}

export default DailyShiftLog;