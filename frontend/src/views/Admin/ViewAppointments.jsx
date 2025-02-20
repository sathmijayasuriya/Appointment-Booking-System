import React from 'react'
import { Sidebar } from '../../components/admin/Sidebar'
import { Box, Typography } from "@mui/material";
import HeaderAdmin from '../../components/headers/HeaderAdmin';
import { Bookings } from '../../components/admin/Bookings';

export const ViewAppointments = () => {
  return (
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1,mt:10 }}>
              <HeaderAdmin/>
              <Bookings/>
            </Box>
          </Box>
    
  )
}
