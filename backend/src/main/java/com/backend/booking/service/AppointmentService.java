package com.backend.booking.service;

import com.backend.booking.dao.AppointmentDAO;
import com.backend.booking.dao.UserDAO;
import com.backend.booking.dto.AppointmentAdminResDTO;
import com.backend.booking.dto.AppointmentReqDTO;

import com.backend.booking.dto.AppointmentUserResDTO;
import com.backend.booking.exceptions.UnauthorizedException;
import com.backend.booking.scheduler.AppointmentScheduler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    private static final Logger logger = LoggerFactory.getLogger(AppointmentService.class);

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
        Long userId = userDAO.findUserIdByEmail(email);
        logger.info("user id :"+userId);
        if (userId == null) {
            throw new IllegalArgumentException("User not found.");
        }
        String status = appointmentDAO.getAppointmentStatus(appointmentId,userId);
        logger.info("status  :"+status);

        if (status == null) {
            throw new IllegalArgumentException("Appointment not found or status is invalid.");
        }
        if (!status.equals("PENDING_RESCHEDULE") && !status.equals("BOOKED")) {
            throw new IllegalArgumentException("Only BOOKED or PENDING_RESCHEDULE appointments can be cancelled.");
        }
        boolean success = appointmentDAO.cancelAppointment(userId, appointmentId);
        if (!success) {
            throw new IllegalArgumentException("Appointment not found or already cancelled.");
        }
    }

    //completed appointments
    public void markCompletedAppointments() {
        int updatedRows = appointmentDAO.updateCompletedAppointments();
        System.out.println("Completed Appointments Updated: " + updatedRows);
    }

    public boolean isAdmin(String email) {
        // Check if the user has the role of 'ADMIN'
        String role = userDAO.findUserRoleByEmail(email);
        return "ADMIN".equals(role);
    }

    public boolean markAppointmentAsNoShow(Long appointmentId) {
        // Update the appointment status to NO_SHOW
        int updatedRows = appointmentDAO.updateNoShowAppointments(appointmentId);
        return updatedRows > 0;
    }

    // accept new slot by user
    public boolean acceptSlot(String email, Long appointmentId) {
        Long userId = userDAO.findUserIdByEmail(email);
        if (userId == null) {
            throw new IllegalArgumentException("User not found.");
        }
        return appointmentDAO.acceptRescheduledSlot(appointmentId, userId) > 0;
    }


}
