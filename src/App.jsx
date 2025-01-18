import React, {useState, useEffect} from 'react';
import NumberOfEvents from './components/NumberOfEvents'
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { InfoAlert, ErrorAlert , WarningAlert} from './components/Alert';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { extractLocations, getEvents } from "./api";
import './App.css'

const App = () => {

  //State Declarations
  const [currentNOE, setCurrentNOE] = useState(32); //The current number of events shown on screen
  const [events, setEvents] = useState([]); //An array of all events currently shown on screen
  const [allLocations, setAllLocations] = useState([]); // An array of all locations in which there are events
  const [currentCity, setCurrentCity] = useState("See all cities"); // The city that you are currently viewing events for. (all by default)
  const [infoAlert, setInfoAlert] = useState(""); // Stores the text used in the Info Alert.
  const [errorAlert, setErrorAlert] = useState(""); // Stores the text used in the Error Alert
  const [warningAlert, setWarningAlert] = useState(""); // Stores the text used in Warning Alert

  //Retrieve data, and set all states accordingly.
  const fetchData = async () => { 
    const allEvents = await getEvents(); // Get all events
    const filteredEvents = currentCity === "See all cities" ?
    allEvents :
    allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE)); // Slice them down to the currently selected number of events
    setAllLocations(extractLocations(allEvents)); // Get a list of locations by extracting them from allEvents
  };

  // Initialize our state.
  useEffect(() => {
    let warningText;
    if(navigator.onLine) {
      warningText = "";
    } else {
      warningText = "You are offline, loading events from local storage."
    }
    setWarningAlert(warningText)
    fetchData();
  }, [currentCity, currentNOE]);
  

  return (
    <div className='app'>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <h1 id="page-title">Meet Up!</h1>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />      
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container">
        <CityEventsChart allLocations={allLocations} events={events} />
        <EventGenresChart events={events} />
      </div>
      <EventList events={events} />


    </div>
  )
}

export default App;
