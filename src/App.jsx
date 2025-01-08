import React, {useState} from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { extractLocations, getEvents } from "./api";

const App = () => {

  const [allLocations, setAllLocations] = useState([])

  const fetchData = async () => {
    const allEvents = await getEvents();
    setAllLocations(extractLocations(allEvents));
  }

  fetchData();
  
  return (
    <div className='app'>
      <CitySearch allLocations={allLocations}/>
      <EventList events={events}/>
    </div>
  )
}

export default App;
