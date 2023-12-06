package com.Registration.service;

import com.Registration.entity.Registration;
import com.Registration.payload.RegistrationDto;

import java.util.List;

public interface RegistrationService {

    RegistrationDto createReg(RegistrationDto registrationDto);

    List<RegistrationDto> getAllRegistration();

    void deletePostById(long id);
}
