package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import com.backend.booking.dto.AppointmentDTO;
import com.backend.booking.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
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

}
