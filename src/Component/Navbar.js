import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const FloatingMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      <IconButton 
        size="large" 
        aria-label="menu" 
        aria-controls="menu-appbar" 
        aria-haspopup="true" 
        onClick={handleClick} 
        color="inherit"
      >
        <MenuIcon sx={{ fontSize: 40, color: '#00FF00' }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        sx={{colo:'#00FF00'}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem onClick={handleClose} component={Link} to="/">home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/my-project">My project</MenuItem>
      </Menu>
    </Box>
  );
};

export default FloatingMenuButton;
