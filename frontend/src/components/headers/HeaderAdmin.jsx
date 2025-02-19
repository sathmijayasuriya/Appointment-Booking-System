import * as React from "react";
import { Stack, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import  {AdminMenu}  from "../Menus/AdminMenu";
import Logo from '../../assets/BOOKAPP.png';

export default function HeaderAdmin() {

  return (
    <>
     <AppBar
        position="sticky"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          boxShadow: 0,
          bgcolor: "background.default",
        }}
      >
        <Toolbar>
          <Box component={Link} to={"/"}>
            <img alt="Logo" src={Logo} height={15} />
          </Box>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

          <Stack direction={"row"} justifyContent="center" alignItems="center">
            <AdminMenu />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}
