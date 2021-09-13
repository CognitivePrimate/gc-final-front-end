import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShiftLogContext } from "../../ContextProviders/ShiftLogProvider";
import ShiftLogItem from "../ShiftLogItem/ShiftLogItem";



const DailyShiftLog = () => {

    const {shiftLogs} = useContext(ShiftLogContext);

    return (
        <main>
            <section>
                {shiftLogs.map((log, index) =>
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