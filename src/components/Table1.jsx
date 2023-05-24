import { TableCell, TableHead } from '@mui/material'
import React from 'react'

const Table1 = () => {
  return (
    <div>
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>New</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
        </Table>
       </TableContainer>
    </div>
  )
}

export default Table1