import React from 'react'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import { CovidDataContext } from '@context/covidDataContext'

export function getDataSet() {
    const { covidData } = React.useContext(CovidDataContext) as CovidDataContextType
    return covidData
}
export const AllChartData = {
    labels: getDataSet().map((covidItem) => covidItem.date),
    datasets: [
        {
            label: '# Cases Total',
            data: getDataSet().map((covidItem) => covidItem.casesTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 140, 0)'],

        },
        {
            label: '# Testing Total',
            data: getDataSet().map((covidItem) => covidItem.testingTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(108, 196, 23)'],

        },
        {
            label: '# Death Total',
            data: getDataSet().map((covidItem) => covidItem.deathTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 99, 132)'],

        },
        {
            label: '# Hospitalized Currently',
            data: getDataSet().map((covidItem) => covidItem.hospitalizedCurrently),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(209, 155, 227)',],

        }

    ]


}

export const StatesChartData = {
    labels: getDataSet().map((covidItem) => covidItem.date),
    datasets: [
        {
            label: '# Cases Total',
            data: getDataSet().map((covidItem) => covidItem.casesTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 140, 0)'],

        },
        {
            label: '# Testing Total',
            data: getDataSet().map((covidItem) => covidItem.testingTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(108, 196, 23)'],

        },
        {
            label: '# Death Total',
            data: getDataSet().map((covidItem) => covidItem.deathTotal),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(255, 99, 132)'],

        },
        {
            label: '# Hospitalized Currently',
            data: getDataSet().map((covidItem) => covidItem.hospitalizedCurrently),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(209, 155, 227)',],

        },
        {
            label: '# State',
            data: getDataSet().map((covidItem) => covidItem.hospitalizedCurrently),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: ['rgb(209, 155, 227)',],

        }

    ]
}

export default AllChartData

