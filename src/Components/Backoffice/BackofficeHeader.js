import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton,AppBar, Box, Typography } from '@mui/material';

const BackofficeHeader = () => {

  const [toggleSideBar,setToggleSideBar] = useState(false)

  const handleDrawerOpen = () =>{
    setToggleSideBar(true)
  }

  return (
    <AppBar position="static" sx={{heigth:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ ml: 2,mr:2}}
      >
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" component="div">
        Somos Mas
      </Typography>
    </AppBar>
  );
}

export default BackofficeHeader;
