import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useQuery } from 'react-query';
import { Icon } from 'leaflet';
import Loader from '../loader/Loader';


interface MapData {
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: string;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
    country: string;
    countryInfo: {
        _id: number;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        flag: string;
    };
}

const icon = new Icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png', shadowSize: [41, 41], shadowAnchor: [12, 41] })

interface CountryData {
    name: string;
    lat: number;
    long: number;
    active: number;
    recovered: number;
    deaths: number;
}


const fetchData = async (): Promise<{ [key: string]: MapData }> => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};


const Map = () => {

    const { isLoading, isError, data, error } = useQuery<MapData[], Error>('MapData', fetchData);


    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    if (!data) {
        return <div>Data is undefined.</div>;
    }

    const countryData: CountryData[] = data.map((country) => ({
        name: country.country,
        lat: country.countryInfo.lat,
        long: country.countryInfo.long,
        active: country.active,
        recovered: country.recovered,
        deaths: country.deaths,
    }));



    const position = [33, 65]
    return (
        <div className='z-10 absolute mt-12 bg-red-100' >
            {/* <h1>Hello</h1> */}

            <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} style={{ width: '80vw', height: '70vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {countryData?.map((country) => (

                    <Marker position={[country.lat, country.long]} >

                        <Popup>
                            <h4>Name: {country.name}</h4>
                            <p>Active Cases: {country.active}</p>
                            <p>Recovered Cases: {country.recovered}</p>
                            <p>Deaths: {country.deaths}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Map