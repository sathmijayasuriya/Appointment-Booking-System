package com.backend.booking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserResLoginDTO {
    private Long userId;
    private String name;
    private String email;
    private String phone;
    private String role;
    private LocalDateTime createdAt;

}
