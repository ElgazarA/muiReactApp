import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { Avatar, Link, Toolbar, Box, AppBar } from '@mui/material';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Appbar from '../componant/Appbar';
import Drawerr from '../componant/Drawerr';


const drawerWidth = 240;
function Root() {
  return (
    <div>
    <Appbar drawerWidth={drawerWidth}/>
      <Outlet />
            {/** _____________________________ **/}
      <Drawerr drawerWidth={drawerWidth} /> 
  </div>
  )
}

export default Root
