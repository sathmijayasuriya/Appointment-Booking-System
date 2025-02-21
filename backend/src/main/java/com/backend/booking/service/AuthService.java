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
        // Check if the email already exists in the system
        String existingEmail = userDAO.findUserPasswordByEmail(userDTO.getEmail());
        if (existingEmail != null) {
            throw new IllegalArgumentException("Email already registered.");
        }

        String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDAO.registerUser(userDTO, hashedPassword);        // Store user details in DB
        return userDAO.findUserByEmail(userDTO.getEmail());   // Retrieve and return the stored user details

    }

    // Authenticate login
    public UserResLoginDTO login(UserReqLoginDTO loginDTO) {
        String storedHashedPassword = userDAO.findUserPasswordByEmail(loginDTO.getEmail());

        if (storedHashedPassword == null) {
            throw new IllegalArgumentException("Invalid email or password.");
        }

        // Compare entered plain password with stored hashed password using BCrypt
        if (!passwordEncoder.matches(loginDTO.getPassword(), storedHashedPassword)) {
            throw new IllegalArgumentException("Invalid email or password.");
        }

        // Fetch user details for response (excluding password)
        UserResponseDTO user = userDAO.findUserByEmail(loginDTO.getEmail());

        // Return login response with user details
        return new UserResLoginDTO(
                user.getUserId(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRole(),
                user.getCreatedAt()
        );
    }
    public UserResponseDTO getUserByEmail(String email) {
        return userDAO.findUserByEmail(email);
    }
    public boolean isAdmin(String email) {
        String role = userDAO.findUserRoleByEmail(email);
        return "ADMIN".equals(role);
    }

}
