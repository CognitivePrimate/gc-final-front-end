import { createContext, ReactNode, useEffect, useState } from "react";

import { ShiftLog } from "../Model/Interfaces";

export interface ShiftLogContextModel {
    shiftLogs: ShiftLog[];
    addLog: (shiftLog: ShiftLog) => void;
    removeLog: (index: number) => void;
}

const shiftLogDefaultValue: ShiftLogContextModel = {
    shiftLogs: [],
    addLog: () => {},
    removeLog: () => {}
}

export const ShiftLogContext = createContext(shiftLogDefaultValue);

export const ShiftLogContextProvider = ({children}: {children: ReactNode}) => {
    const [shiftLogs, setShiftLogs] = useState<ShiftLog[]>([])

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



    return ()
    

}