import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/BOOKAPP.png";

const buttonStyle = {
  color: "black",
  textTransform: "none",
  fontWeight: "400 !important", // Forces override
  "&:hover": {
    backgroundColor: "transparent",
    color: "#14AE5C",
  },
};
const loginButton = { 
  border: "2px solid #14AE5C",
  color: "#14AE5C",
  paddingX: "20px",
  borderRadius:"10px",
  "&:hover": {
    border: "2px solid #0F4C81",
    color: "#0F4C81",
  },
};

export default function HeaderAuth() {
  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ paddingX: 15, zIndex: 3 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box component={Link} to="/" sx={{ mt: 2 }}>
          <img 
            alt="Logo" 
            src={logo} 
            style={{ 
              height: "auto",  // Automatically adjust height
              width: "100%",   // Adjust width to 100% of its container
              maxWidth: "300px", // Set a max width to prevent it from growing too large
            }} 
          />
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" sx={buttonStyle}>
            Home
          </Button>
          <Button component={Link} to="/services" sx={buttonStyle}>
            About Us
          </Button>
          <Button component={Link} to="/gallery" sx={buttonStyle}>
            Contact Us
          </Button>
          <Button component={Link} to="/gallery" sx={loginButton}>
           Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
