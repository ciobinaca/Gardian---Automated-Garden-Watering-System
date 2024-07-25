package MessageController;

import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.message.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j

public class MsgController {
    Logger logger = LoggerFactory.getLogger(MsgController.class);

    private final SimpMessagingTemplate messagingTemplate;


    public MsgController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }


    @MessageMapping("/chat/{to}")
    public void sendMessage(@DestinationVariable String to, Message message) {
        logger.info(message.toString() + " to " + to);
        messagingTemplate.convertAndSend("/topic/messages/" + to, message);
    }
}
