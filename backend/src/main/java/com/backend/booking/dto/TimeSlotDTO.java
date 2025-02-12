package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class TimeSlotDTO {
    private Long slotId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    private String status;
}
