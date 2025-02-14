package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AppointmentUserResDTO {
    private Long appointmentId;
    private Long slotId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private String bookingForName;
    private String bookingForEmail;
    private String bookingForContact;
    private String status;
    private LocalDateTime createdAt;
}
