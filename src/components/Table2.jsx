import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table2 = () => {
    var[names,setNames] = useState(["abhi","akhil","ananthu"])
  return (
    <div style={{paddingTop:"50px"}}>
          <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>New</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {names.map((value,index)=>{
                     return(
                        <TableRow>
                            <TableCell>{value}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    )
                }
                )}
                   
            </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
}

export default Table2