package com.backend.booking.service;

import com.backend.booking.dao.AppointmentDAO;
import com.backend.booking.dao.UserDAO;
import com.backend.booking.dto.AppointmentAdminResDTO;
import com.backend.booking.dto.AppointmentReqDTO;

import com.backend.booking.dto.AppointmentUserResDTO;
import com.backend.booking.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class AppointmentService {
    @Autowired
    private AppointmentDAO appointmentDAO;

    @Autowired
    private UserDAO userDAO;

    public void bookAppointment(AppointmentReqDTO appointmentReqDTO) {

        String slotStatus = appointmentDAO.getTimeSlotStatus(appointmentReqDTO.getSlotId());
        if (!"AVAILABLE".equals(slotStatus)) {
            throw new IllegalArgumentException("This time slot is already booked.");
        }
        // Get user ID from email
        Long userId = userDAO.findUserIdById(appointmentReqDTO.getUserId());
        if (userId == null) {
            throw new IllegalArgumentException("User must be registered to book an appointment.");
        }
        // Add appointment
        appointmentDAO.addAppointment(userId, appointmentReqDTO.getSlotId(),
                appointmentReqDTO.getBookingForName(), appointmentReqDTO.getBookingForEmail(), appointmentReqDTO.getBookingForContact());

        // Update time slot status
        appointmentDAO.updateTimeSlotStatus(appointmentReqDTO.getSlotId());
    }

    public List<AppointmentAdminResDTO> getAllAppointments(String userEmail) {
        // Check if the user is an admin
        String role = userDAO.findUserRoleByEmail(userEmail);
        if (!"ADMIN".equals(role)) {
            throw new UnauthorizedException("Access denied. Only admins can view appointments.");
        }

        return appointmentDAO.getAllAppointments();
    }
    public List<AppointmentUserResDTO> getUserAppointments(String email) {
        // Get user ID using email
        Long userId = userDAO.findUserIdByEmail(email);
        if (userId == null) {
            throw new IllegalArgumentException("User not found.");
        }

        return appointmentDAO.getAppointmentsByUserId(userId);
    }
    public void cancelAppointment(String email, Long appointmentId) {
        // Get user ID using email
        Long userId = userDAO.findUserIdByEmail(email);
        if (userId == null) {
            throw new IllegalArgumentException("User not found.");
        }

        boolean success = appointmentDAO.cancelAppointment(userId, appointmentId);
        if (!success) {
            throw new IllegalArgumentException("Appointment not found or already cancelled.");
        }
    }


}
