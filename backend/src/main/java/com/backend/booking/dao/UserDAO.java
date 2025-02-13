package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Find user ID by email
    public Long findUserIdByEmail(String email) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_USER_BY_EMAIL, Long.class, email);
        } catch (EmptyResultDataAccessException e) {
            return null; // User not found
        }
    }

}
