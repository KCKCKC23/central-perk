import React, { useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapDisplay = ({ center, locations, places }) => {
    const mapContainerStyle = { width: '100%', height: '400px' };

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
        >
            {locations.map((loc, idx) => (
                <Marker key={idx} position={loc} />
            ))}
            {places.map((place, idx) => (
                <Marker
                    key={idx}
                    position={place.geometry.location}
                    label={place.name}
                />
            ))}
        </GoogleMap>
    );
};

export default MapDisplay;