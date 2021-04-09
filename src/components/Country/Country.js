import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, region, alpha3Code} = props.country;
    // console.log(props.country);
    const countryStyle={
        border: '4px solid purple',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style= {countryStyle}>
            <h1>Country Name: {name} </h1>
            <h2>Region: {region} </h2>
    <Link to={`/country/${name}`}>Show Detail{alpha3Code}</Link>
        </div>
    );
};

export default Country;