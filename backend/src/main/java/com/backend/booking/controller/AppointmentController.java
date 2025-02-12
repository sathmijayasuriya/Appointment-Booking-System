package com.backend.booking.controller;


import com.backend.booking.dto.AppointmentReqDTO;
import com.backend.booking.dto.AppointmentResDTO;
import com.backend.booking.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

}
