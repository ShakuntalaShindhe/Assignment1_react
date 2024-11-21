import React, { useEffect, useState } from 'react';
import './Country.css';

const Country = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
                const result = await response.json();
                setItems(result);
            } catch (error) {
                console.log('Error', error);
            }
        };

        if (search !== '') { 
          fetchCountries();
         } else {
           setItems([]);
         }
    }, [search]);

    return (
        <div className='mainDiv'>
            <h2>Country Search</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter country name" /> 
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name.common}</h2>
                        <img src={item.flags.svg} width='100' alt={`Flag of ${item.name.common}`} />
                        <p><strong>Capital:</strong> {item.capital}</p>
                        <p><strong>Population:</strong> {item.population}</p>
                        <p><strong>Region:</strong> {item.region}</p>
                    </div>
                ))
            ) : (
              <p>No countries found</p>
            )}
        </div>
    );
};

export default Country;
