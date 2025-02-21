package com.backend.booking.controller;


import com.backend.booking.constants.RestURI;
import com.backend.booking.scheduler.AppointmentScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class TestController {

    @Autowired
    AppointmentScheduler appointmentScheduler;

    @GetMapping(RestURI.TEST)
    public String getTest(){
        return "test passed";
    }

    @GetMapping("/test-daily-update")
    public ResponseEntity<String> testDailyUpdate() {
        appointmentScheduler.updateDailyAppointmentStatus();
        return ResponseEntity.ok("Daily update triggered");
    }

}
