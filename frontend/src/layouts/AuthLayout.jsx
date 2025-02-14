import React from "react";
import { Box, CssBaseline, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderAuth from "../components/headers/HeaderAuth";

export default function AuthLayout() {
  return (
    <>
      <CssBaseline />
      <HeaderAuth/>
      <Grid2
        // container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          bgcolor: "#F2F2F7",
        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Grid2>
    </>
  );
}
