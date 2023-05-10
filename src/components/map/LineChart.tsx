// @ts-nocheck
import React from 'react';
import { useQuery } from 'react-query';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loader from '../loader/Loader';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'COVID-19 - ALL CASES',
        },
    },

    scales: {
        y1: {
            type: 'linear',
            display: false,
            position: 'left',
            ticks: {
                beginAtZero: true,
            },
        },
        y2: {
            type: 'linear',
            display: false,
            position: 'left',
            ticks: {
                beginAtZero: true,
            },
        },
        y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
                beginAtZero: true,
            },
        },

    },
};

interface HistoricalData {
    timeline: Record<string, number>,
}

interface HistoricalDataResponse {
    cases: HistoricalData,
    deaths: HistoricalData,
    recovered: HistoricalData,
}

const fetchData = async (): Promise<HistoricalDataResponse> => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
};


const LineChart: React.FC = () => {
    const { isLoading, isError, data, error } = useQuery<HistoricalDataResponse, Error>('historicalData', fetchData);
    // const chartRef = useRef<Chart>();

    // useEffect(() => {
    //     if (chartRef.current) {
    //         chartRef.current.destroy();
    //     }
    // }, [data]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    if (!data) {
        return <div>Data is undefined.</div>;
    }

    const dates = Object.keys(data.cases);
    const casesData = Object.values(data.cases);
    const deathsData = Object.values(data.deaths);
    const recoveredData = Object.values(data.recovered);


    const labels = dates;
    const LineData = {
        labels,
        datasets: [
            {
                label: 'New Cases',
                data: casesData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Deaths',
                data: deathsData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y2',
            },
            {
                label: 'Recovered',
                data: recoveredData,
                borderColor: 'rgba(0, 255, 0)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                yAxisID: 'y1',
            },
        ],
    };

    return <Line options={options} data={LineData} />;
}

export default LineChart;
