import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
// with theme
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, p: { sm: '32px', xs: '20px' }, justifyContent: 'none',bgcolor: '#676e73' , color:'white'}} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '4px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white'}} >Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;