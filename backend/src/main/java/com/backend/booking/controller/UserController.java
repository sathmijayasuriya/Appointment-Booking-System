package com.backend.MediEase.controller;


import com.backend.MediEase.constants.RestURI;
import com.backend.MediEase.dto.UserReqLoginDTO;
import com.backend.MediEase.dto.UserReqRegisterDTO;
import com.backend.MediEase.dto.UserResponseDTO;
import com.backend.MediEase.service.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class UserController {

    @Autowired
    private AuthService authService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    // Register User
    @PostMapping(RestURI.USER_REGISTER)
    public ResponseEntity<UserResponseDTO> registerUser(@RequestBody UserReqRegisterDTO dto) {
        dto.setUserType("User");
        System.out.println("request login "+dto.getName()+dto.getEmail());
        Optional<UserResponseDTO> response = authService.registerUser(dto);
        System.out.println("response : "+response);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(400).body(null)); // 400 if registration fails
    }

    // Register Pharmacist
    @PostMapping(RestURI.ADMIN_REGISTER)
    public ResponseEntity<UserResponseDTO> registerPharmacy(@RequestBody UserReqRegisterDTO dto) {
        dto.setUserType("Pharmacy");
        Optional<UserResponseDTO> response = authService.registerUser(dto);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(400).body(null)); // 400 if registration fails
    }
    // Login User
    @PostMapping(RestURI.USER_LOGIN)
    public ResponseEntity<UserResponseDTO> loginUser(@RequestBody UserReqLoginDTO dto) {
        Optional<UserResponseDTO> response = authService.loginUser(dto);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).body(null));
    }
//     Login Pharmacist
    @PostMapping(RestURI.ADMIN_LOGIN)
    public ResponseEntity<UserResponseDTO> loginPharmacy(@RequestBody UserReqLoginDTO dto) {
        Optional<UserResponseDTO> response = authService.loginUser(dto);
        return response.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).body(null));
    }

}
