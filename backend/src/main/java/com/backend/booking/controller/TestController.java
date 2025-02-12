package com.backend.booking.controller;


import com.backend.booking.constants.RestURI;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(RestURI.BASE_URL)
public class TestController {

    @GetMapping(RestURI.TEST)
    public String getTest(){
        return "test passed";
    }
}
