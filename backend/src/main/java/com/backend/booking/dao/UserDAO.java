package com.backend.booking.dao;

import com.backend.booking.constants.SQLConstants;
import com.backend.booking.dto.UserRequestDTO;
import com.backend.booking.dto.UserResLoginDTO;
//import com.backend.booking.dto.UserResponseDTO;
import com.backend.booking.dto.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

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
    public Long findUserIdByEmail(String email) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_BY_MAIL_USER, Long.class, email);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    // Register a new user/admin
    public void registerUser(UserRequestDTO userDTO, String hashedPassword) {
        jdbcTemplate.update(SQLConstants.INSERT_USER,
                userDTO.getName(), userDTO.getEmail(), userDTO.getPhone(), hashedPassword, userDTO.getRole());
    }

    // Find user by email
    public UserResponseDTO findUserByEmail(String email) {
        return jdbcTemplate.queryForObject(SQLConstants.FIND_USER_BY_EMAIL, new UserRowMapper(), email);
    }

    // Authenticate login (returns UserResLoginDTO)
    public UserResLoginDTO authenticateUser(String email, String password) {
        try {
            return jdbcTemplate.queryForObject(SQLConstants.FIND_USER_BY_EMAIL_AND_PASSWORD, new UserResLoginRowMapper(), email, password);
        } catch (EmptyResultDataAccessException e) {
            return null; // Return null if login fails
        }
    }


    // RowMapper for UserResponseDTO
    private static class UserRowMapper implements RowMapper<UserResponseDTO> {
        @Override
        public UserResponseDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new UserResponseDTO(
                    rs.getLong("user_id"),
                    rs.getString("name"),
                    rs.getString("email"),
                    rs.getString("phone"),
                    rs.getString("role"),
                    rs.getTimestamp("created_at").toLocalDateTime()
            );
        }
    }
    private static class UserResLoginRowMapper implements RowMapper<UserResLoginDTO> {
        @Override
        public UserResLoginDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new UserResLoginDTO(
                    rs.getLong("user_id"),
                    rs.getString("name"),
                    rs.getString("email"),
                    rs.getString("phone"),
                    rs.getString("role"),
                    rs.getTimestamp("created_at").toLocalDateTime()
            );
        }
    }

}
