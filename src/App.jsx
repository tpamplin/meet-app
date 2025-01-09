import React, {useState, useEffect} from 'react';
import NumberOfEvents from './components/NumberOfEvents'
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from "./api";

const App = () => {

  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);


  const fetchData = async () => { 
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className='app'>
      <CitySearch allLocations={allLocations}/>      
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
      />
      <EventList events={events} />


    </div>
  )
}

export default App;
