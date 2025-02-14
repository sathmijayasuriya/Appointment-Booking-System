package com.backend.booking.service;

import com.backend.booking.dao.UserDAO;
import com.backend.booking.dto.UserReqLoginDTO;
import com.backend.booking.dto.UserRequestDTO;
import com.backend.booking.dto.UserResLoginDTO;
import com.backend.booking.dto.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AuthService {

    @Autowired
    UserDAO userDAO;
    @Autowired
    private PasswordEncoder passwordEncoder;  // BCrypt Password Encoder


    // Register a new user or admin
    public UserResponseDTO registerUser(UserRequestDTO userDTO) {
        // Ensure role is set to USER if not provided
        if (userDTO.getRole() == null || userDTO.getRole().isEmpty()) {
            userDTO.setRole("USER");
        }
        // Hash the password
        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());

        // Store user details in DB
        userDAO.registerUser(userDTO, hashedPassword);

        // Retrieve and return the stored user details
        return userDAO.findUserByEmail(userDTO.getEmail());
    }

    // Authenticate login
    public UserResLoginDTO login(UserReqLoginDTO loginDTO) {
        // Validate credentials
        UserResLoginDTO user = userDAO.authenticateUser(loginDTO.getEmail(), loginDTO.getPassword());
        if (user == null) {
            throw new IllegalArgumentException("Invalid email or password.");
        }
        return user;
    }
    public UserResponseDTO getUserByEmail(String email) {
        return userDAO.findUserByEmail(email);
    }

}
