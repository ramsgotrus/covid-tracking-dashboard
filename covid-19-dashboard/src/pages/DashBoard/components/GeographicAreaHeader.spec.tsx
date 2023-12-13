import '@testing-library/jest-dom/vitest'
import React from 'react'
import { render, screen } from '@testing-utils'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
import { GeographicHeaderBar } from './index'
import { CovidDataContext } from '@context/covidDataContext'
import { Mock_Hostoric_Data } from 'ts/data/mock.Data'
import { ViewType } from 'ts/enums/viewTypes.enum'

const titleText = 'Trends in United States COVID-19 Hospitalizations, Deaths and Test Positivity by Geographic Area.'
let firstInitialState = PanelType.allData
let covidData = Mock_Hostoric_Data
let viewType = ViewType.table
vi.
    spyOn(React, 'useState')
    .mockImplementationOnce(() => [firstInitialState, () => null])
    .mockImplementationOnce(() => [covidData, () => null])
    .mockImplementationOnce(() => [viewType, () => null])
const value = {
    setSelectedPanelType: () => { },
    saveRows: () => { },
    setSelectedViewType: () => { }
}
const RenderHeader = () => {
    return (
        <Router location={{}} navigator={navigator}>
            <CovidDataContext.Provider value={value}>
                <GeographicHeaderBar />
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render error state', () => {
    render(RenderHeader())
    expect(screen.getByText(titleText)).toBeInTheDocument()

})

test('render header state', () => {
    render(RenderHeader())
    expect(screen.getByText('Table')).toBeInTheDocument()
    expect(screen.getByText('Graph')).toBeInTheDocument()
    expect(screen.getByText('Filter')).toBeInTheDocument()
})
