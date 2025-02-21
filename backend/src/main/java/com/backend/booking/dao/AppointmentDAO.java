package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import com.backend.booking.dto.AppointmentAdminResDTO;
import com.backend.booking.dto.AppointmentUserResDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class AppointmentDAO {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Insert appointment
    public void addAppointment(Long userId, Long slotId, String bookingForName, String bookingForEmail, String bookingForContact) {
        jdbcTemplate.update(SQLConstants.INSERT_APPOINTMENT, userId, slotId,bookingForName, bookingForEmail, bookingForContact);
    }
    // Update time slot status
    public void updateTimeSlotStatus(Long slotId) {
        jdbcTemplate.update(SQLConstants.UPDATE_TIME_SLOT_STATUS_BOOKED, slotId);
    }
    public String getTimeSlotStatus(Long slotId) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.CHECK_TIME_SLOT, String.class, slotId);
        } catch (EmptyResultDataAccessException e) {
            return null; // If slot does not exist
        }
    }
    public List<AppointmentAdminResDTO> getAllAppointments() {
        return jdbcTemplate.query(SQLConstants.FIND_ALL_APPOINTMENTS, (rs, rowNum) ->
                new AppointmentAdminResDTO(
                        rs.getLong("appointment_id"),
                        rs.getLong("user_id"),
                        rs.getString("user_name"),
                        rs.getString("user_email"),
                        rs.getLong("slot_id"),
                        rs.getDate("date").toLocalDate(),
                        rs.getTime("start_time").toLocalTime(),
                        rs.getTime("end_time").toLocalTime(),
                        rs.getString("booking_for_name"),
                        rs.getString("booking_for_email"),
                        rs.getString("booking_for_contact"),
                        rs.getString("status"),
                        rs.getTimestamp("created_at").toLocalDateTime()
                )
        );
    }
    public List<AppointmentUserResDTO> getAppointmentsByUserId(Long userId) {
        return jdbcTemplate.query(SQLConstants.FIND_APPOINTMENTS_BY_USER_ID, (rs, rowNum) ->
                        new AppointmentUserResDTO(
                                rs.getLong("appointment_id"),
                                rs.getLong("slot_id"),
                                rs.getDate("date").toLocalDate(),
                                rs.getTime("start_time").toLocalTime(),
                                rs.getTime("end_time").toLocalTime(),
                                rs.getString("booking_for_name"),
                                rs.getString("booking_for_email"),
                                rs.getString("booking_for_contact"),
                                rs.getString("status"),
                                rs.getTimestamp("created_at").toLocalDateTime()
                        ),
                userId
        );
    }
    //cancel the appointment
    public boolean cancelAppointment(Long userId, Long appointmentId) {
        // Get the slot_id of the appointment
        Long slotId = getAppointmentSlotId(userId, appointmentId);
        if (slotId == null) {
            return false; // Appointment not found or not owned by user
        }
        // Cancel the appointment
        int updatedRows = jdbcTemplate.update(SQLConstants.CANCEL_APPOINTMENT, appointmentId, userId);
        if (updatedRows > 0) {
            // Update the time slot to AVAILABLE
            jdbcTemplate.update(SQLConstants.UPDATE_TIME_SLOT_STATUS_AVAILABLE, slotId);
            return true;
        }
        return false;
    }
    // Get slot_id from appointment
    public Long getAppointmentSlotId(Long userId, Long appointmentId) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_APPOINTMENT_SLOT_ID, Long.class, appointmentId, userId);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
    //completed appointments
    public int updateCompletedAppointments() {
        return jdbcTemplate.update(SQLConstants.UPDATE_COMPLETED_APPOINTMENTS);
    }

    public int updateNoShowAppointments(Long appointmentId) {
        return jdbcTemplate.update(SQLConstants.UPDATE_NO_SHOW_APPOINTMENTS, appointmentId);
    }

    //user accept new time slot
    public int acceptRescheduledSlot(Long appointmentId, Long userId) {
        return jdbcTemplate.update(SQLConstants.ACCEPT_RESCHEDULED_SLOT, appointmentId, userId);
    }
    public String getAppointmentStatus(Long appointmentId, Long userId) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.GET_APPOINTMENT_STATUS,
                    new Object[]{appointmentId, userId}, String.class);
        } catch (Exception e) {
            return null;
        }
    }




}
