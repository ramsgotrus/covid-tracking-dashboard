import React, { FC, useContext, useEffect, useMemo } from 'react'
import { Header, MainContainer, Footer } from '@components/index'
import Box from '@mui/material/Box'
import { useGetDailyData, useGetAllStatesData } from '@hooks/index'
import { TransformGeographicData } from '@services/transformGeographicData'
import { TransformCurrentAndHistoricData } from '@services/transformHistoricData'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces';
import { CovidDataContext } from '@context/covidDataContext'
import { ComponentLoader, CurrentAndHistoricData, GeographicAreaTrends, ErrorComponent } from './components/index'

import { PanelType } from 'ts/enums/panelTypes.enums'



interface DashBoardProps {
    className?: any
}

const DashBoard: FC<DashBoardProps> = (): JSX.Element => {

    const { saveRows, panelType, covidData } = useContext(CovidDataContext) as CovidDataContextType
    const { getAllData, error: getAllDataError, isLoading: getDailyDataLoading } = useGetDailyData()
    const { data, error: getAllStatesError, isLoading: getAllStateDataLoading } = useGetAllStatesData()
    const { updateCurrentAndHistoricObject } = TransformCurrentAndHistoricData(getAllData || [])
    const { updateGeographicObject } = TransformGeographicData(data || [])

    useEffect(() => {
        if (panelType === PanelType.allData) {
            saveRows([])
            saveRows(updateCurrentAndHistoricObject)
        }
        else {
            saveRows([])
            saveRows(updateGeographicObject)
        }

    }, [getDailyDataLoading, getAllStateDataLoading, panelType])

    const renderComponent = useMemo(() => {
        return panelType === PanelType.allData ?
            <CurrentAndHistoricData /> : <GeographicAreaTrends />
    }, [panelType])

    if (getAllDataError || getAllStatesError) {
        return <ErrorComponent />
    }

    if (covidData.length === 0) {
        return <ComponentLoader />
    }



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header title='COVID-19 Dashboard'></Header>
            <MainContainer>
                <div>
                    {renderComponent}
                </div>
            </MainContainer>
            <Footer title='Ram. © 2023. All rights reserved.' />
        </Box>
    )

}

export default DashBoard