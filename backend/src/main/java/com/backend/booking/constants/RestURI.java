package com.backend.booking.constants;

public class RestURI {

    public static final String TEST = "/test";
    public static final String BASE_URL = "/api";
    public static final String USER_REGISTER = "/auth/user/register";
    public static final String USER_LOGIN = "/auth/login";
    public static final String ADMIN_REGISTER = "/auth/admin/register";

    //time slots api
    public static final String ADD_TIME_SLOT = "/addTimeSlot";
    public static final String UPDATE_SLOT = "/{slotId}";
    public static final String GET_ALL_SLOTS = "/getAllSlots";


}
