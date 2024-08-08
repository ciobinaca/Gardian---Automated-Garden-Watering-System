package Repository;

import Model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertReppository extends JpaRepository<Alert, Long> {
}
