package com.backend.booking.controller;


import com.backend.booking.dto.TimeSlotDTO;
import com.backend.booking.model.TimeSlot;
import com.backend.booking.service.TimeSlotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TimeSlotController {

    @Autowired
    private TimeSlotService timeSlotService;

    @PostMapping("/addTimeSlot")
    public ResponseEntity<?> addTimeSlot(@RequestBody TimeSlotDTO timeSlotDTO) {
        try {
            timeSlotService.addTimeSlot(timeSlotDTO);
            return ResponseEntity.ok("Time slot added successfully");
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
}
