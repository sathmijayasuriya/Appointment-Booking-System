package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import com.backend.booking.model.Appointment;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public class TimeSlotDAO {
    @Autowired
    private JdbcTemplate jdbcTemplate;


    public boolean isTimeSlotExists(LocalDate date, LocalTime startTime, LocalTime endTime) {
        List<TimeSlot> timeSlots = jdbcTemplate.query(SQLConstants.FIND_TIME_SLOT_BY_DATE_AND_TIME, new TimeSlotRowMapper(), date, startTime, endTime);
        return !timeSlots.isEmpty();
    }

    public Long addTimeSlot(TimeSlot timeSlot) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(SQLConstants.INSERT_TIME_SLOT, Statement.RETURN_GENERATED_KEYS);
            ps.setDate(1, Date.valueOf(timeSlot.getDate()));
            ps.setTime(2, Time.valueOf(timeSlot.getStartTime()));
            ps.setTime(3, Time.valueOf(timeSlot.getEndTime()));
            ps.setString(4, timeSlot.getStatus());
            return ps;
        }, keyHolder);

        return keyHolder.getKey().longValue(); // Return generated slot_id
    }


    public void updateTimeSlot(TimeSlot timeSlot) {
        jdbcTemplate.update(SQLConstants.UPDATE_TIME_SLOT,
                timeSlot.getDate(), timeSlot.getStartTime(), timeSlot.getEndTime(), timeSlot.getStatus(), timeSlot.getSlotId());
    }

    public TimeSlot findTimeSlotById(Long slotId) {
        return jdbcTemplate.queryForObject(SQLConstants.FIND_TIME_SLOT_BY_ID, new TimeSlotRowMapper(), slotId);
    }

    public List<TimeSlot> findAllTimeSlots() {
        return jdbcTemplate.query(SQLConstants.FIND_ALL_TIME_SLOTS, new TimeSlotRowMapper());
    }

    // RowMapper for TimeSlot
    private static class TimeSlotRowMapper implements RowMapper<TimeSlot> {
        @Override
        public TimeSlot mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new TimeSlot(
                    rs.getLong("slot_id"),
                    rs.getDate("date").toLocalDate(),
                    rs.getTime("start_time").toLocalTime(),
                    rs.getTime("end_time").toLocalTime(),
                    rs.getString("status")
            );
        }
    }

    //edit

    // Find appointments by slot ID
    public List<Appointment> findAppointmentsBySlotId(Long slotId) {
        return jdbcTemplate.query(SQLConstants.FIND_APPOINTMENTS_BY_SLOT_ID, new AppointmentRowMapper(), slotId);
    }

    // Update time slot status
    public void updateTimeSlotStatus(Long slotId, String status) {
        jdbcTemplate.update(SQLConstants.UPDATE_TIME_SLOT_STATUS, status, slotId);
    }

    // Update appointment slot ID, previous slot ID, and status
    public void updateAppointmentSlotAndStatus(Long appointmentId, Long newSlotId, Long previousSlotId, String status) {
        jdbcTemplate.update(SQLConstants.UPDATE_APPOINTMENT_SLOT_AND_STATUS, newSlotId, previousSlotId, status, appointmentId);
    }


    // RowMapper for Appointment
    private static class AppointmentRowMapper implements RowMapper<Appointment> {
        @Override
        public Appointment mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new Appointment(
                    rs.getLong("appointment_id"),
                    rs.getLong("user_id"),
                    rs.getLong("slot_id"),
                    rs.getString("status"),
                    rs.getLong("previous_slot_id"),
                    rs.getTimestamp("created_at").toLocalDateTime()
            );
        }
    }

}
