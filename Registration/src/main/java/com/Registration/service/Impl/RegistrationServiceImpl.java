package com.Registration.service.Impl;

import com.Registration.Repository.RegistrationRepository;
import com.Registration.entity.Registration;
import com.Registration.payload.RegistrationDto;
import com.Registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RegistrationServiceImpl implements RegistrationService {
@Autowired
private RegistrationRepository registrationRepository;
    @Override
    public RegistrationDto createReg(RegistrationDto registrationDto) {

        Registration registration = mapToEntity(registrationDto);
        Registration newReg = registrationRepository.save(registration);

        RegistrationDto registrationResponse = mapToDTO(newReg);
        return registrationResponse;

    }

    @Override
    public List<RegistrationDto> getAllRegistration() {
        List<Registration> posts = registrationRepository.findAll();
        return posts.stream().map(post -> mapToDTO(post)).collect(Collectors.toList());

    }

    @Override
    public void deletePostById(long id) {
        registrationRepository.deleteById(id);
    }

    // convert Entity into DTO
    private RegistrationDto mapToDTO(Registration registration){
        RegistrationDto registrationDto = new RegistrationDto();
        registrationDto.setId(registration.getId());
        registrationDto.setName(registration.getName());
        registrationDto.setFatherName(registration.getFatherName());
        registrationDto.setMobile(registration.getMobile());
        registrationDto.setEmail(registration.getEmail());
        registrationDto.setCollege(registration.getCollege());
        registrationDto.setUsername(registration.getUsername());
        registrationDto.setPassword(registration.getPassword());
        return registrationDto;
    }
    // convert DTO to entity
    private Registration mapToEntity(RegistrationDto registrationDto){
        Registration registration = new Registration();
        registration.setName(registrationDto.getName());
        registration.setFatherName(registrationDto.getFatherName());
        registration.setMobile(registrationDto.getMobile());
        registration.setCollege(registrationDto.getCollege());
        registration.setEmail(registrationDto.getEmail());
        registration.setUsername(registrationDto.getUsername());
        registration.setPassword(registrationDto.getPassword());
        return registration;
    }
}

