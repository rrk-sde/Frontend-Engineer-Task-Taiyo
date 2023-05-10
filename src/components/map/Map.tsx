// @ts-nocheck
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useQuery } from 'react-query';
// import { Icon } from 'leaflet';
import Loader from '../loader/Loader';


interface CountryInfo {
    lat: number;
    long: number;
}

interface Country {
    country: string;
    countryInfo: CountryInfo;
    active: number;
    recovered: number;
    deaths: number;
}

interface CountryData {
    name: string;
    lat: number;
    long: number;
    active: number;
    recovered: number;
    deaths: number;
}

interface CountriesResponse {
    data: Country[];
}


export const fetchCountries = async (): Promise<{ [key: string]: CountriesResponse }> => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data);
    return { data };
};


const Map = () => {

    const { isLoading, isError, data, error } = useQuery<CountriesResponse, Error>('countries', fetchCountries);


    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    if (!data) {
        return <div>Data is undefined.</div>;
    }

    const countryData: CountryData[] = data.data.map((country: Country) => ({
        name: country.country,
        lat: country.countryInfo.lat,
        long: country.countryInfo.long,
        active: country.active,
        recovered: country.recovered,
        deaths: country.deaths,
    }));



    // const position = [33, 65]
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