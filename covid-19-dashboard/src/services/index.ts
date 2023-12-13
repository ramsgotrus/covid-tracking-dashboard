import axios from 'axios'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'
export const DailyDataURL = 'https://api.covidtracking.com/v2/us/daily.json'
export const SingleDateDataURL = (date: string) => `https://api.covidtracking.com/v2/us/daily/${date}.json`
export const AllStatesDataURL = 'https://api.covidtracking.com/v1/states/current.json'
export const SingleStateDataURL = (stateCode: string) => `https://api.covidtracking.com/v2/states/${stateCode}.json`


export const getDailyDataRes = async () => {
    return axios
        .get<ICovidData>(DailyDataURL, { params: { _sort: 'date' } })
        .then(res => res.data)
}

export const getDailySingleDateDataRes = async (selectedDate: string) => {
    return axios
        .get<ICovidData>(SingleDateDataURL(selectedDate), { params: { _sort: 'date' } })
        .then(res => res.data)
}

export const getAllStatesDataRes = async () => {
    return axios
        .get<ICovidData>(AllStatesDataURL, { params: { _sort: 'date' } })
        .then(res => res.data)
}

export const getSingleStateDataRes = async (stateCode: string) => {
    return axios
        .get<ICovidData>(SingleStateDataURL(stateCode), { params: { _sort: 'date' } })
        .then(res => res.data)
}