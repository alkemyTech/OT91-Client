import { Box, Button, List, Divider, SwipeableDrawer, Container, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../Assets/Logo/logo.png'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useEffect} from 'react';
import NavLinksList from './NavLinksList';
import { navLinks, manageLinkActivation } from './HeaderLinks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLogged = false;
  manageLinkActivation(window.location.pathname);
  return (
    <Container maxWidth={false} sx={{display: 'flex', justifyContent: 'space-between', padding:'0 15px 0 10px'}}>
      <Box sx={{display:'flex', gap:'20px'}}>
        <img src={logo} height="100px"/>
        <NavLinksList horizontal navLinks={navLinks} isLogged={isLogged}/>
      </Box>
        <List sx={{display:{xs:'none', lg:'flex'}, gap:'10px'}}>
          <Button component={Link} to="/login" variant="outlined" sx={{alignSelf:'center'}}>
            LOGIN
          </Button>
          <Button component={Link} to="/register" variant="contained" sx={{alignSelf: 'center'}}>
            Registrate
          </Button>
        </List>
      <IconButton onClick={() => setIsOpen(true)} aria-label="menu" size="large" sx={{display: {xs:'inline-block', lg:'none'}}}>
          <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}>
          <Box
          sx={{ width: 250 }}
          role="presentation">
            <List sx={{display:'flex', flexDirection:'column', paddingLeft:'15px', gap:'10px'}}>
              <Button component={Link} to="/login" variant="outlined" sx={{alignSelf:'start'}}>
                LOGIN
              </Button>
              <Button component={Link} to="/register" variant="contained" sx={{alignSelf: 'start'}}>
                Registrate
              </Button>
            </List>
            <Divider />
            <NavLinksList navLinks={navLinks} isLogged={isLogged}/>
          </Box>
      </SwipeableDrawer>
    </Container>
    )
}

export default Header;
