package com.backend.booking.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Appointment {
    private Long appointmentId;
    private Long userId;
    private Long slotId;
    private String status;
    private Long previousSlotId;
    private LocalDateTime createdAt;

}
