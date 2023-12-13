import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './styles.css'
import { ICovidData } from 'ts/interfaces/covidData.interfaces';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend)


export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
}


interface BarChartProps {
    rowHeaders: string[],
    data: ICovidData[];
}

const BarChart: React.FC<BarChartProps> = ({ rowHeaders, data }) => {

    if (data.length === 0) {
        return <div style={{ borderRadius: "1px", padding: '10px', display: 'grid', height: '620px', borderTop: '1px solid, #555', justifyContent: 'center', backgroundColor: '#5555' }}>
            <strong>No Results</strong>

        </div>
    }

    const chatData = {
        labels: rowHeaders,
        datasets: [
            {
                label: '# Cases Total',
                data: data.map((item) => item.casesTotal),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: ['rgb(255, 140, 0)'],

            },
            {
                label: '# Testing Total',
                data: data.map((item) => item.testingTotal),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: ['rgb(108, 196, 23)'],

            },
            {
                label: '# Death Total',
                data: data.map((item) => item.deathTotal),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: ['rgb(255, 99, 132)'],

            },
            {
                label: '# Hospitalized Currently',
                data: data.map((item) => item.hospitalizedCurrently),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: ['rgb(209, 155, 227)',],

            }

        ]
    }

    return <div style={{ borderRadius: "1px", padding: '5px', display: 'grid', height: '520px', borderTop: '1px solid, #555', justifyContent: 'center' }}>
        <Bar data={chatData} />

    </div>
};

export default BarChart
