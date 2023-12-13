import React from 'react'
import '@testing-library/jest-dom/vitest';
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-utils'
import { PanelType } from 'ts/enums/panelTypes.enums'
import { CovidDataContext } from '@context/covidDataContext'
import CollapsibleItem from './CollapsibleItem'

const currentLabelText = 'Current and Historical Data'
const stateLabelText = 'States Current and Historical Data'
let firstInitialState = PanelType.allData
vi.
    spyOn(React, 'useState')
    .mockImplementationOnce(() => [firstInitialState, () => null])

const value = {
    setSelectedPanelType: () => { }
}
const RenderCollapsibleItem = () => {
    return (
        <Router location={{}} navigator={navigator}>
            <CovidDataContext.Provider value={value}>
                <CollapsibleItem>
                    <div>Table </div>
                </CollapsibleItem>
            </CovidDataContext.Provider>
        </Router>
    )
}

test('render collapsibleItem Historial Data Label', () => {
    render(RenderCollapsibleItem())
    expect(screen.getByText(currentLabelText)).toBeInTheDocument()
})
test('render collapsibleItem States Current and Historical Data Label', () => {
    firstInitialState = PanelType.allStates
    render(RenderCollapsibleItem())
    expect(screen.getByText(stateLabelText)).toBeInTheDocument()
})
