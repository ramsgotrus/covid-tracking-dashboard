import React, { useState } from "react"
import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useContext } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import TableViewIcon from '@mui/icons-material/TableView'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import { Typography } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CovidDataContext } from '@context/covidDataContext'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import { PickerTextField } from '@components/index'

type CurrentAndHistoricHeaderProps = {
    selectedDate?: string,
}

type CurrentAndHistoricHeaderHandle = {
    resetData: () => void,
    ViewType: (viewType: ViewType) => void
    selectedState: (state: string) => void
}
const CurrentAndHistoricHeader: ForwardRefRenderFunction<CurrentAndHistoricHeaderHandle, CurrentAndHistoricHeaderProps> = (
    selectedDate,
    forwardedRef,
) => {
    const { setFilterSelectedDate, setSelectedViewType, dateSelected, viewType } = useContext(CovidDataContext) as CovidDataContextType
    const [isFilterView, setIsFilterView] = useState<boolean>(false)
    useImperativeHandle(forwardedRef, () => ({
        resetData() {
            setFilterSelectedDate(null);
        },
        ViewType(selectedType: ViewType) {
            setSelectedViewType(selectedType)
        },
        selectedState(selectedState: string) {
            setFilterSelectedDate(selectedState)
        }
    }))

    const handleDateChange = (newValue: Dayjs | null) => {
        if (newValue) {
            const dateString = dayjs(newValue, "YYYY-MM-DD+h:mm").format('YYYY-MM-DD');
            setFilterSelectedDate(dateString)
        }
    }
    const handleViewChange = (newView: ViewType) => {
        setSelectedViewType(newView);
    }
    const handleClearResults = () => {
        setFilterSelectedDate('')
    }
    const handleFilterViewChange = () => {
        setIsFilterView(viewType => !viewType)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', height: '50px', alignItems: 'center' }}>

            <p>Trends in United States COVID-19 Hospitalizations, Deaths, and Test Positivity by Historic US values.</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'right', padding: '10px', height: '50px' }}>
                {isFilterView ? <div style={{ display: 'flex', justifyContent: 'right', gap: '30px', width: '350px' }}>
                    <DatePicker

                        onChange={handleDateChange}
                        slotProps={{
                            textField: {
                                onClearClick: handleClearResults,
                            } as any
                        }}
                        slots={{
                            textField: dateSelected ? PickerTextField : null
                        }}
                        value={dateSelected ? dayjs(dateSelected) : null}
                    />
                </div> : <div style={{ display: 'flex', alignItems: 'center', gap: '30px', width: '350px' }} />}

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FilterAltIcon data-testid="filter-view" style={{ display: 'flex', cursor: 'pointer', color: isFilterView ? '#213547' : '#5555' }} onClick={handleFilterViewChange} />
                    <Typography variant='caption'>Filter</Typography>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TableViewIcon data-testid="table-view" style={{ display: 'flex', cursor: 'pointer', color: viewType === ViewType.table ? '#213547' : '#5555' }} onClick={() => handleViewChange(ViewType.table)} />
                    <Typography variant='caption'>Table</Typography>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LeaderboardIcon data-testid="graph-view" style={{ display: 'flex', cursor: 'pointer', color: viewType === ViewType.graph ? '#213547' : '#5555' }} onClick={() => handleViewChange(ViewType.graph)} />
                    <Typography variant='caption'>Graph</Typography>
                </div>

            </div>
        </div>
    )

}

export default forwardRef(CurrentAndHistoricHeader)