import React, { useState} from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../App.css"

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className="nav" position="static">
        <Toolbar   disableGutters	 sx={{ bgcolor:"#023020"}}>
          <IconButton size="large">
            <MenuIcon onClick={handleClick}/>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <a style={{textDecoration:"none", cursor:"pointer"}} href="#services"><MenuItem onClick={handleClose}>Courses</MenuItem></a>
        <MenuItem onClick={handleClose}>Taalim Gallery</MenuItem>
        <a style={{textDecoration:"none", cursor:"pointer"}} href="#testimonials"><MenuItem onClick={handleClose}>Testimonials</MenuItem></a>
        <a style={{textDecoration:"none", cursor:"pointer"}} href="#pricing"><MenuItem onClick={handleClose}>Pricing</MenuItem></a>
      </Menu>
          </IconButton>
          <Typography textAlign="center" variant="h5">Taalim School of Music</Typography>
          <Box display="flex" alignItems="center" justifyContent="center" ml="auto" mr="17px" sx={{display:{xs:"none", sm:"none", lg:"flex", md:"flex"}}}>
            <Tooltip title="Contact Us on +919830995366 for more details">
            <IconButton size="large">
            <LocalPhoneIcon/>
          </IconButton>
          </Tooltip>
          <p style={{marginRight:"3px", paddingTop:"15px"}}>+919830995366</p>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;