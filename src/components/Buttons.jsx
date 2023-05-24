import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Buttons = () => {
    var[pname,setPname] = useState(" MyPhone");
    const changeName1=()=>{
        console.log("clicked");
        setPname("Welcome to Gallery");
    }
    const changeName2=()=>{
        console.log("clicked");
        setPname("Welcome to Home");
    }
    const changeName3=()=>{
        console.log("clicked")
        setPname("Welcome to Contacts");
    }

  return (
    <div>
        <Typography variant='h4'>{pname}</Typography>
        <Button variant='outlined' color='secondary' onClick={changeName1}>Gallery</Button>
        <Button variant='text' color='warning' onClick={changeName2}>Home</Button>
        <Button variant='contained' color='error' onClick={changeName3}>Contacts</Button>

    </div>
  )
}

export default Buttons