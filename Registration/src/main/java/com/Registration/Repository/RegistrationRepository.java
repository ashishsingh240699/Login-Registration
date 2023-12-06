package com.Registration.Repository;

import com.Registration.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {


    Optional<Registration> findByUsername(String username);

}
