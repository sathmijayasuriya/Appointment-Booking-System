import React from 'react'
import { Box ,Typography,Button} from '@mui/material'
import { display } from '@mui/system'

const buttonStyle = {
    border: "2px solid #14AE5C",
    color: "#14AE5C",
    paddingX: "20px",
    borderRadius: "10px",
  };
export default function ViewBooking() {
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
    </Box>
    </>
  )
}
