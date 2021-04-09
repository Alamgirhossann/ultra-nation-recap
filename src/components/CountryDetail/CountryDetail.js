import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState([]);
    console.log(countryDetail);
    useEffect(() => {
         fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res=> res.json())
        .then(data =>{
            setCountryDetail(data[0])
            console.log(data);
        })
        .catch(error=> console.log(error))
        
    },[])
    const countryDetailStyle={
        border: '4px solid purple',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px',
        textAlign: 'center'
    }
    return (
        <div style={countryDetailStyle}>
            <h1>Here is the detail about the country {countryName}</h1>
            <h2>Name: {countryDetail.name} </h2>
            <h4>Region: {countryDetail.region} </h4>
            <h4>Capital: {countryDetail.capital} </h4>
            <p>Population: {countryDetail.population} </p>
        </div>
    );
};

export default CountryDetail;