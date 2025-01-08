import React, {useState} from 'react';


const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {

    const handleInputChange = (event) => {
        const numberInput = event.target.value;
        setCurrentNOE(numberInput);
    }

    return (
        <div id='number-of-events'>
            <label>Number of Events:</label>
            <input type="text" value={currentNOE} onChange={handleInputChange} />
        </div>
    );
}

export default NumberOfEvents