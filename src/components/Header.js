// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = isLoggedIn
    ? [
        { text: 'Lista de Fretes', to: '/freights' },
        { text: 'Cadastrar Frete', to: '/freight-register' },
        { text: 'Logout', onClick: logout },
      ]
    : [
        { text: 'Login', to: '/login' },
        { text: 'Cadastro', to: '/register' },
      ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component={Link} to="/" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Box>

        {/* Ícone de menu hambúrguer para telas pequenas */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Links de navegação para telas médias e maiores */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item, index) =>
            item.to ? (
              <Button key={index} color="inherit" component={Link} to={item.to} sx={{ color: 'black' }}>
                {item.text}
              </Button>
            ) : (
              <Button key={index} color="inherit" onClick={item.onClick} sx={{ color: 'black' }}>
                {item.text}
              </Button>
            )
          )}
        </Box>

        {/* Drawer (menu lateral) para telas pequenas */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            {menuItems.map((item, index) =>
              item.to ? (
                <ListItem button key={index} component={Link} to={item.to} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ) : (
                <ListItem button key={index} onClick={() => { item.onClick(); toggleDrawer(false)(); }}>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
