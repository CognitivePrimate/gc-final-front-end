import React from 'react';
import { findByText, getByTestId, getByText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import NewLogEntry from './Components/NewShiftLogEntry/new-log-entry';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import IncidentReportLogs from './Components/IncidentReportLogs/IncidentReportLogs';
import DailyShiftLog from './Components/DailyShiftLog/DailyShiftLog';
import ShiftLogItem from './Components/ShiftLogItem/ShiftLogItem';
import { act } from 'react-dom/test-utils';
import SubmitEmergencyContact from './Components/SubmitEmergencyContact/SubmitEmergencyContact';
import Header from './Components/Header/header';
import ScheduleList from './Components/Schedule/Schedule';
import WeatherHeader from './Components/WeatherHeader/weather-header';


// test 1
test('renders logo component', () => {
  render(<App />);
  const LogoElement = screen.getByText(/SkedMan/i);
  expect(LogoElement).toBeInTheDocument();
});

// test 2
test('renders submit button in new log page', () => {
  render(
    <BrowserRouter>
       <NewLogEntry />
    </BrowserRouter>
  );
  const buttonElement = screen.getByRole("button", { name: "Submit Log" });
  expect(buttonElement).toBeInTheDocument();
});

// test 3
test('renders search log container', () => {
  render(
    <BrowserRouter>
       <DailyShiftLog />
    </BrowserRouter>
  );
  const nameInput = screen.getByPlaceholderText("Name");
  expect(nameInput).toBeInTheDocument();
});

// test 4
test('renders incident report search container', () => {
  render(
    <BrowserRouter>
        <IncidentReportLogs />
    </BrowserRouter>
  );
    act(() => {
      const nameInput = screen.getByPlaceholderText("Name");
      expect(nameInput).toBeInTheDocument();
    })
});

// test 5
test('renders add emergency contact container', () => {
  render(
    <BrowserRouter>
       <SubmitEmergencyContact />
    </BrowserRouter>
  );
  act(() => {
    const nameInput = screen.getByPlaceholderText("First Name");
    expect(nameInput).toBeInTheDocument();
  })
  
});

// test 6
test("renders headers", () => {
  render(
    <BrowserRouter>
       <Header />
    </BrowserRouter>
    );
  const headerText = screen.getByText(/Your Company/);
  expect(headerText).toBeInTheDocument();
})

// test 7
it("nothing in schedule component form before searching template", () => {
  render(
    <BrowserRouter>
       <ScheduleList />
    </BrowserRouter>
    );
  const form = screen.queryByRole("form");
  expect(form).not.toBeInTheDocument();
})

// test 8
test("weather header renders correctly", () => {
  render(
    <BrowserRouter>
      <WeatherHeader />
    </BrowserRouter>
  );
    const sunset = screen.getByText(/Sunset/);
    expect(sunset).toBeInTheDocument();
})



