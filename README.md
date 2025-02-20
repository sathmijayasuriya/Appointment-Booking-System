# Appointment Scheduling System

This is a full-stack appointment scheduling system built with **React.js** for the frontend and **Node.js** (or your backend framework) for the backend. The system allows users to book, reschedule, and cancel appointments, while admins can manage time slots and appointments.

## Features

### Admin Features
1. **Add Time Slots**: Admins can add time slots with date, start time, and end time.
2. **Edit Time Slots**: Admins can edit time slots. If the slot is already booked:
   - The old slot is marked as `INACTIVE`.
   - The appointment is updated with the new slot ID and marked as `PENDING_RESCHEDULE`.
3. **View All Appointments**: Admins can view all appointments with user and booking details.
4. **Admin Registration**: Admins can register with explicit `ADMIN` role and dashboard access.

### User Features
1. **User Registration**: Users can register with a default `USER` role.
2. **Book Appointments**: Users can book appointments for themselves or others.
                          The form fields for name, email, and contact number are pre-filled with the logged-in user's details by default.
                          Users can modify these fields if they are booking the appointment for someone else
3. **View Appointments**: Users can view their own appointments.
4. **Cancel Appointments**: Users can cancel their appointments, which updates the corresponding time slot to `AVAILABLE`.

### Shared Features
1. **Secure Login**: A secure login process using hashed passwords for authentication.
2. **Role-Based Access**: Different routes and functionalities are accessible based on the user's role (`ADMIN` or `USER`).

## Database Schema

### Tables
1. **Users Table**:
   - `user_id`: Unique identifier for each user.
   - `name`: User's name.
   - `email`: User's email (unique).
   - `phone`: User's phone number.
   - `password_hash`: Hashed password for security.
   - `role`: User role (`ADMIN` or `USER`).
   - `created_at`: Timestamp of user creation.

2. **Time Slots Table**:
   - `slot_id`: Unique identifier for each time slot.
   - `date`: Date of the time slot.
   - `start_time`: Start time of the slot.
   - `end_time`: End time of the slot.
   - `status`: Slot status (`AVAILABLE`, `BOOKED`, or `INACTIVE`).
   - `created_at`: Timestamp of slot creation.

3. **Appointments Table**:
   - `appointment_id`: Unique identifier for each appointment.
   - `user_id`: ID of the user who booked the appointment.
   - `slot_id`: ID of the time slot booked.
   - `status`: Appointment status (`BOOKED`, `CANCELLED`, `PENDING_RESCHEDULE`, or `RESCHEDULED`).
   - `previous_slot_id`: ID of the old time slot (used when rescheduling).
   - `booking_for_name`: Name of the person the appointment is booked for.
   - `booking_for_email`: Email of the person the appointment is booked for.
   - `booking_for_contact`: Contact number of the person the appointment is booked for.
   - `created_at`: Timestamp of appointment creation.

## API Endpoints

### Auth Routes
- **POST api/register**: Register a new user (default role: `USER`).
- **POST /auth/login**: Login for users and admins.

### Admin Routes
- **POST api/addTimeSlot**: Add a new time slot.
- **PUT api/{slotId}**: Edit an existing time slot.
- **GET api/getAllSlots**: Get all appointments.
- **POST api/register-admin{adminEmail}**: Register a new admin (requires explicit `ADMIN` role).

### User Routes
- **POST api/book**: Book an appointment.
- **GET api/user/allAppointments**: Get all appointments for the logged-in user.
- **PUT /cancelAppointment/{appointmentId}: Cancel an appointment.

## Frontend Tools
- **React.js**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Redux**: For state management.
- **Material UI**: For designing the user interface.
- **React-Toastify**: For displaying notifications.

## Backend: Spring Boot, JDBC

## Setup Instructions

## **Project Setup**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Set up the database:
   - Create a MySQL database named `booking`.
   - Update the database configuration in `application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/booking
     spring.datasource.username=<your-db-username>
     spring.datasource.password=<your-db-password>

     spring.jpa.hibernate.ddl-auto=update
     spring.jpa.show-sql=true
     ```

3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. Access the application:
   - Base URL: `http://localhost:8080/api`


### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
