import { AppBar, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'black'} sx={{ mr: 1 }} align='left'> New App</Typography>
                <button><Link to={'/'}>Home</Link></button>
                <button variant='text'><Link to='/Table2'>Table</Link></button>
                <button variant='text'><Link to='/First'>First</Link></button>
                <button variant='text'><Link to='/axios'>Axios</Link></button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar