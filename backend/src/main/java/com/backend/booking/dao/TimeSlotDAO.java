package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import com.backend.booking.model.Appointment;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
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

    public void addTimeSlot(TimeSlot timeSlot) {
        jdbcTemplate.update(SQLConstants.INSERT_TIME_SLOT,
                timeSlot.getDate(), timeSlot.getStartTime(), timeSlot.getEndTime(), timeSlot.getStatus());
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
    // Find appointments by slot ID
    public List<Appointment> findAppointmentsBySlotId(Long slotId) {
        return jdbcTemplate.query(SQLConstants.FIND_APPOINTMENTS_BY_SLOT_ID, new AppointmentRowMapper(), slotId);
    }

    // Update appointment status
    public void updateAppointmentStatus(Long appointmentId, String status, Long previousSlotId) {
        jdbcTemplate.update(SQLConstants.UPDATE_APPOINTMENT_STATUS, status, previousSlotId, appointmentId);
    }

    // Delete a time slot
    public void markTimeSlotInactive(Long slotId) {
        jdbcTemplate.update(SQLConstants.MARK_TIME_SLOT_INACTIVE, slotId);
    }
    public void updateAppointmentSlotId(Long appointmentId, Long newSlotId) {
        jdbcTemplate.update("UPDATE appointments SET slot_id = ? WHERE appointment_id = ?", newSlotId, appointmentId);
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
