package com.example.backendapp.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="plant_profile")
public class PlantProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="profile_id")
    private Integer profileId;
    @Column(name="name")
    private String name;
    @Column(name="plant_id")
    private Integer plantId;
    @Column(name="location")
    private String location;
    @Column(name="last_watered")
    private Timestamp lastWatered;
    @Column(name="soil_moisture")
    private Double soilMoisture;
    @Column(name="light_level")
    private Double lightLevel;
    @Column(name="temperature")
    private Double temperature;
    @Column(name="humidity")
    private Double humidity;
    @Column(name="user_id")
    private Integer user_id;
    @Column(name="image")
    @Lob
    private String image;

}
