package com.Registration.controller;

import com.Registration.Repository.RegistrationRepository;
import com.Registration.entity.Registration;
import com.Registration.payload.LoginDto;
import com.Registration.payload.RegistrationDto;
import com.Registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/Api")
public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private RegistrationRepository registrationRepository;
    @PostMapping("/adminlogin")
    public ResponseEntity<Object> adminLogin(@RequestBody LoginDto loginDto) {
        Registration registration = registrationRepository.findByUsername(loginDto.getUsername()).get();

        if (loginDto.getPassword().equals(registration.getPassword()) ){
            return new ResponseEntity<>(registration, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/send")
    public  ResponseEntity<RegistrationDto> createReg(@RequestBody RegistrationDto registrationDto){
        return new ResponseEntity<>(registrationService.createReg(registrationDto), HttpStatus.CREATED);
    }
    @GetMapping("/get")
    public List<RegistrationDto> getAllPosts(){
        return registrationService.getAllRegistration();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRegistration(@PathVariable(name = "id") long id){
        registrationService.deletePostById(id);
        return new ResponseEntity<>("Post entity deleted successfully.", HttpStatus.OK);
    }

}
