package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserRequestDTO {
    private String name;
    private String email;
    private String phone;
    private String password;
    private String role;  // "ADMIN" or "USER"
}
