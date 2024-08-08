package Service;

import Model.PlantProfile;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PlantProfileService {
    
    PlantProfile createPlantProfile(PlantProfile plantProfile);

    List<PlantProfile> fetchPlantProfileList();

    PlantProfile updatePlantProfile(PlantProfile plantProfile, Long plantProfileId);

    void deletePlantProfileById(Long plantProfileId);
}
