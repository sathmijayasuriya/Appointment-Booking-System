import React, { useState } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Card,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("10.00am");
  const [formData, setFormData] = useState({
    name: "Sathmi Jayasuriya",
    email: "sathmijayasuriya@gmail.com",
    phone: "0705290345",
  });
  const [currentMonth, setCurrentMonth] = useState(dayjs("2025-01-01"));

  const timeSlots = [
    "9.00am",
    "9.30am",
    "10.00am",
    "10.30am",
    "11.00am",
    "11.30am",
    "12.00pm",
    "12.30pm",
    "2.00pm",
    "2.30pm",
    "3.00pm",
    "3.30pm",
    "4.00pm",
    "4.30pm",
    "5.00pm",
  ];

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Left Side: Calendar */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: 500,
              height: 700,
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Select Date
            </Typography>

            {/* Month Selector */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <IconButton
                onClick={() =>
                  handleMonthChange(currentMonth.subtract(2, "month"))
                }
              >
                <ChevronLeft />
              </IconButton>
              <Typography>{currentMonth.format("MMMM YYYY")}</Typography>
              <IconButton
                onClick={() => handleMonthChange(currentMonth.add(1, "month"))}
              >
                <ChevronRight />
              </IconButton>
            </Box>

            {/* Date Calendar */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                disableHighlightToday
                disablePast 
                shouldDisableDate={(date) => {
                  return false;
                }}
                views={["day"]}
                sx={{
                    width: "100%", 
                    height:"1000",
                    overflow: "hidden", 
                    "& .MuiPickersCalendarHeader-root": {
                      fontSize: "1.2rem", 
                    },
                    "& .MuiPickersDay-root": {
                      fontSize: "1.2rem", 
                      width: 48, // Adjusts day button width
                      height: 48, 
                    },
                    "& .MuiDayCalendar-weekDayLabel": {
                      fontSize: "1.1rem", 
                    },
                    "& .Mui-selected": {
                      border: "2px solid #0d47a1",
                      backgroundColor: "transparent",
                      color: "#0d47a1",
                    },
                    "& .MuiPickersDay-root.Mui-disabled": {
                      opacity: 0.5,
                    },
                  }}
              />
            </LocalizationProvider>
          </Box>
        </Grid>

        {/* Right Side: Time Slot Selection and Form */}
        <Grid item xs={12} md={5}>
          <Grid container direction="column" spacing={2}>
            {/* Time Slot Selection */}
            <Grid item>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">Select Time Slot</Typography>
                <RadioGroup
                  row
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {timeSlots.map((slot) => (
                    <FormControlLabel
                      key={slot}
                      value={slot}
                      control={<Radio color="primary" />}
                      label={slot}
                    />
                  ))}
                </RadioGroup>
              </Card>
            </Grid>

            {/* Booking Details Form */}
            <Grid item>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">Booking Details</Typography>
                <TextField
                  fullWidth
                  label="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  fullWidth
                >
                  Book Now
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
