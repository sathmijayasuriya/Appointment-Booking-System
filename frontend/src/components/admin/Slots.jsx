import React, { useState } from "react";
import { TextField, Button, Grid, Card, Typography, Box } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const Slots = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("10.00am");

  return (
    <>
      <Box sx={{display:"flex"}}>
        <Box
          sx={{
            p: 3,
            mt:5,
            borderRadius: 2,
            boxShadow: "none",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingX:10
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
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
      </Box>
    </>
  );
};
