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
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alertId;

    @ManyToOne
    @JoinColumn(name = "profile_id", referencedColumnName = "profileId")
    private PlantProfile plantProfile;

    private String alertType;
    private String alertMessage;
    private Timestamp alertDate;
    private Boolean resolved = false;

}