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

}
