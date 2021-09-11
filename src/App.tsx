import React from 'react';
import './App.css';
import {ItemContextProvider} from './ContextProviders/WeatherLocationProvider'





// Austin's comment for initial commit 



///// ** list of components ** //////


// TO-DO//

// 1. LoginAuthentication
// 2. Header
// 3. HomeScreen
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

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Header />
      </ItemContextProvider>



    </div>
  );
}

export default App;
