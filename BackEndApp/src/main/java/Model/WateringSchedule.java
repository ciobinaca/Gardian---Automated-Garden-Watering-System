package Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
    @Table(name = "watering_schedule")
    public class WateringSchedule {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long scheduleId;

        @ManyToOne
        @JoinColumn(name = "profile_id", referencedColumnName = "profileId")
        private PlantProfile plantProfile;

        private Timestamp nextWateringDate;
        private Timestamp lastWateringDate;
        private String status;  //'Pending', 'Completed'
}
