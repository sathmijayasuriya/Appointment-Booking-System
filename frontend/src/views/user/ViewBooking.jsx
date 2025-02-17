import React, { useEffect, useState, } from 'react'
import { Box ,Typography,Button,Container,Grid2,TextField,Card,CardMedia,IconButton,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Chip,} from '@mui/material'
import { display } from '@mui/system'
import axios from "axios";
import { useSelector } from "react-redux";


const buttonStyle = {
    border: "2px solid #14AE5C",
    color: "#14AE5C",
    paddingX: "20px",
    borderRadius: "10px",
  };
export default function ViewBooking() {
    const [appointments,setAppointments] = useState(null);
    const { user } = useSelector((state) => state.auth);

    const fetchAppointments = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/api/user/allAppointments/${user.email}`)
            setAppointments(response.data);
        }catch(error){
            console.error("Error fetching appointments", error);
        }
    }
    useEffect(() => {
        fetchAppointments();
      }, []);

  return (
    <>
    <Box sx={{ mt: 18, px: 5, maxWidth: "1400px", mx: "auto",height:"100%" }}>
        <Typography variant="body1" color="textSecondary">
            See your scheduled events from your calender events links.
        </Typography>
        <Box sx={{display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  marginTop:"20px"}}>
            <Typography variant='h5'>Bookings</Typography>
            <Button sx={buttonStyle}>+ Create</Button>
        </Box>
        <Box sx={{marginTop:"20px"}}>
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
  )
}
