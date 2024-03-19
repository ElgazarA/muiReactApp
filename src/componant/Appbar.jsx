import React from 'react'
import myImg from '../assets/me.png'
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'

function Appbar({drawerWidth}) {
  return (
        <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}} position="static">
            <Toolbar sx={{ display:"flex"}}>
                <Link color="inherit" sx={{ textDecoration: "none", flexGrow: "1", "&:hover": { fontSize: "16.5px" } }} href="/">
                Home
                </Link>
                <Typography variant="body1" color="inherit" sx={{ mr: "10px" }}>Ahemd Hani</Typography>
                <Avatar alt="Ahmed Hani" src={myImg} />
            </Toolbar>
        </AppBar>
  )
}

export default Appbar
