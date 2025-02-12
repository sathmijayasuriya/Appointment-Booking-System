package com.backend.booking.dao;

import com.backend.booking.dto.AppointmentDTO;
import com.backend.booking.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
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

    // Add a new appointment
    public void addAppointment(AppointmentDTO appointmentDTO) {
        String sql = "INSERT INTO appointments (user_id, slot_id, status, previous_slot_id) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, appointmentDTO.getUserId(), appointmentDTO.getSlotId(), appointmentDTO.getStatus(), appointmentDTO.getPreviousSlotId());
    }

    // Update appointment status
    public void updateAppointmentStatus(Long appointmentId, String status) {
        String sql = "UPDATE appointments SET status = ? WHERE appointment_id = ?";
        jdbcTemplate.update(sql, status, appointmentId);
    }

    // Find appointment by ID
    public Appointment findAppointmentById(Long appointmentId) {
        String sql = "SELECT * FROM appointments WHERE appointment_id = ?";
        return jdbcTemplate.queryForObject(sql, new AppointmentRowMapper(), appointmentId);
    }

    // Find all appointments for a user
    public List<Appointment> findAppointmentsByUserId(Long userId) {
        String sql = "SELECT * FROM appointments WHERE user_id = ?";
        return jdbcTemplate.query(sql, new AppointmentRowMapper(), userId);
    }

    // Find all appointments (admin view)
    public List<Appointment> findAllAppointments() {
        String sql = "SELECT * FROM appointments";
        return jdbcTemplate.query(sql, new AppointmentRowMapper());
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
