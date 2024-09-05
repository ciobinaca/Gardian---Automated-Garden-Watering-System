package com.example.backendapp.Service;

import com.example.backendapp.Model.Plant;
import com.example.backendapp.Repository.PlantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlantServiceImplementation implements PlantService{
 private final PlantRepository plantRepository;

 @Override
 public Plant fetchPlantById(Long plantId) {
  return plantRepository.findById(plantId).get();
 }
}
