import '@testing-library/jest-dom/vitest';
import React from 'react'
import { screen, renderHook, waitFor } from '@testing-utils'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
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

test('render without error', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })

    await waitFor(() => result.current)
    expect(screen.getByText(titleText)).toBeInTheDocument()
})
test('render table with data', async () => {
    const { result } = renderHook(() => { return { first: useGetDailyData, second: useGetAllStatesData } }, {
        wrapper: dashBoardWrapper
    })
    await waitFor(() => result.current)
    expect(screen.getByText(titleText)).toBeInTheDocument()
    expect(screen.getByText('2021-03-06')).toBeInTheDocument()
    expect(screen.getByText(28756489)).toBeInTheDocument()
    expect(screen.getByText(363825123)).toBeInTheDocument()
    expect(screen.getByText(515151)).toBeInTheDocument()
    expect(screen.getByText(40199)).toBeInTheDocument()
})

