import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Application
          </Typography>
          <Link to='/'><Button color="inherit">Home</Button></Link>
          <Link to='/add'><Button color="inherit">Add Product</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
