import React from 'react';

const PlaceCard = ({ place }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h4>{place.name}</h4>
            <p>Rating: {place.rating}</p>
            <p>{place.vicinity}</p>
        </div>
    );
};

export default PlaceCard;
