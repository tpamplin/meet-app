import React, {useState} from 'react';


const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {

    const [number, setNumber] = useState(currentNOE);
    const handleInputChange = (event) => {
        const numberInput = event.target.value;
        setCurrentNOE(numberInput);
        setNumber(numberInput)
    }

    return (
        <div id='number-of-events'>
            <label>Number of Events:</label>
            <input type="text" value={number} onChange={handleInputChange} />
        </div>
    );
}

export default NumberOfEvents