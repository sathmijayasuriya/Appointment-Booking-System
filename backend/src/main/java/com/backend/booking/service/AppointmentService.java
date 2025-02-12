package com.backend.booking.service;

import com.backend.booking.dao.AppointmentDAO;
import com.backend.booking.dao.TimeSlotDAO;
import com.backend.booking.dto.AppointmentDTO;
import com.backend.booking.dto.AppointmentReqDTO;
import com.backend.booking.dto.AppointmentResDTO;
import com.backend.booking.model.Appointment;
import com.backend.booking.model.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentDAO appointmentDAO;
    @Autowired
    private TimeSlotDAO timeSlotDAO;


}
