
import { useState } from 'react';
import './Country.css'

const Country = ({country,handelVisitedCountries, handelVisitedFlag}) => {
    
 
    
      const [visited,setVisited] = useState(false)

    const handelVisited = () => {
    //    if(visited){
    //       setVisited(false)
    //    }else{
    //     setVisited(true)
    //    }
                  //2nd way
    //    !visited ? setVisited(true) : setVisited(false)

                //3rd way 
         setVisited(!visited)
         handelVisitedCountries(country)
        
         
       
        
        
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>name :{country.name.common}</h2>
            <p>Population : {country.population.population}</p>
            <p>Capital :{country.capital.capital[0]}</p>
            <p>Area : {country.area.area} {country.area.area > 300000? "big country":"small country"}</p>
            <button onClick={handelVisited}>{visited? "visited": "not visited"}</button>
            <button onClick={() => { handelVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
          
        </div>
    );
};

export default Country;