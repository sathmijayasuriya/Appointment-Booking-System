import React from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  Box,
  Divider,
  Grid2,
  CardMedia,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export const Bookings = () => {
  const exportButton = {
    border: "2px solid rgb(212, 228, 219)",
    color: "black",
    paddingX: "20px",
    borderRadius: "10px",
    "&:hover": {
      border: "2px solid rgb(74, 77, 74)",
      color: "white",
      backgroundColor: "rgb(21, 22, 21)",
    },
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 5,
          mx: 10,
        }}
      >
        <Typography variant="h5">Manage Appointments</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={exportButton}>
            <FileDownloadOutlinedIcon sx={{ fontSize: "20px", mr: 1 }} />
            Export
          </Button>
        </Box>
      </Box>
      <Box sx={{mt:1,mx:10}}>
      <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>User Contact</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Booked Name</TableCell>
                <TableCell>Booked Contact</TableCell>
                <TableCell>Created Date</TableCell>
                <TableCell>Actions</TableCell>

              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
