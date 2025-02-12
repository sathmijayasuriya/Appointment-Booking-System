package com.backend.booking.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AppointmentDTO {
    private Long appointmentId;
    private Long userId;
    private Long slotId;
    private String status;
    private Long previousSlotId;

}
