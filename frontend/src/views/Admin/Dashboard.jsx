import React from 'react'
import { Sidebar } from '../../components/admin/Sidebar'
import { Box, Typography } from "@mui/material";
import HeaderAdmin from '../../components/headers/HeaderAdmin';
export const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 5,mt:4 }}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography>Welcome to the Admin Dashboard</Typography>
      </Box>
    </Box>
  )
}
