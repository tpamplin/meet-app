import React, {useState} from 'react';


const NumberOfEvents = ({currentNOE, setCurrentNOE, setErrorAlert}) => {

    const [number, setNumber] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);

        let errorText;
        if (value < 1 || isNaN(value) || value > 32) {
            errorText = "Number of events must be a positive integer, and must not exceed 32";
        } else {
            setCurrentNOE(value);

            errorText = ''
        }
        setErrorAlert(errorText)
    }

    return (
        <div id='number-of-events'>
            <label>Number of Events:</label>
            <input type="text" value={number} onChange={handleInputChanged} />
        </div>
    );

};


export default NumberOfEvents