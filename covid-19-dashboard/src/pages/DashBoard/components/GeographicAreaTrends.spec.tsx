import '@testing-library/jest-dom/vitest'
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-utils'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { GeographicAreaTrends } from './index'
import { CovidDataContext } from '@context/covidDataContext'
import { Mock_Hostoric_Data } from 'ts/data/mock.Data'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'

const titleText = 'Trends in United States COVID-19 Hospitalizations, Deaths and Test Positivity by Geographic Area.'

const filterState = 'CA'

let isFilterView = true
vi.
    spyOn(React, 'useState')
    .mockImplementationOnce(() => [isFilterView, () => null])


const RenderHeader = (value: CovidDataContextType) => {
    return (
        <Router location={{}} navigator={navigator}>
            <CovidDataContext.Provider value={value}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <GeographicAreaTrends />
                </LocalizationProvider>
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render without error', () => {
    const value = {
        covidData: Mock_Hostoric_Data,
        saveRows: () => { },
        getRows: () => { },
        dateSelected: '',
        stateSelected: '',
        viewType: ViewType.table,
        panelType: PanelType.allStates,
        setFilterSelectedDate: () => { },
        setFilterSelectedState: () => { },
        setSelectedViewType: () => { },
        setSelectedPanelType: () => { }
    }
    render(RenderHeader(value))
    expect(screen.getByText(titleText)).toBeInTheDocument()
})

test('render table with data', () => {
    const value = {
        covidData: Mock_Hostoric_Data,
        saveRows: () => { },
        getRows: () => { },
        dateSelected: '',
        stateSelected: '',
        viewType: ViewType.table,
        panelType: PanelType.allStates,
        setFilterSelectedDate: () => { },
        setFilterSelectedState: () => { },
        setSelectedViewType: () => { },
        setSelectedPanelType: () => { }
    }
    render(RenderHeader(value))
    expect(screen.getByText('CA')).toBeInTheDocument()
    expect(screen.getByText('2021-03-06')).toBeInTheDocument()
    expect(screen.getByText(28756489)).toBeInTheDocument()
    expect(screen.getByText(363825123)).toBeInTheDocument()
    expect(screen.getByText(515151)).toBeInTheDocument()
    expect(screen.getByText(40199)).toBeInTheDocument()
})

test('render table with No results', () => {
    const value = {
        covidData: [],
        saveRows: () => { },
        getRows: () => { },
        dateSelected: '',
        stateSelected: '',
        viewType: ViewType.table,
        panelType: PanelType.allStates,
        setFilterSelectedDate: () => { },
        setFilterSelectedState: () => { },
        setSelectedViewType: () => { },
        setSelectedPanelType: () => { }
    }
    render(RenderHeader(value))
    expect(screen.getByText('No Results found.')).toBeInTheDocument()
})

test('render table with no results when no match found using filter', async () => {
    const value = {
        covidData: Mock_Hostoric_Data,
        saveRows: () => { },
        getRows: () => { },
        dateSelected: "2021-03-06",
        stateSelected: 'AL',
        viewType: ViewType.table,
        panelType: PanelType.allStates,
        setFilterSelectedDate: () => { },
        setFilterSelectedState: () => { },
        setSelectedViewType: () => { },
        setSelectedPanelType: () => { }
    }
    render(RenderHeader(value))
    fireEvent.click(screen.getByTestId("filter-view"))
    await waitFor(() => {
        expect(screen.findByText('Select State'))
    })
    expect(screen.getByText('No Results found.')).toBeInTheDocument()
})

test('render table with results when match found using filter', async () => {
    const value = {
        covidData: Mock_Hostoric_Data,
        saveRows: () => { },
        getRows: () => { },
        dateSelected: '',
        stateSelected: filterState,
        viewType: ViewType.table,
        panelType: PanelType.allStates,
        setFilterSelectedDate: () => { },
        setFilterSelectedState: () => { },
        setSelectedViewType: () => { },
        setSelectedPanelType: () => { }
    }
    render(RenderHeader(value))
    fireEvent.click(screen.getByTestId("filter-view"))
    await waitFor(() => {
        expect(screen.findByText('Select State'))
    })
    expect(screen.getByText('CA')).toBeInTheDocument()
    expect(screen.getByText('2021-03-07')).toBeInTheDocument()
    expect(screen.getByText(28756489)).toBeInTheDocument()
    expect(screen.getByText(363825123)).toBeInTheDocument()
    expect(screen.getByText(515151)).toBeInTheDocument()
    expect(screen.getByText(40199)).toBeInTheDocument()
})

