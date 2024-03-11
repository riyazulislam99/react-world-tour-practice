import { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, population, area, flags } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt={name.common} />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>

            <div className='btn'>
                <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
                <button onClick={() => handleVisitedCountry(country, flags.png)}>Mark Visited</button>
            </div>
            {
                (visited ? 'I have visited this country.' : 'I want to visit.')
            }
        </div>
    );
};

export default Country;