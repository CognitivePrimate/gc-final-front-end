import { FormEvent, useState } from "react";
import { ShiftLog } from "../../Model/Interfaces";

interface Props {
    onClose: () => void;
    onSubmit: (log: ShiftLog) => void;
}

const NewLogEntry = ({onClose, onSubmit}: Props) => {
   const [author, setAuthor] = useState("");
   const [supervisor, setSupervisor] = useState("");
   const [logText, setLogText] = useState("");

 //handles submit event with ShiftLog object key values
   const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    const d: Date = new Date();
    let year: Date = d.getFullYear()
    onSubmit({
        author,
        supervisor?,
        logText,
        year,
        month,
        number,
        day,
        time
    })
   } 



    return ();
}


export default NewLogEntry