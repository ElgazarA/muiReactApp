import React from 'react'
import style from './Home.module.css'
import { Button, IconButton, Typography } from '@mui/material'
import { Delete, Menu, MenuBookOutlined } from '@mui/icons-material'
function Home() {
    return (
        <div>
            <h1>Hoooooooooooooooooome</h1>
            <Typography variant='h4' color="error" gutterBottom="50px">Ahmed Hani</Typography>
            <Button variant="outlined" sx={{ mr: "auto", ml: "auto", display: "flex" }} endIcon={<Delete />}>
                Delete
            </Button>
            <IconButton color='secondary' size='medium'>
                <MenuBookOutlined />
            </IconButton>
        </div>
    )
}

export default Home
