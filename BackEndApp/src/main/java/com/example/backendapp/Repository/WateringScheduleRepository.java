package com.example.backendapp.Repository;

import com.example.backendapp.Model.WateringSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WateringScheduleRepository extends JpaRepository<WateringSchedule, Long> {
}
