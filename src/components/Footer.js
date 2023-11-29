import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' , bgcolor:'#676e73'}} flexWrap="wrap" px="40px" pt="24px" >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '191px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } , color:'white', bgcolor:'#676e73'}} textAlign="center" pt='10px' pb='30px'>Made with ❤️ by Unais Hagalwadi</Typography>
  </Box>
);

export default Footer;
