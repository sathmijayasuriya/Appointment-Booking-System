package com.backend.booking.controller;


import com.backend.booking.dto.AppointmentAdminResDTO;
import com.backend.booking.dto.AppointmentReqDTO;
import com.backend.booking.exceptions.UnauthorizedException;
import com.backend.booking.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/book")
    public ResponseEntity<String> bookAppointment(@RequestBody AppointmentReqDTO appointmentReqDTO) {
        try {
            System.out.println("request booked name : "+appointmentReqDTO.getBookingForName());
            appointmentService.bookAppointment(appointmentReqDTO);
            return ResponseEntity.ok("Appointment booked successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping("/admin/allAppointments")
    public ResponseEntity<?> getAllAppointments(@RequestParam String adminEmail) {
        try {
            List<AppointmentAdminResDTO> appointments = appointmentService.getAllAppointments(adminEmail);
            return ResponseEntity.ok(appointments);
        } catch (UnauthorizedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(e.getMessage());
        }
    }

}
