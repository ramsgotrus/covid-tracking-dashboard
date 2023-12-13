import React, { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { StyledTableCell, StyledTableRow } from './styles'
import { ICovidData } from 'ts/interfaces/covidData.interfaces'

interface CustomTableProps {
  rowHeaders: string[],
  rows?: ICovidData[],
}

const CustomTable: FC<CustomTableProps> = ({ rowHeaders, rows = [] }) => {

  if (rows.length === 0) {
    return <div style={{ borderRadius: "1px", padding: '10px', display: 'grid', height: '620px', borderTop: '1px solid, #555', justifyContent: 'center', backgroundColor: '#5555' }}>
      <strong>No Results found.</strong>

    </div>
  }
  return (

    <Paper sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {rowHeaders.map((header: string) => {
                return (<StyledTableCell key={Math.random()} align="right">{header}</StyledTableCell>)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => (
                <StyledTableRow key={Math.random()}>
                  {row.state ? <StyledTableCell align="right">{row.state}</StyledTableCell> : ''}
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.casesTotal}</StyledTableCell>
                  <StyledTableCell align="right">{row.testingTotal}</StyledTableCell>
                  <StyledTableCell align="right">{row.deathTotal}</StyledTableCell>
                  <StyledTableCell align="right">{row.hospitalizedCurrently}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Paper>

  )
}

export default CustomTable