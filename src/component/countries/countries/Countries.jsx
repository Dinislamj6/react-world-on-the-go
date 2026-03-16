import React, { use } from 'react';
import Country from './Country/Country';
import '../countries/Country/'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise) 
    const countries = countriesData.countries
   
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;