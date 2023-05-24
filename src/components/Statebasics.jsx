import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [pname,setPname] = useState("");
    var[val,setVal] = useState();

    const inputHandler = (e)=>{
        setVal(e.target.value);
        console.log(val)
    }

    const changeName =()=>{
      setPname(val)
    }
  return (
    <div>
        <br/>
        <br/>

        <Typography variant='h4'> {pname}</Typography>
        <br/>
        <br/>
        <TextField variant='filled' label='name' onChange={inputHandler}/>
        <br/>
        <br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics
