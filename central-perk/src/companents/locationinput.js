import React, { useState } from 'react';

const LocationInput = ({ onAddLocation }) => {
    const [location, setLocation] = useState('');

    const handleAdd = () => {
        if (location.trim()) {
            onAddLocation(location);
            setLocation('');
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <input
                type="text"
                placeholder="Enter a location or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={handleAdd} style={{ marginLeft: '10px', padding: '10px' }}>
                Add
            </button>
        </div>
    );
};

export default LocationInput;
