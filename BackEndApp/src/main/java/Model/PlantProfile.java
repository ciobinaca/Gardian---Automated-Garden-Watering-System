package Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.security.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class PlantProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileId;
    private String name;
//    @ManyToOne
//    @JoinColumn(name = "plant_id", referencedColumnName = "plantId")
    private Plant plant;
    private String location;
    private Timestamp lastWatered;
    private Double soilMoisture;
    private Double lightLevel;
    private Double temperature;
    private Double humidity;
}
