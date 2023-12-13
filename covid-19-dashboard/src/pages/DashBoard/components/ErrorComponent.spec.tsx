import '@testing-library/jest-dom/vitest';
import React from 'react'
import { render, screen } from '@testing-utils'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { Router } from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import { CovidDataContext } from '@context/covidDataContext'

const titleText = 'We encountered an issue processing your request.'
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
                <ErrorComponent />
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render error state', () => {
    render(RenderHeader())
    expect(screen.getByText(titleText)).toBeInTheDocument()

})
