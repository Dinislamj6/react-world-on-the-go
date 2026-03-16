import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries/Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [flags, setFlags] = useState([])

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    const handelVisitedCountries = (country) => {
        console.log("handel visited click", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handelVisitedFlag = (flag) => {
        console.log("click visited flag");
        console.log(flag)
        const newVisitedFlags = [...flags, flag]
        setFlags(newVisitedFlags)
    }



    return (
        <div >
            <div style={{textAlign:"center",}}>
                <h2 >In the countries: {countries.length}</h2>
                <h3 >Total Country Visited:{visitedCountries.length} </h3>
                <h3>Total visited Flags : {flags.length}</h3>
            </div>
            <ol>
                {
                    visitedCountries.map(visitedCountry => {
                        return  <li>{visitedCountry.name.common}</li>
                        
                    })
                }
            </ol>
            
            <div className='visited-flags-container'>
                {
                    flags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handelVisitedCountries={handelVisitedCountries}
                        handelVisitedFlag={handelVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;