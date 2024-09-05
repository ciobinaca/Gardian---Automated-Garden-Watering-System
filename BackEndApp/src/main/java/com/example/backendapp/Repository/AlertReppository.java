package com.example.backendapp.Repository;

import com.example.backendapp.Model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertReppository extends JpaRepository<Alert, Long> {
}
