import React from 'react';
import './App.css';
import {ItemContextProvider} from './ContextProviders/WeatherLocationProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




// Austin's comment for initial commit 



///// ** list of components ** //////


// TO-DO//

// 1. LoginAuthentication
// 2. Header  *created*
// 3. HomeScreen *created*
// 4. SubmitLogEntry
// 5. DailyShiftLog
// 6. Schedule
// 7. SubmitIncidentReport
// 8. EmergencyContacts
// 9. IncidentReportLogs
// 10. Events

///!! Admin Components Only !!///

// 11. AddEmergencyContact
// 12. AddEvent
// 13. VolunteerScheduling

// Completed //



// imported components
import WeatherHeader from "./Components/WeatherHeader/weather-header";
import Header from './Components/Header/header';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import NewLogEntry from './Components/NewShiftLogEntry/new-log-entry';
import DailyShiftLog from './Components/DailyShiftLog/DailyShiftLog';
import SubmitIncidentReport from './Components/SubmitIncidentReport/SubmitIncidentReport';
import IncidentReportLogs from './Components/IncidentReportLogs/IncidentReportLogs';
import {ShiftLogContextProvider} from './ContextProviders/ShiftLogProvider';
import { IncidentReportsContextProvider } from './ContextProviders/IncidentReportsProvider';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ItemContextProvider>
          <WeatherHeader/>
        </ItemContextProvider>

        <Route path="/" exact>
          <LoginScreen/>
        </Route>

        <Route path="/HomeScreen">
          <HomeScreen/>
        </Route>

        <Route path="/NewLogEntry">
          <NewLogEntry/>
        </Route>

        <ShiftLogContextProvider>
          <Route path="/DailyShiftLog" exact>
              <DailyShiftLog/>
          </Route>
        </ShiftLogContextProvider>

        <Route path="/SubmitIncidentReport" exact>
            <SubmitIncidentReport/>
        </Route>

        <IncidentReportsContextProvider>
          <Route path="/IncidentReportLogs" exact>
              <IncidentReportLogs/>
          </Route>
        </IncidentReportsContextProvider>
      </Router>
    </div>
  );
}

export default App;