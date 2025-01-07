import React from 'react';

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';

const App = () => {
  return (
    <div className='app'>
      <CitySearch />
      <EventList />
    </div>
  )
}

export default App;
