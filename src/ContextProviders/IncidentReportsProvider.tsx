import { createContext, ReactNode, useState } from "react";
import { IncidentReport } from "../Model/Interfaces";


interface IncidentReportsContext {
    incidentReports: IncidentReport[]
}


const IncidentReportsDefaultValue: IncidentReportsContext= {
    incidentReports: []
}


export const IncidentReportsContext = createContext(IncidentReportsDefaultValue);

export const IncidentReportsContextProvider = ({children}: {children: ReactNode}) => {

    const [incidentReports, setIncidentReports] = useState<IncidentReport[]>([])



    return (<IncidentReportsContext.Provider value={ {incidentReports} }>
        {children}
    </IncidentReportsContext.Provider>)
};