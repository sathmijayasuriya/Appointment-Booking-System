package com.backend.booking.constants;

public class SQLConstants {
    // Existing queries
    public static final String INSERT_TIME_SLOT = "INSERT INTO time_slots (date, start_time, end_time, status) VALUES (?, ?, ?, ?)";
    public static final String UPDATE_TIME_SLOT = "UPDATE time_slots SET date = ?, start_time = ?, end_time = ?, status = ? WHERE slot_id = ?";
    public static final String FIND_TIME_SLOT_BY_ID = "SELECT * FROM time_slots WHERE slot_id = ?";
    public static final String FIND_ALL_TIME_SLOTS = "SELECT * FROM time_slots";
    public static final String FIND_TIME_SLOT_BY_DATE_AND_TIME = "SELECT * FROM time_slots WHERE date = ? AND start_time = ? AND end_time = ?";
    public static final String FIND_APPOINTMENTS_BY_SLOT_ID = "SELECT * FROM appointments WHERE slot_id = ?";
    public static final String UPDATE_APPOINTMENT_STATUS = "UPDATE appointments SET status = ?, previous_slot_id = ? WHERE appointment_id = ?";

    // New query to mark a time slot as INACTIVE
    // New queries for marking time slots as INACTIVE and updating appointments
    public static final String MARK_TIME_SLOT_AS_INACTIVE = "UPDATE time_slots SET status = 'INACTIVE' WHERE slot_id = ?";
    public static final String UPDATE_APPOINTMENT_SLOT = "UPDATE appointments SET slot_id = ? WHERE appointment_id = ?";

}
