package com.example.backendapp.Service;

import com.example.backendapp.Model.PlantProfile;

import java.util.List;

public interface PlantProfileService {
    
    PlantProfile createPlantProfile(PlantProfile plantProfile);

    List<PlantProfile> fetchPlantProfileList();

    PlantProfile updatePlantProfile(PlantProfile plantProfile, Long plantProfileId);

    void deletePlantProfileById(Long plantProfileId);
}
