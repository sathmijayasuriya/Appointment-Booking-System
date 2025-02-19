import React from 'react'
import { Sidebar } from '../../components/admin/Sidebar'
import { Box, Typography } from "@mui/material";
import HeaderAdmin from '../../components/headers/HeaderAdmin';
import { Slots } from '../../components/admin/Slots';
export const ManageSlots = () => {
  return (
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, pl: 4,mt:10 }}>
          <HeaderAdmin/>
          <Typography variant="h5" sx={{ pl: 3,mt:2}} >Manage Time-Slots</Typography>
          <Slots/>
        </Box>
      </Box>
  )
}
