import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/home';
import Results from './pages/results';
import axios from 'axios';

const App = () => {
    const [page, setPage] = useState('home');
    const [center, setCenter] = useState(null);
    const [locations, setLocations] = useState([]);
    const [places, setPlaces] = useState([]);

    const handleLocationsSubmit = async (locations) => {
        // Call backend to calculate center and fetch places
        const response = await axios.post('/api/find-central', { locations });
        setCenter(response.data.center);
        setPlaces(response.data.places);
        setLocations(response.data.locations);
        setPage('results');
    };

    return (
        <div>
            <Header />
            {page === 'home' && <Home onLocationsSubmit={handleLocationsSubmit} />}
            {page === 'results' && <Results center={center} places={places} locations={locations} />}
        </div>
    );
};

export default App;
