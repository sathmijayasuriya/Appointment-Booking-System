package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class AppointmentReqDTO {
    private Long userId;
    private Long slotId;
    private String name;
    private String email;
    private String phone;

 }
