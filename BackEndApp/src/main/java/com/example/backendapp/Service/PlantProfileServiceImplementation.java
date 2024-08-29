package com.example.backendapp.Service;

import com.example.backendapp.Model.PlantProfile;
import com.example.backendapp.Repository.PlantProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PlantProfileServiceImplementation implements PlantProfileService{
    private final PlantProfileRepository plantProfileRepository;

    @Override
    public PlantProfile createPlantProfile(PlantProfile plantProfile) {
        return plantProfileRepository.save(plantProfile);
    }

    @Override
    public List<PlantProfile> fetchPlantProfileList() {
        return (List<PlantProfile>) plantProfileRepository.findAll();
    }

    @Override
    public PlantProfile updatePlantProfile(PlantProfile plantProfile, Long plantProfileId) {
        PlantProfile plantPrDB = plantProfileRepository.findById(plantProfileId).get();

        //checking if the location field in the plantProfile object is not null and not an empty string
        if (Objects.nonNull(plantProfile.getLocation())
                && !"".equalsIgnoreCase(
                plantProfile.getLocation())) {
            plantPrDB.setLocation(
                    plantProfile.getLocation());
        }

        if (Objects.nonNull(
                plantProfile.getLastWatered())
                && (plantProfile.getLastWatered()!=null)) {
            plantPrDB.setLastWatered(
                    plantProfile.getLastWatered());
        }

        if (Objects.nonNull(plantProfile.getName())
                && !"".equalsIgnoreCase(
                String.valueOf(plantProfile.getName()))) {
            plantPrDB.setName(
                    plantProfile.getName());
        }
            if (Objects.nonNull(plantProfile.getSoilMoisture())
                    && !"".equalsIgnoreCase(
                    String.valueOf(plantProfile.getSoilMoisture()))) {
                plantPrDB.setSoilMoisture(
                        plantProfile.getSoilMoisture());
            }

            if (Objects.nonNull(plantProfile.getLightLevel())
                    && !"".equalsIgnoreCase(
                    String.valueOf(plantProfile.getLightLevel()))) {
                plantPrDB.setLightLevel(
                        plantProfile.getLightLevel());
            }

            if (Objects.nonNull(plantProfile.getTemperature())
                    && !"".equalsIgnoreCase(
                    String.valueOf(plantProfile.getTemperature()))) {
                plantPrDB.setTemperature(
                        plantProfile.getTemperature());
            }
            return plantProfileRepository.save(plantPrDB);
        }

    @Override
    public void deletePlantProfileById(Long plantProfileId) {
        plantProfileRepository.deleteById(plantProfileId);
    }
}
