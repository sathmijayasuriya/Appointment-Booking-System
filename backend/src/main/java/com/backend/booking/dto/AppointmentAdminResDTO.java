package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentAdminResDTO {

    private Long appointmentId;
    private Long userId;
    private String userName;
    private String userEmail;
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
