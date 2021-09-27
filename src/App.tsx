import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';



// imported components
import Header from './Components/Header/header';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import NewLogEntry from './Components/NewShiftLogEntry/new-log-entry';
import DailyShiftLog from './Components/DailyShiftLog/DailyShiftLog';
import SubmitIncidentReport from './Components/SubmitIncidentReport/SubmitIncidentReport';
import IncidentReportLogs from './Components/IncidentReportLogs/IncidentReportLogs';
import ScheduleCreation from './Components/ScheduleCreation/schedule-creation';
import { AuthContextProvider } from './ContextProviders/auth-context';
import SubmitEmergencyContact from './Components/SubmitEmergencyContact/SubmitEmergencyContact';
import EmergencyContacts from './Components/EmergencyContacts/EmergencyContacts';
import Schedule from './Components/Schedule/Schedule';
import DesktopFooter from './Components/DesktopFooter/DesktopFooter';



function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <LoginScreen/>
        </Route>

        <Route path="/NewLogEntry">
          <NewLogEntry/>
          <DesktopFooter/>
        </Route>

          <Route path="/DailyShiftLog" exact>
              <DailyShiftLog/>
              <DesktopFooter/>
          </Route>

        <Route path="/SubmitIncidentReport" exact>
            <SubmitIncidentReport/>
            <DesktopFooter/>
        </Route>

          <Route path="/IncidentReportLogs" exact>
              <IncidentReportLogs/>
              <DesktopFooter/>
          </Route>
 

          <Route path="/SubmitEmergencyContact" exact>
              <SubmitEmergencyContact/>
              <DesktopFooter/>
          </Route>

          <Route path="/EmergencyContacts" exact>
            <EmergencyContacts/>
            <DesktopFooter/>
          </Route>

        <Route path="/ScheduleCreation" exact>
          <ScheduleCreation />
          <DesktopFooter/>
        </Route>

        <Route path="/Schedule" exact>
            <Schedule/>
            <DesktopFooter/>
        </Route>

        
      </Router>
    </div>
    </AuthContextProvider>
  );
}

export default App;
