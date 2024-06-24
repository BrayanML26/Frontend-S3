import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/add-user">Add User</Button>
        <Button color="inherit" component={Link} to="/add-book">Add Book</Button>
        <Button color="inherit" component={Link} to="/users">User List</Button>
        <Button color="inherit" component={Link} to="/books">Book List</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
