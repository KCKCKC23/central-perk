import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';

const Home = ({ onLocationsSubmit }) => {
    const [locations, setLocations] = useState([]);

    const addLocation = (location) => {
        setLocations([...locations, location]);
    };

    const handleSubmit = () => {
        onLocationsSubmit(locations);
    };

    return (
        <div>
            <LocationInput onAddLocation={addLocation} />
            <ul>
                {locations.map((loc, idx) => (
                    <li key={idx}>{loc}</li>
                ))}
            </ul>
            <button onClick={handleSubmit} style={{ padding: '10px', marginTop: '20px' }}>
                Find Hangout Spots
            </button>
        </div>
    );
};

export default Home;
