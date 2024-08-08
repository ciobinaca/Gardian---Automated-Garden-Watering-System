package Repository;

import Model.WateringSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WateringScheduleRepository extends JpaRepository<WateringSchedule, Long> {
}
