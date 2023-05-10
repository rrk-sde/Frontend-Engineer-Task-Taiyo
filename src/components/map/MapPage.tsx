import React from 'react'
import LineChart from './LineChart'
import Map from './Map'

const MapPage = () => {
    return (
        <div className=''>
            <h1 className='w-full text-right text-red-500'>Scroll Down To See Map</h1>
            <LineChart />
            <Map />
        </div>
    )
}

export default MapPage