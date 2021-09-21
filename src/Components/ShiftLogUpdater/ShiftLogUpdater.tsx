import { ShiftLog } from "../../Model/Interfaces";
import './ShiftLogUpdater.css';


interface Props {
    shiftLog: ShiftLog;
    UpdateForm: string;
    updateLog: () => void;
    updateHidden: () => void;
}

const ShiftLogUpdater = ({shiftLog, UpdateForm, updateLog, updateHidden}: Props) => {

    return(
        <main className="ShiftLogUpdaterContainer">
            <section>
                <button onClick={updateHidden}>E</button>
            </section>
            <form action="submit" className={UpdateForm} onSubmit={updateLog}>
                <div onClick={updateHidden}>E</div>
                <h3 className="NewLogTitle">Update Log</h3>
                <div className="logInputInfoContainer">
                    <div className="InputOptions">
                        <label htmlFor="author">Name</label>
                        <input type="text" name="author" id="author" value={shiftLog.author}/>
                    </div>
                    <div className="InputOptions">
                        <label htmlFor="supervisor">Supervisor</label>
                        <input type="text" name="supervisor" id="supervisor" value={shiftLog.supervisor}/>
                    </div>
                </div>
                <label htmlFor="logEntry">Log Here:</label><br/>
                <textarea name="logEntry" id="logEntry" className="logEntry" value={shiftLog.logText} required minLength={2} rows={8}/><br />
            </form>


        </main>
    )
}


export default ShiftLogUpdater;