import React, { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className='event'>
            <div>
                <h2>{event.summary}</h2>
                <h3>{event.location}</h3>
                <h3>{event.created}</h3>
                <button 
                    className="details-button"
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
                {showDetails ? (
                    <p className="details">{event.description}</p>
                ) : (
                    <></>
                )}
            </div>
        </li>
    );
};

export default Event;
