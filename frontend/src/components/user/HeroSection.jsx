import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Hero from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F7",
        px: 4,
        mx: 10,
        height: "100vh", // Ensure full viewport height
        overflow: "hidden", // Prevent scroll
        marginTop: "-50px"
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{ height: "100%" }}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" fontWeight="bold" color="primary">
            Book your
          </Typography>
          <Typography variant="h1" fontWeight="bold" color="primary">
            Appointment
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Lorem ipsum is a placeholder text commonly used in the design and
            printing industry.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 6,
              py: 2,
              fontSize: "18px",
              backgroundColor: "#0F4C81",
              borderRadius: "7px",
              "&:hover": { backgroundColor: "#14AE5C" },
            }}
          >
            Book Now
          </Button>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden", // Prevent image overflow from creating scroll
            }}
          >
            <img
              src={Hero}
              alt="Appointment Illustration"
              style={{
                width: "150%", // Make the image larger (adjust percentage as needed)
                height: "auto", // Maintain aspect ratio
                position: "relative", // Allow image to overflow to the right
                left: "50px", // Optional: shift the image a bit to the right if necessary
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
