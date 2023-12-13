import React, { FC, useContext, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Header, Footer, NumberTitle } from '@components/index'
import { useGetDailyData, useGetAllStatesData } from '@hooks/index'
import { TransformGeographicData } from '@services/transformGeographicData'
import { TransformCurrentAndHistoricData } from '@services/transformHistoricData'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import { CovidDataContext } from '@context/covidDataContext'
import { TileIcon } from '@components/index'
import { PanelType } from 'ts/enums/panelTypes.enums'
import './styles.css'
import AboutUs from './components/AboutUs'
import { ComponentLoader, ErrorComponent } from '../DashBoard/components'


interface AboutUsProps {
    className?: string,
}

const Home: FC<AboutUsProps> = ({ }): JSX.Element => {

    const { saveRows, panelType, covidData, setSelectedPanelType } = useContext(CovidDataContext) as CovidDataContextType
    const { getAllData, error: getAllDataError, isLoading: getDailyDataLoading } = useGetDailyData()
    const { data, error: getAllStatesError, isLoading: getAllStateDataLoading } = useGetAllStatesData()
    const { updateCurrentAndHistoricObject } = TransformCurrentAndHistoricData(getAllData || [])
    const { updateGeographicObject } = TransformGeographicData(data || [])

    const navigate = useNavigate()


    const handleClick =
        (panel: PanelType) => (event: React.SyntheticEvent) => {
            event.preventDefault()
            setSelectedPanelType(panel)
            saveRows([])
            navigate(`/dashboard`)
        };

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

    if (covidData.length === 0) {
        return <ComponentLoader />
    }
    if (getAllDataError || getAllStatesError) {
        return <ErrorComponent />
    }


    return (
        <React.Fragment>
            <section className='headerContainer'>
                <Header title='COVID-19 Dashboard' />
            </section>
            <section className='topContainer'>
                <AboutUs />
            </section>
            <section className='mainContainer'>
                {covidData.slice(0, 1).map((item) => (
                    <div className='stats'>
                        <NumberTitle label='Total Hospitalized' value={item.hospitalizedCurrently} />
                        <NumberTitle label='Total Death' value={item.deathTotal} />
                        <NumberTitle label='Total Cases' value={item.casesTotal} />
                        <NumberTitle label='Total Testing' value={item.testingTotal} />
                    </div>

                ))}
            </section>
            <section>
                <p> View the rise and fall of COVID-19 deaths by state, broken down by demographic group. </p>
            </section>
            <section className="trends">
                <Card className='trendTitle' onClick={handleClick(PanelType.allData)} data-testid="historic-view">
                    <Typography style={{ color: '#007c91' }}>Trends in United States COVID-19 Hospitalizations, Deaths, and Test Positivity by Historic US values.</Typography>
                    <TileIcon />
                </Card>
                <Card className='trendTitle' onClick={handleClick(PanelType.allStates)} data-testid="trend-view">
                    <Typography style={{ color: '#007c91' }}>Trends in United States COVID-19 Hospitalizations, Deaths, and Test Positivity by Geographic Area.</Typography>
                    <TileIcon />
                </Card>
            </section>
            <Footer title='Ram. © 2023. All rights reserved.' />
        </React.Fragment>
    )
}

export default Home