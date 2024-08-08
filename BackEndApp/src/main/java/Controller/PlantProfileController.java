package Controller;

import Model.PlantProfile;
import Service.PlantProfileService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
public class PlantProfileController {
    @Autowired
    private PlantProfileService plantProfileService;

    @PostMapping("/PlantProfiles")
    public PlantProfile savePlantProfile(
            @Valid @RequestBody PlantProfile plantProfile)
    {
        return plantProfileService.createPlantProfile(plantProfile);
    }
    
    @GetMapping("/PlantProfiles")
    public List<PlantProfile> fetchPlantProfileList()
    {
        return plantProfileService.fetchPlantProfileList();
    }
    
    @PutMapping("/PlantProfiles/{id}")
    public PlantProfile updatePlantProfile(@RequestBody PlantProfile plantProfile, @PathVariable("id") Long plantProfileId) {
        return plantProfileService.updatePlantProfile(
                plantProfile, plantProfileId);
    }

    @DeleteMapping("/PlantProfiles/{id}")
    public String deletePlantProfileById(@PathVariable("id") Long plantProfileId)
    {
        plantProfileService.deletePlantProfileById(
                plantProfileId);
        return "Deleted Successfully";
    }
    
}
