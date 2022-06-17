import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap:{
          xs:'20px',sm:'122px'
        },
        justifyContent:'none',
        mt:{
          sm:'32px',
          xs:'20px'
        }
      }}
      px="20px"
    >
      <Link to={"/"}>
        <img src={Logo} alt="logo" style={{widtth:"48px",height:"48px",margin:"0 20px"}}/>
      </Link>
      <Stack
        direction="row"
        gap={"40px"}
        fontSize="24px"
        alignItems="center"
      >
        <Link to={"/"}style={{textDecoration:"none", color:"#3a1212",borderBottom:"3px solid #ff2625"}}>Home</Link>
        <a href='#exercise' style={{textDecoration:"none", color:"#3a1212"}}>Exercise</a>
      </Stack>

    </Stack>
  )
}

export default Navbar