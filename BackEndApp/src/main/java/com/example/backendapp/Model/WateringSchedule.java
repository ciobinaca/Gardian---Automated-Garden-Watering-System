package com.example.backendapp.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Entity
    @Table(name = "watering_schedule")
    public class WateringSchedule {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long scheduleId;
        private Integer profile_id;
        private Timestamp nextWateringDate;
        private Timestamp lastWateringDate;
        private String status;  //'Pending', 'Completed'
}
