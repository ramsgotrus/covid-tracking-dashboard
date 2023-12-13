import React, { useState } from 'react'
import { CovidDataContextType, ICovidData } from 'ts/interfaces/covidData.interfaces'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { PanelType } from 'ts/enums/panelTypes.enums'

export const CovidDataContext = React.createContext<CovidDataContextType | null>(null)

interface CovidDataProviderProps {
    children: React.ReactNode;
}

const CovidDataProvider: React.FC<CovidDataProviderProps> = ({ children }) => {

    const [covidData, setCovidData] = useState<ICovidData[]>([])
    const [dateSelected, setDateSelected] = useState<string | null>('')
    const [stateSelected, setStateSelected] = useState<string | ''>('')
    const [viewType, setViewType] = useState<ViewType>(ViewType.graph)
    const [panelType, setPanelType] = useState<PanelType | boolean>(PanelType.allData)

    const saveRows = (covidData: ICovidData[]) => {
        setCovidData(covidData)
    }

    const getRows = (): ICovidData[] => {
        return covidData
    }

    const setFilterSelectedDate = (selectedDate: string | null) => {
        setDateSelected(selectedDate)
    }

    const setFilterSelectedState = (selectedState: string | '') => {
        setStateSelected(selectedState)
    }

    const setSelectedViewType = (selectedViewType: ViewType) => {
        setViewType(selectedViewType)
    }

    const setSelectedPanelType = (selectedPanelType: PanelType | boolean) => {
        setPanelType(selectedPanelType)
    }
    return <CovidDataContext.Provider value={{
        covidData,
        saveRows,
        getRows,
        dateSelected,
        stateSelected,
        viewType,
        panelType,
        setFilterSelectedDate,
        setFilterSelectedState,
        setSelectedViewType,
        setSelectedPanelType
    }}>{children}</CovidDataContext.Provider>
}


export default CovidDataProvider