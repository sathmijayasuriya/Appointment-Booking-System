package com.backend.booking.constants;

public class SQLConstants {

    public static final String INSERT_TIME_SLOT = "INSERT INTO time_slots (date, start_time, end_time, status) VALUES (?, ?, ?, ?)";
    public static final String UPDATE_TIME_SLOT = "UPDATE time_slots SET date = ?, start_time = ?, end_time = ?, status = ? WHERE slot_id = ?";
    public static final String FIND_TIME_SLOT_BY_ID = "SELECT * FROM time_slots WHERE slot_id = ?";
    public static final String FIND_ALL_TIME_SLOTS = "SELECT * FROM time_slots";
    public static final String FIND_TIME_SLOT_BY_DATE_AND_TIME = "SELECT * FROM time_slots WHERE date = ? AND start_time = ? AND end_time = ?";

}
