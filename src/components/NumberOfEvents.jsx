import React, {useState} from 'react';


const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {

    const [number, setNumber] = useState(currentNOE);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumber(value)
        if(isNaN(value) || value <= 0) {
            setErrorAlert('Enter a valid number');
        } else if (value > 32) {
            setErrorAlert('Only maximum of 32 is allowed');
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }
    };

    return (
        <div id='number-of-events'>
            <label>Number of Events:</label>
            <input type="text" value={number} onChange={handleInputChange} />
        </div>
    );
}

export default NumberOfEvents