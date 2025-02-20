import React from 'react'
import { Sidebar } from '../../components/admin/Sidebar'
import { Box, Typography } from "@mui/material";
import HeaderAdmin from '../../components/headers/HeaderAdmin';
import { Slots } from '../../components/admin/Slots';
export const ManageSlots = () => {
  return (
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1,mt:10 }}>
          <HeaderAdmin/>
          <Slots/>
        </Box>
      </Box>
  )
}
