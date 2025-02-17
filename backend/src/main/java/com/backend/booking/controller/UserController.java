package com.backend.booking.controller;


import com.backend.booking.dto.UserReqLoginDTO;
import com.backend.booking.dto.UserRequestDTO;
import com.backend.booking.dto.UserResLoginDTO;
import com.backend.booking.dto.UserResponseDTO;
import com.backend.booking.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private AuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    // Admin registration (requires adminEmail to validate)
    @PostMapping("/register-admin")
    public ResponseEntity<UserResponseDTO> registerAdmin(@RequestBody UserRequestDTO userDTO,
                                                         @RequestParam String adminEmail) {
        // Ensure only an existing admin can register a new admin
        UserResponseDTO adminUser = authService.getUserByEmail(adminEmail);
        if (adminUser == null || !adminUser.getRole().equals("ADMIN")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(null); // Unauthorized action
        }

        // Set role as ADMIN explicitly
        userDTO.setRole("ADMIN");
        UserResponseDTO response = authService.registerUser(userDTO);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> registerUser(@RequestBody UserRequestDTO userDTO) {
        // Register as a normal user (defaults to "USER" role)
        UserResponseDTO response = authService.registerUser(userDTO);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/login")
    public ResponseEntity<UserResLoginDTO> login(@RequestBody UserReqLoginDTO loginDTO) {
        UserResLoginDTO response = authService.login(loginDTO);
        return ResponseEntity.ok(response);
    }

}
