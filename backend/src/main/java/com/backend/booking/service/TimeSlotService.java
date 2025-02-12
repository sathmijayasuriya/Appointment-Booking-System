package com.backend.booking.service;

import com.backend.booking.dao.TimeSlotDAO;
import com.backend.booking.dto.TimeSlotDTO;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeSlotService {
    @Autowired
    private TimeSlotDAO timeSlotDAO;

    // Add a new time slot
    public void addTimeSlot(TimeSlotDTO timeSlotDTO) {
        // Check for duplicate time slot
        if (timeSlotDAO.isTimeSlotExists(timeSlotDTO.getDate(), timeSlotDTO.getStartTime(), timeSlotDTO.getEndTime())) {
            throw new IllegalArgumentException("A time slot with the same date, start time, and end time already exists.");
        }

        TimeSlot timeSlot = new TimeSlot(
                null,
                timeSlotDTO.getDate(),
                timeSlotDTO.getStartTime(),
                timeSlotDTO.getEndTime(),
                "AVAILABLE" // Default status
        );
        timeSlotDAO.addTimeSlot(timeSlot);
    }

    // Update an existing time slot
    public void updateTimeSlot(TimeSlotDTO timeSlotDTO) {
        // Check for duplicate time slot (excluding the current slot being updated)
        if (timeSlotDAO.isTimeSlotExists(timeSlotDTO.getDate(), timeSlotDTO.getStartTime(), timeSlotDTO.getEndTime())) {
            TimeSlot existingTimeSlot = timeSlotDAO.findTimeSlotById(timeSlotDTO.getSlotId());
            if (!existingTimeSlot.getDate().equals(timeSlotDTO.getDate()) ||
                    !existingTimeSlot.getStartTime().equals(timeSlotDTO.getStartTime()) ||
                    !existingTimeSlot.getEndTime().equals(timeSlotDTO.getEndTime())) {
                throw new IllegalArgumentException("A time slot with the same date, start time, and end time already exists.");
            }
        }
        TimeSlot timeSlot = timeSlotDAO.findTimeSlotById(timeSlotDTO.getSlotId());
        if (timeSlot != null) {
            timeSlot.setDate(timeSlotDTO.getDate());
            timeSlot.setStartTime(timeSlotDTO.getStartTime());
            timeSlot.setEndTime(timeSlotDTO.getEndTime());
            timeSlot.setStatus(timeSlotDTO.getStatus());
            timeSlotDAO.updateTimeSlot(timeSlot);
        }
    }

    // Get all time slots
    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotDAO.findAllTimeSlots();
    }
}
