import React from 'react';
import MapDisplay from '../components/MapDisplay';
import PlaceCard from '../components/PlaceCard';

const Results = ({ center, places, locations }) => {
    return (
        <div>
            <MapDisplay center={center} locations={locations} places={places} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {places.map((place, idx) => (
                    <PlaceCard key={idx} place={place} />
                ))}
            </div>
        </div>
    );
};

export default Results;
