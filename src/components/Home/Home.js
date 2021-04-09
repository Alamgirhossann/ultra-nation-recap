import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res=> res.json())
        .then(data => {setCountry(data)
        console.log(data)
        })
        .catch(error=>console.log(error))
    }, []);
    return (
        <div>
            <h1>Number of coutries: {country.length} </h1>
            {
                country.map(country => <Country 
                    key={country.alpha3Code}
                    country= {country} ></Country>)
            }
        </div>
    );
};

export default Home;