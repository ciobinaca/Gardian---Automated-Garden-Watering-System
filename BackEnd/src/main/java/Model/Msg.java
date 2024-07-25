package Model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.security.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Msg {

    private String message;
    private String username;

    @CreationTimestamp
    private Timestamp created;

    @Enumerated(EnumType.STRING)
    private MsgType messageType;

}
