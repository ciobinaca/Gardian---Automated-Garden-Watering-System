package com.example.backendapp.Model;

import jakarta.persistence.*;
import lombok.*;

import java.security.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class PlantProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer profileId;
    private String name;
//    @OneToOne
//    @JoinColumn(name = "plant_id", referencedColumnName = "plantId")
//    private Plant plant;
    private Integer plant_id;
    private String location;
    private Timestamp lastWatered;
    private Double soilMoisture;
    private Double lightLevel;
    private Double temperature;
    private Double humidity;
    private Integer user_id;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    private User user;
}
