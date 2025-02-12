package com.backend.booking.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentResDTO {
    private Long appointmentId;
    private Long userId;
    private Long slotId;
    private String name;
    private String email;
    private String phone;
    private String status;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
}
