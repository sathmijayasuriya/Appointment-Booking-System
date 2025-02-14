package com.backend.booking.constants;

public class SQLConstants {
    // Existing queries
    public static final String INSERT_TIME_SLOT = "INSERT INTO time_slots (date, start_time, end_time, status) VALUES (?, ?, ?, ?)";
    public static final String UPDATE_TIME_SLOT = "UPDATE time_slots SET date = ?, start_time = ?, end_time = ?, status = ? WHERE slot_id = ?";
    public static final String FIND_TIME_SLOT_BY_ID = "SELECT * FROM time_slots WHERE slot_id = ?";
    public static final String FIND_ALL_TIME_SLOTS = "SELECT * FROM time_slots";
    public static final String FIND_TIME_SLOT_BY_DATE_AND_TIME = "SELECT * FROM time_slots WHERE date = ? AND start_time = ? AND end_time = ?";
    public static final String FIND_APPOINTMENTS_BY_SLOT_ID = "SELECT * FROM appointments WHERE slot_id = ?";
    public static final String UPDATE_APPOINTMENT_SLOT_AND_STATUS = "UPDATE appointments SET slot_id = ?, previous_slot_id = ?, status = ? WHERE appointment_id = ?";
    public static final String UPDATE_TIME_SLOT_STATUS = "UPDATE time_slots SET status = ? WHERE slot_id = ?";


    //add appointment
    public static final String INSERT_APPOINTMENT =  "INSERT INTO appointments (user_id, slot_id, booking_for_name, booking_for_email, booking_for_contact, status)VALUES (?, ?, ?, ?, ?, 'BOOKED')";
    public static final String UPDATE_TIME_SLOT_STATUS_BOOKED = "UPDATE time_slots SET status = 'BOOKED' WHERE slot_id = ?";
    public static final String FIND_USER_BY_ID = "SELECT user_id FROM users WHERE user_id = ?";
    public static final String CHECK_TIME_SLOT = "SELECT status FROM time_slots WHERE slot_id = ?";

}
