import React, { useState } from "react";
import { TextField, Button, Grid, Card, Typography, Box } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("10.00am");
  const [formData, setFormData] = useState({
    name: "Sathmi Jayasuriya",
    email: "sathmijayasuriya@gmail.com",
    phone: "0705290345",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const shouldDisableDate = (date) => date.isBefore(dayjs(), "day");

  const timeSlots = [
    "9:00 - 9:30",
    "9:30 - 10:00",
    "10:30 - 11:00",
    "12:00 - 12:30",
    "2:00 - 2:30",
    "3:00 - 3:30",
    "4:00 - 4:30",
  ];

  return (
    <Box sx={{ mt: 13, px: 5, maxWidth: "1400px", mx: "auto" }}>
      <Grid container spacing={10} sx={{ alignItems: "", height: "100%" }}>
        <Grid item xs={12} md={4} 
              // sx={{ backgroundColor: "red" }}
              >
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              Select Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                disablePast
                views={["year", "month", "day"]}
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
                      border : "1px solid #e3f2fd"
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
                    mb: 1 ,
                    // marginX:3,
            
                  },
                  "& .MuiPickersCalendarHeader-switchViewButton": {
                    marginLeft: "auto", 
                  },
            
                  "& .MuiDayCalendar-weekDayLabel": { fontSize: "1rem", fontWeight: "bold", marginX: "5px", } // Change font size here
                }}
              />
            </LocalizationProvider>
          </Box>
        </Grid>

        <Grid item xs={12} md={8} 
              // sx={{ backgroundColor: "red" }}
              >
          <Card sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Select Time Slot
            </Typography>
            <Grid container spacing={2} style={{marginBottom:"40px"}}>
              {timeSlots.map((slot) => (
                <Grid item xs={3} key={slot}>
                  <Button
                    variant={selectedTime === slot ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => setSelectedTime(slot)}
                    sx={{
                      borderRadius: "8px",
                      padding: "10px 0",
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: selectedTime === slot ? "#0d47a1" : "#e3f2fd",
                      },
                      bgcolor: selectedTime === slot ? "#0d47a1" : "white",
                      color: selectedTime === slot ? "white" : "#0d47a1",
                    }}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))}
            </Grid>
          {/* </Card>

          <Card sx={{ padding: 3, mt: 3, borderRadius: 2, boxShadow: 3 }}> */}
            <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
              Booking Details
            </Typography>
            {Object.keys(formData).map((field) => (
              <TextField
                key={field}
                fullWidth
                label={field.replace(/\b\w/g, (l) => l.toUpperCase())}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                margin="normal"
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: 1,
                  "&:hover": { bgcolor: "#e0e0e0" },
                }}
              />
            ))}
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Button
                variant="contained"
                sx={{
                  width: "15%",
                  mt: 2,
                  bgcolor: "white",
                  border: "2px solid #1565c0",
                  color: "#1565c0",
                  borderRadius: "8px",
                  // fontWeight: "bold",
                  "&:hover": { bgcolor: "#1565c0", color: "white" },
                }}
                fullWidth
              >
                Book Now
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
