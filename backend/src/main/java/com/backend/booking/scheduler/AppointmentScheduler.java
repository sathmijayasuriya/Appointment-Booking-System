package com.backend.booking.scheduler;


import com.backend.booking.service.AppointmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class AppointmentScheduler {

    private static final Logger logger = LoggerFactory.getLogger(AppointmentScheduler.class);
    @Autowired
    private AppointmentService appointmentService;

    @Scheduled(cron = "59 59 23 * * ?") // Runs daily at 11:59 PM
    public void updateDailyAppointmentStatus() {
        logger.info("Running daily appointment status update...");

        appointmentService.markCompletedAppointments();
        logger.info("Daily appointment status update completed.");
    }

}
