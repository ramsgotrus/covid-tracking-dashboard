import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Skeleton from '@mui/material/Skeleton'

import Paper from '@mui/material/Paper'
import { StyledTableRow } from './styles'

export default function CustomTableLoader() {
    const rows = [1, 2, 3, 4, 5, 6, 7]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row}>
                            <Skeleton variant="rectangular" height={10} />
                            <Skeleton variant="rectangular" height={10} />
                            <Skeleton variant="rectangular" height={10} />
                            <Skeleton variant="rectangular" height={10} />
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}
