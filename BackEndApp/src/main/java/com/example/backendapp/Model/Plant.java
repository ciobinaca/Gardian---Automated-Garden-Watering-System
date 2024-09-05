package com.example.backendapp.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer plantId;
    private String name;
    private String lightRequirements;
    private Double temperatureMin;
    private Double temperatureMax;
    private String waterFrequency;
    private Double optimalSoilMoistureMin;
    private Double optimalSoilMoistureMax;
    private String soilType;
    private String image;

}
