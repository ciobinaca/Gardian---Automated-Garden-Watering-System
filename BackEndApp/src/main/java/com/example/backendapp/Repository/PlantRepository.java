package com.example.backendapp.Repository;

import com.example.backendapp.Model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {

}
