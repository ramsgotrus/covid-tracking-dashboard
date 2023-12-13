import React, { FC, useContext, useState } from 'react'
import { TablePagination } from '@mui/material'
import { BarChart, CustomTable } from '@components/index'
import { ViewType } from 'ts/enums/viewTypes.enum'
import { GeographicHeaderBar } from './index'
import { CovidDataContext } from '@context/covidDataContext'
import { CovidDataContextType } from 'ts/interfaces/covidData.interfaces'
import { map } from 'lodash-es'



interface GeographicAreaDataProps {
    className?: string
}
const GeographicAreaData: FC<GeographicAreaDataProps> = ({ }) => {

    const { covidData, viewType, stateSelected } = useContext(CovidDataContext) as CovidDataContextType

    const rowHeaders: string[] = ['State', 'Date', 'Cases', 'Testing', 'Death', 'Hospitalized']

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10)

    const offSetData = covidData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    const rowHeadersDates: string[] = map(offSetData, 'date')

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        if (event) event.preventDefault()
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (<div >
        <GeographicHeaderBar />
        {viewType === ViewType.table ?
            <CustomTable rowHeaders={rowHeaders} rows={offSetData
                .filter((item) => stateSelected !== "" ? item.state === stateSelected : item.date !== null)} />
            : <BarChart rowHeaders={rowHeadersDates} data={offSetData
                .filter((item) => stateSelected !== "" ? item.state === stateSelected : item.date !== null)} />
        }
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={covidData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>)
}

export default GeographicAreaData
