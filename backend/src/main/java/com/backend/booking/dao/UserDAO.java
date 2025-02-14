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
    public Long findUserIdById(Long userId) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_USER_BY_ID, Long.class, userId);
        } catch (EmptyResultDataAccessException e) {
            return null; // User not found
        }
    }
    public String findUserRoleByEmail(String email) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_BY_MAIL, String.class, email);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }


}
