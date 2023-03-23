import './Country.css';

import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {population,region,area,name,flags} = props.country;
    return (
  
<div className='country-innr'>
<div className='country'>
<img src={flags.png} alt="" className="" />
<h2 className="">Country Name: {name.common}</h2> 
            <p className="">Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p className="">Area: {area}</p>

            </div> 
        </div>
    );
};

export default Country;