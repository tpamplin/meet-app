import React, { useState } from 'react';



const CitySearch = ({ allLocations }) => {
    //Set States
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);
    };

    return (
        <div id='city-search'>
            <input 
                type="text"
                className="city"
                placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            { 
                showSuggestions ?
                    <ul className="suggestions">
                        {suggestions.map((suggestion) => {
                            return<li key={suggestion}>{suggestion}</li>
                        })}
                        <li key='See all cities'>See all cities</li>
                    </ul>
                : null
            }
        </div>
    )
}

export default CitySearch;