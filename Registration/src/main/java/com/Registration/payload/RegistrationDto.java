package com.Registration.payload;

import lombok.Data;

@Data
public class RegistrationDto {
    private long id;
    private String name;

    private String fatherName;

    private String mobile;
    private String college;
    private String email;
    private String username;
    private String Password;

}
