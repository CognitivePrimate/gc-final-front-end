import { FormEvent, useState } from "react";
import { ShiftLog } from "../../Model/Interfaces";

// interface Props {
//     onClose: () => void;
//     onSubmit: (log: ShiftLog) => void;
// }

const NewLogEntry = () => {
   const [author, setAuthor] = useState("");
   const [supervisor, setSupervisor] = useState("");
   const [logText, setLogText] = useState("");

 //takes all log items to compile into shift log object
   const [shiftLogs, setShiftLogs] = useState<ShiftLog[]>([]);

 //functions to handle onSubmit
   const onSubmit = (log: ShiftLog) => {
       setShiftLogs(prevShiftLogs => [
           ...prevShiftLogs,
           log
       ])
   }    

 //handles submit event with ShiftLog object key values -FIX ANY
   const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        const d: Date = new Date();
        let year: any = d.getFullYear();
        let month: any = d.getMonth();
        let day: any = d.getDate();
        let time: any = Date.now();
        
        onSubmit({
            author,
            supervisor,
            logText,
            year,
            month,
            day,
            time
        });
        // onClose();
        setAuthor("");
        setSupervisor("");
        setLogText("");
    } 

    // functions to handle creation of shiftlog - FIX ANY
    const newAuthor = (e: any) => setAuthor(e.target.value);
    const newSupervisor = (e: any) => setSupervisor(e.target.value);
    const newLogText = (e: any) => setLogText(e.target.value);



    return (
        <form className="logInputForm">
            <div className="logInputInfoContainer">
                <label htmlFor="author">Name</label>
                <input type="text" name="author" id="author" value={author} onChange={newAuthor} />

                <label htmlFor="supervisor">Supervisor</label>
                <input type="text" name="supervisor" id="supervisor" value={supervisor} onChange={newSupervisor} />
            </div>
            <label htmlFor="logEntry">Log Here:</label><br/>
            <input type="textArea" name="logEntry" id="logEntry" value={logText} onChange={newLogText} />
            <button id="logSubmitButton" type="submit" onClick={handlesubmit}>Submit Log</button>

        </form>
    );
}


export default NewLogEntry