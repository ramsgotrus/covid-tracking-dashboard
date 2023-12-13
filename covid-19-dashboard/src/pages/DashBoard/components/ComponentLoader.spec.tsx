import '@testing-library/jest-dom/vitest';
import React from 'react'
import { render, screen } from '@testing-utils'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
import ComponentLoader from './ComponentLoader'
import { CovidDataContext } from '@context/covidDataContext'

const titleText = 'COVID-19 Dashboard'
let firstInitialState = PanelType.allData
vi.
    spyOn(React, 'useState')
    .mockImplementationOnce(() => [firstInitialState, () => null])
const value = {
    setSelectedPanelType: () => { }
}
const RenderHeader = () => {
    return (
        <Router location={{}} navigator={navigator}>
            <CovidDataContext.Provider value={value}>
                <ComponentLoader />
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render loading state', () => {
    render(RenderHeader())
    expect(screen.getByText(titleText)).toBeInTheDocument()

})
