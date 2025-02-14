import React from 'react'
import { Box, CssBaseline, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from '../components/Footers/Footer';
import HeaderUser from '../components/Headers/HeaderUser';

export default function UserLayout() {
  return (
    <>
      <CssBaseline />
      <HeaderUser />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensures full viewport height
          bgcolor: "background.default",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* This Box takes up the remaining space */}
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

