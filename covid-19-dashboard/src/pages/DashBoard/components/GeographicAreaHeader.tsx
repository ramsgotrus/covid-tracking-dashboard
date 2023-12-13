import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useContext, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import TableViewIcon from '@mui/icons-material/TableView'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import MenuItem from '@mui/material/MenuItem'
import Clear from "@mui/icons-material/Clear"
import { Typography } from "@mui/material"
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CovidDataContext } from '@context/covidDataContext'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import US_STATES from 'ts/enums/us_States.enum'

type GeographicHeaderBarProps = { className?: string }

type GeographicHeaderBarHandle = {
    resetData: () => void,
    displayType: (ViewType: ViewType) => void
    selectedState: (state: string) => void
}
const GeographicHeaderBar: ForwardRefRenderFunction<GeographicHeaderBarHandle, GeographicHeaderBarProps> = (
    className,
    forwardedRef,
) => {
    const { setFilterSelectedState, setSelectedViewType, stateSelected, viewType } = useContext(CovidDataContext) as CovidDataContextType

    const [isFilterView, setIsFilterView] = useState<boolean>(false)

    const handleChange = (event: SelectChangeEvent) => {
        setFilterSelectedState(event.target.value as string);
    };

    useImperativeHandle(forwardedRef, () => ({
        resetData() {
            setFilterSelectedState('');
        },
        displayType(selectedType: ViewType) {
            setSelectedViewType(selectedType)
        },
        selectedState(state: string) {
            setFilterSelectedState(state)
        }
    }))

    const handleViewChange = (newView: ViewType) => {
        setSelectedViewType(newView);
    }

    const handleResetView = () => {
        setFilterSelectedState('')
    }
    const handleFilterViewChange = () => {
        setIsFilterView(viewType => !viewType)
    }
    console.log(className)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', height: '50px', alignItems: 'center' }}>

            <p>Trends in United States COVID-19 Hospitalizations, Deaths and Test Positivity by Geographic Area.</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'right', padding: '10px', height: '50px' }}>
                {isFilterView ? <div style={{ display: 'flex', justifyContent: 'right', width: '350px' }}>
                    <FormControl style={{ minWidth: 200 }}>
                        <InputLabel id="state-select-label-input">Select State</InputLabel>
                        <Select
                            labelId="select-state-label"
                            data-testid="select-state"
                            value={stateSelected}
                            label="Select State"
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment>
                                    {stateSelected ? <IconButton >
                                        <Clear onClick={handleResetView} />
                                    </IconButton> : ''}

                                </InputAdornment>
                            }
                        >
                            {US_STATES.map((state) =>
                                <MenuItem value={state.value}>{state.label}</MenuItem>
                            )}
                        </Select>

                    </FormControl>

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

export default forwardRef(GeographicHeaderBar)