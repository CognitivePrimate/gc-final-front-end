import { createContext, ReactNode, useState } from "react";
import { ShiftLog } from "../Model/Interfaces";

export interface ShiftLogContextModel {
    shiftLogs: ShiftLog[];
    addLog: (shiftLog: ShiftLog) => void;
    removeLog: (index: number) => void;
}

const ShiftLogDefaultValue: ShiftLogContextModel = {
    shiftLogs: [],
    addLog: () => {},
    removeLog: () => {}
}

export const ShiftLogContext = createContext(ShiftLogDefaultValue);

export function ShiftLogContextProvider({children}: {children: ReactNode}) {
    const [shiftLogs, setShiftLogs] = useState<ShiftLog[]>([
        {
            author: 'Austin',
            supervisor: 'Kyle',
            logText: 'This is a test log',
        }
    ])

    const addLog = (shiftLog: ShiftLog): void => {
        setShiftLogs(prevShiftLogs => [
            ...prevShiftLogs,
            shiftLog
        ]);
    }

    const removeLog = (index: number): void => {
        setShiftLogs(prevShiftLogs => [
            ...prevShiftLogs.slice(0, index),
            ...prevShiftLogs.slice(index +1)
        ])
    }

    // return()WHAT IS HAPPENING HERE?!
    return(
        <ShiftLogContext.Provider value={{shiftLogs, addLog, removeLog}}>
            {children}
        </ShiftLogContext.Provider>
    )
    

};