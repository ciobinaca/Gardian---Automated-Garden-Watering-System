package com.example.backendapp.Controller;

import com.example.backendapp.Model.Plant;
import com.example.backendapp.Service.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class PlantController {

    private final PlantService plantService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/Plant/{id}")
    public Plant fetchPlantById(@PathVariable("id") Long plantId)
    {
        Plant plant = plantService.fetchPlantById(plantId);
        return plant;
    }
}
