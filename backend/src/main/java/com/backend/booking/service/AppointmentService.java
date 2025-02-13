package com.backend.booking.service;

import com.backend.booking.dao.AppointmentDAO;
import com.backend.booking.dao.TimeSlotDAO;
import com.backend.booking.dao.UserDAO;
import com.backend.booking.dto.AppointmentDTO;
import com.backend.booking.dto.AppointmentReqDTO;
import com.backend.booking.dto.AppointmentResDTO;
import com.backend.booking.model.Appointment;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentDAO appointmentDAO;

    @Autowired
    private UserDAO userDAO;

    public void bookAppointment(AppointmentReqDTO appointmentReqDTO) {
        // Get user ID from email
        Long userId = userDAO.findUserIdByEmail(appointmentReqDTO.getEmail());
        if (userId == null) {
            throw new IllegalArgumentException("User must be registered to book an appointment.");
        }

        // Add appointment
        appointmentDAO.addAppointment(userId, appointmentReqDTO.getSlotId());

        // Update time slot status
        appointmentDAO.updateTimeSlotStatus(appointmentReqDTO.getSlotId());
    }


}
