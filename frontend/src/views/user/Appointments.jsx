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
  Box,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("10:00 - 10:30");
  const [formData, setFormData] = useState({
    name: "Sathmi Jayasuriya",
    email: "sathmijayasuriya@gmail.com",
    phone: "0705290345",
  });
  const [currentMonth, setCurrentMonth] = useState(dayjs("2025-01-01"));

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  const shouldDisableDate = (date) => {
    return date.isBefore(dayjs(), "day") && date.year() === dayjs().year();
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 18; hour++) {
      slots.push(`${hour}:00 - ${hour}:30`);
      slots.push(`${hour}:30 - ${hour + 1}:00`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBooking = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Booking confirmed:", { selectedDate, selectedTime, formData });
  };

  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Left Side: Calendar */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: 500,
              height: 600,
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "white",
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
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
                onClick={() => handleMonthChange(currentMonth.subtract(1, "month"))}
              >
                <ChevronLeft />
              </IconButton>

              <Typography
                sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
              >
                {currentMonth.format("MMMM YYYY")}
              </Typography>

              <IconButton
                onClick={() => handleMonthChange(currentMonth.add(1, "month"))}
              >
                <ChevronRight />
              </IconButton>
            </Box>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                disableHighlightToday
                shouldDisableDate={shouldDisableDate}
                views={["day"]}
                sx={{
                  width: "100%",
                  height: "900",
                  overflow: "hidden",
                  "& .MuiPickersCalendarHeader-root": { fontSize: "1.2rem" },
                  "& .MuiPickersDay-root": { fontSize: "1.2rem", width: 48, height: 48 },
                  "& .MuiDayCalendar-root": { height: "100%", minHeight: 350 },
                  "& .MuiDayCalendar-weekDayLabel": { fontSize: "1.1rem" },
                  "& .Mui-selected": {
                    border: "2px solid #0d47a1",
                    backgroundColor: "transparent",
                    color: "#0d47a1",
                  },
                  "& .MuiPickersDay-root.Mui-disabled": { opacity: 0.5, overflow: "hidden" },
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
                  onClick={handleBooking}
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