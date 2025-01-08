import React, {useState} from 'react';

import NumberOfEvents from './components/NumberOfEvents'
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from "./api";

const App = () => {

  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([])
  const [allEvents, setAllEvents] = useState([])

  const fetchData = async () => {
    const events = await getEvents();
    setAllEvents(events)
    setAllLocations(extractLocations(allEvents));
  }

  fetchData();
  
  return (
    <div className='app'>
      <CitySearch allLocations={allLocations}/>
      <EventList events={allEvents}/>
      <NumberOfEvents 
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
      />

    </div>
  )
}

export default App;
