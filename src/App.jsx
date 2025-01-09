import React, {useState, useEffect} from 'react';
import NumberOfEvents from './components/NumberOfEvents'
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from "./api";

const App = () => {

  //State Declarations
  const [currentNOE, setCurrentNOE] = useState(32); //The current number of events shown on screen
  const [events, setEvents] = useState([]); //An array of all events currently shown on screen
  const [allLocations, setAllLocations] = useState([]); // An array of all locations in which there are events
  const [currentCity, setCurrentCity] =useState("See all cities"); // The city that you are currently viewing events for. (all by default)

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
    fetchData();
  }, [currentCity, currentNOE]);
  

  return (
    <div className='app'>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />      
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
      />
      <EventList events={events} />


    </div>
  )
}

export default App;
