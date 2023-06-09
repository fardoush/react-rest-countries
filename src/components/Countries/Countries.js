import './Countries.css';

import React, { useEffect, useState } from 'react';

import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    
    return (
    <div>

        <h1>Countries: {countries.length} </h1>

        <div className='countries-container'>

            {
                // countries.map( country => console.log(country))
                countries.map( country =>
                    //  <Country name={country.name.common} population={country.population} area={country.area}></Country>
                     <Country country={country}
                     key={country.cca3}></Country>
                     )
            }
        </div>
        </div>
    );
};

export default Countries;