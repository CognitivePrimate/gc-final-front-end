import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import { ShiftLog } from "../../Model/Interfaces";
import { fetchShiftLogs } from "../../services";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";



const DailyShiftLog = () => {

    // const {shiftLogs} = useContext(ShiftLogContext);
    const loadDailyShiftLogs = () => {
        fetchShiftLogs().then(setDailyShiftLogs);
    }

    const [dailyShiftLogs, setDailyShiftLogs] = useState<ShiftLog[]>([]);
    useEffect(loadDailyShiftLogs, []);

    




    return (
        <main>
            <section>
                {dailyShiftLogs.map((log, index) =>
                    <ShiftLogItem
                        key={log.author}
                        log={log}
                        />
                )}
            </section>

            <Link to="/HomeScreen"><button>Back</button></Link>
        </main>
    )
}

export default DailyShiftLog;