import React, { useState } from "react";
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDatePicker,PickersActionBar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TimePicker from "@ashwinthomas/react-time-picker-dropdown";
import "react-time-picker/dist/TimePicker.css";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';



export const Slots = () => {

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [formData, setFormData] = useState({
    name: "Sathmi Jayasuriya",
    email: "sathmijayasuriya@gmail.com",
    phone: "0705290345",
  });
  const timeSlots = [
    "9:00 - 9:30",
    "9:30 - 10:00",
    "10:30 - 11:00",
    "12:00 - 12:30",
    "2:00 - 2:30",
    "3:00 - 3:30",
    "4:00 - 4:30",
  ];
  const buttonStyle = {
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

  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:30");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // marginRight: 17,
          // backgroundColor:"red",
          p:5,  
          mx:10
        }}
      >
        <Typography variant="h5">
          Manage Time-Slots
        </Typography>
        <Button sx={buttonStyle}>+ Add Time-Slot</Button>
      </Box>
      <Card
        sx={{
          paddingTop: 5,
          pb: 2,
          borderRadius: 2,
          boxShadow: "none",
          marginX: 25,
          mt: 2,
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Box
          sx={{
            boxShadow: "none",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 10,
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, textAlign: "left", color: "#344054" }}
          >
            Select Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              disablePast
              views={["year", "month", "day"]}
              slots={{
                actionBar: PickersActionBar,
              }}
              slotProps={{
                actionBar: {
                  actions: ["clear"],
                  onClear: () => setSelectedDate(dayjs()), // Reset to present date
                },
              }}          
              sx={{
                width: "100%",
                "& .MuiPickersYear-yearButton": {
                  // backgroundColor: "#e3f2fd", // Light blue background
                  // color: "#0d47a1", // Dark blue text
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#1565c0",
                    color: "white",
                  },
                },
                "& .MuiPickersMonth-monthButton": {
                  // backgroundColor: "#f3e5f5", // Light purple background
                  // color: "#6a1b9a", // Dark purple text
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    border: "1px solid #e3f2fd",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#1565c0",
                    color: "white",
                  },
                },
                "& .MuiPickersDay-root": {
                  width: 41,
                  height: 36,
                  fontSize: "1rem",
                  borderRadius: "8px",
                },
                "& .MuiDayCalendar-weekContainer": {
                  gap: "5px",
                },
                "& .MuiPickersCalendarHeader-root": {
                  mb: 1,
                  // marginX:3,
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  marginLeft: "auto",
                },

                "& .MuiDayCalendar-weekDayLabel": {
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginX: "5px",
                }, // Change font size here
               }}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mb: 3, color: "#344054" }}>
            Time Slot Details
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Start time</TableCell>
                  <TableCell>End time</TableCell>
                  <TableCell>status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <Divider />
          <Typography variant="h6" sx={{ mt: 15, color: "#344054" }}>
            Slot Details
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" ,gap:4}}>
            <TimePicker
              // onChange={handleTimeChange}
              // value={startTime}
              // defaultValue="00 : 00: 00 am"
              placeholder="hh : mm : ss a"
              useTwelveHourFormat={true}
              showClockIcon={true}
              showCloseIcon={true}
              allowBackdrop={true}
            />
            <TimePicker
              defaultValue="00 : 00: 00 am"
              placeholder="hh : mm : ss a"
              useTwelveHourFormat={true}
              showClockIcon={true}
              showCloseIcon={true}
              allowBackdrop={true}
            />
 
          </Box>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Button
              variant="outlined"
              sx={{
                width: "auto",
                mt: 2,
                // bgcolor: "white",
                border: "2px solid #14AE5C",
                color: "#14AE5C",
                borderRadius: "8px",
                "&:hover": { bgcolor: "#14AE5C", color: "white" },
              }}
              fullWidth
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};
