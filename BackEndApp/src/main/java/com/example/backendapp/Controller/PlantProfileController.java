package com.example.backendapp.Controller;

import com.example.backendapp.Model.PlantProfile;
import com.example.backendapp.Service.PlantProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class  PlantProfileController {

    private final PlantProfileService plantProfileService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/PlantProfiles/{id}")
    public PlantProfile fetchPlantProfileById(@PathVariable("id") Long plantProfileId)
    {
        PlantProfile plant = plantProfileService.fetchPlantProfileById(plantProfileId);
        return plant;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/PlantProfiles")
    public PlantProfile savePlantProfile(
         @RequestBody PlantProfile plantProfile)
    {
        return plantProfileService.createPlantProfile(plantProfile);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/PlantProfiles")
    public List<PlantProfile> fetchPlantProfileList()
    {
        List<PlantProfile> profiles= plantProfileService.fetchPlantProfileList();
        System.out.println(profiles);
        return profiles;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/PlantProfiles/{id}")
    public PlantProfile updatePlantProfile(@RequestBody PlantProfile plantProfile, @PathVariable("id") Long plantProfileId) {
        return plantProfileService.updatePlantProfile(
                plantProfile, plantProfileId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/PlantProfiles/{id}")
    public String deletePlantProfileById(@PathVariable("id") Long plantProfileId)
    {
        plantProfileService.deletePlantProfileById(
                plantProfileId);
        return "Deleted Successfully";
    }
    
}
