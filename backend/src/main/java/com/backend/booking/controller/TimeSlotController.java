package com.backend.booking.controller;


import com.backend.booking.dto.TimeSlotDTO;
import com.backend.booking.exceptions.UnauthorizedException;
import com.backend.booking.model.TimeSlot;
import com.backend.booking.service.AppointmentService;
import com.backend.booking.service.AuthService;
import com.backend.booking.service.TimeSlotService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TimeSlotController {

    @Autowired
    private TimeSlotService timeSlotService;

    @Autowired
    private AuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(TimeSlotController.class);

    @PostMapping("/addTimeSlot")
    public ResponseEntity<?> addTimeSlot(@RequestBody TimeSlotDTO timeSlotDTO) {
        try {
           Long slotId = timeSlotService.addTimeSlot(timeSlotDTO);
            return ResponseEntity.ok("Time slot added successfully with ID: "+slotId);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Update an existing time slot
    @PutMapping("/{slotId}")
    public ResponseEntity<?> updateTimeSlot(@PathVariable Long slotId, @RequestBody TimeSlotDTO timeSlotDTO) {
        try {
            timeSlotDTO.setSlotId(slotId);
            timeSlotService.updateTimeSlot(timeSlotDTO);
            return ResponseEntity.ok("Time slot updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Get all time slots
    @GetMapping("/getAllSlots")
    public ResponseEntity<List<TimeSlot>> getAllTimeSlots() {
        return ResponseEntity.ok(timeSlotService.getAllTimeSlots());
    }

    //delete slot by admin
    @DeleteMapping("/user/deleteSlot")
    public ResponseEntity<String> deleteSlot(@RequestParam String email, @RequestParam Long slotId){
        logger.info("request email and Slot id :  :"+email+" ,"+slotId);
        if(!authService.isAdmin(email)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied. Only admins can remove slots.");
        }
        boolean removed = timeSlotService.deleteSlot(slotId);
        if(removed){
            return ResponseEntity.ok("Slot Deleted succefully");
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Time slot already deleted");
        }
    }
}
