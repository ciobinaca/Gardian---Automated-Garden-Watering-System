package com.example.backendapp.Service;

import com.example.backendapp.Model.Plant;

public interface PlantService {

    Plant fetchplantById(Long plantId);
    
}
