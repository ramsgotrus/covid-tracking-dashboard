import '@testing-library/jest-dom/vitest';
import React from 'react'
import { screen, renderHook, waitFor, fireEvent } from '@testing-utils'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
import * as router from 'react-router'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import DashBoard from './index'
import { CovidDataContext } from '@context/covidDataContext'
import { useGetDailyData, useGetAllStatesData } from '@hooks/index'

import { Mock_Hostoric_Data } from 'ts/data/mock.Data'


const titleText = 'COVID-19 Dashboard'
let firstInitialState = PanelType.allData
vi.
    spyOn(React, 'useState')
    .mockImplementationOnce(() => [firstInitialState, () => null])

const mockedNavigate = vi.fn()

vi.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigate)

const firsText = "View the rise and fall of COVID-19 deaths by state, broken down by demographic group."
const secondText = "Trends in United States COVID-19 Hospitalizations, Deaths, and Test Positivity by Historic US values."
const casesTotal = '28,756,489'
const testingTotal = '363,825,123'
const deathTotal = '515,151'
const hospitalizedCurrently = '40,199'

const value = {
    covidData: Mock_Hostoric_Data,
    saveRows: () => { },
    getRows: () => { },
    dateSelected: '',
    stateSelected: '',
    viewType: ViewType.table,
    panelType: PanelType.allData,
    setFilterSelectedDate: () => { },
    setFilterSelectedState: () => { },
    setSelectedViewType: () => { },
    setSelectedPanelType: () => { }
}
const dashBoardWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: 1,
            }
        }
    })

    return (
        <Router location={{}} navigator={navigator}>
            <CovidDataContext.Provider value={value}>
                <QueryClientProvider client={queryClient}>
                    <DashBoard />
                </QueryClientProvider>
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render tiles without error', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })
    await waitFor(() => result.current)
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText(firsText)).toBeInTheDocument()
    expect(screen.getByText(secondText)).toBeInTheDocument()
})
test('render table with data', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })
    await waitFor(() => result.current)
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText('Total Hospitalized')).toBeInTheDocument()
    expect(screen.getByText(casesTotal)).toBeInTheDocument()
    expect(screen.getByText(testingTotal)).toBeInTheDocument()
    expect(screen.getByText(deathTotal)).toBeInTheDocument()
    expect(screen.getByText(hospitalizedCurrently)).toBeInTheDocument()
})
test('click historic-view tile', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })
    await waitFor(() => result.current)
    const tile = screen.getByTestId("historic-view")
    fireEvent.click(tile)
    expect(mockedNavigate).toHaveBeenCalledWith('/dashboard')
})
test('click trend-view tile', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })
    await waitFor(() => result.current)
    const tile = screen.getByTestId("trend-view")
    fireEvent.click(tile)
    expect(mockedNavigate).toHaveBeenCalledWith('/dashboard')
})


