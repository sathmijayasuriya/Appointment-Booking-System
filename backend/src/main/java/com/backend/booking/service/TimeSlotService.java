package com.backend.booking.service;

import com.backend.booking.dao.TimeSlotDAO;
import com.backend.booking.dto.TimeSlotDTO;
import com.backend.booking.model.Appointment;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeSlotService {
    @Autowired
    private TimeSlotDAO timeSlotDAO;

    // Add a new time slot
    public Long addTimeSlot(TimeSlotDTO timeSlotDTO) {
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
        return timeSlotDAO.addTimeSlot(timeSlot);
    }

    // Update an existing time slot
    public void updateTimeSlot(TimeSlotDTO timeSlotDTO) {
        TimeSlot existingTimeSlot = timeSlotDAO.findTimeSlotById(timeSlotDTO.getSlotId());
        if (existingTimeSlot == null) {
            throw new IllegalArgumentException("Time slot not found.");
        }

        List<Appointment> appointments = timeSlotDAO.findAppointmentsBySlotId(timeSlotDTO.getSlotId());
        if (!appointments.isEmpty()) {
            // Mark the old slot as INACTIVE
            timeSlotDAO.updateTimeSlotStatus(timeSlotDTO.getSlotId(), "INACTIVE");

            // Insert new time slot and get its ID
            TimeSlot newTimeSlot = new TimeSlot(null, timeSlotDTO.getDate(), timeSlotDTO.getStartTime(), timeSlotDTO.getEndTime(), "BOOKED");
            Long newSlotId = timeSlotDAO.addTimeSlot(newTimeSlot); // Get new slot ID

            // Update appointments to use new slot
            for (Appointment appointment : appointments) {
                timeSlotDAO.updateAppointmentSlotAndStatus(
                        appointment.getAppointmentId(),
                        newSlotId, // Set new slot ID
                        appointment.getSlotId(), // Store previous slot ID
                        "BOOKED"
                );
            }
        } else {
            // If no bookings, simply update the slot
            existingTimeSlot.setDate(timeSlotDTO.getDate());
            existingTimeSlot.setStartTime(timeSlotDTO.getStartTime());
            existingTimeSlot.setEndTime(timeSlotDTO.getEndTime());
            timeSlotDAO.updateTimeSlot(existingTimeSlot);
        }
    }

    // Get all time slots
    public List<TimeSlot> getAllTimeSlots() {
        return timeSlotDAO.findAllTimeSlots();
    }
}
