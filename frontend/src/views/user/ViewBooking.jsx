import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid2,
  TextField,
  Card,
  CardMedia,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { display } from "@mui/system";
import axios from "axios";
import { useSelector } from "react-redux";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const buttonStyle = {
  border: "2px solid #14AE5C",
  color: "#14AE5C",
  paddingX: "20px",
  borderRadius: "10px",
};
const exportButton = {
  border: "2px solid rgb(212, 228, 219)",
  color: "black",
  paddingX: "20px",
  borderRadius: "10px",
};
export default function ViewBooking() {
  const buttonLabels = ["Upcoming", "Pending", "Completed", "Date Range"];
  const [appointments, setAppointments] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/allAppointments/${user.email}`
      );
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };
  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <Box
        sx={{ mt: 18, mx:20 }}
      >
        <Typography variant="body1" color="textSecondary">
          See your scheduled appointments from your calender events links.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">Bookings</Typography>
          <Button sx={buttonStyle}>+ Create</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {buttonLabels.map((label) => (
              <Button
                key={label}
                sx={{
                  color: "#606060", //text color
                  border: "none",
                  borderBottom: "2px solid transparent", // Default bottom border (invisible)
                  borderRadius: 0, // Ensure straight edges
                  paddingX: 2, // Adjust horizontal padding to maintain spacing
                  "&:hover": {
                    borderBottom: "2px solid #14AE5C",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button sx={exportButton}>
              {" "}
              <FileDownloadOutlinedIcon sx={{fontSize:"20px",mr:1}}/>
              Export
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px",backgroundColor:"red" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Booked For</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Created At</TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.prescriptionId}>
                <TableCell>{appointment.prescriptionId}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.note}</TableCell>
                <TableCell>{appointment.deliveryAddress}</TableCell>
                <TableCell>
                  <Chip
                    label={appointment.status}
                    color={
                        appointment.status === "Pending" ? "warning" : "success"
                    }
                  />
                </TableCell>
                {/* <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleView(prescription)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell> */}
              {/* </TableRow>
            ))}
          </TableBody>
           */}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
