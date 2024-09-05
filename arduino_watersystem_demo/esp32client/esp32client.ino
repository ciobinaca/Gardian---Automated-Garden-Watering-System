#include <Arduino.h>
#include <Hash.h>

#include <WiFi.h>
#include <WebSocketsClient.h>
//#include "SoftwareSerial.h"
#include <ArduinoJson.h>

const char* wlan_ssid             = "xiomi";
const char* wlan_password         = "porc2232";
const char* ws_host               = "127.0.0.1";
const int   ws_port               = 8080;

String roomName = "lala";
String username = "esp32";


// ws://<ws_host>:<ws_port>/<ws_baseurl>/<3digits>/<randomstring>/websocket
const char* ws_baseurl            = "/chat/";

//SoftwareSerial Serial(34, 35); // RX, TX

// String softwareSerialData = "";
// char character;




WebSocketsClient webSocket;


void setup() {

  Serial.begin(115200);
  Serial.begin(9600);
 
  connectToWebSocket();

}

void loop() {
  connectToWifi();
  webSocket.loop();
  serialGetData();
}


void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {

  switch (type) {
    case WStype_DISCONNECTED:
      Serial.printf("[WSc] Disconnected!\n");
      break;
    case WStype_CONNECTED:
      {
        Serial.printf("[WSc] Connected to url: %s\n",  payload);
      }
      break;
    case WStype_TEXT:
      {

        String text = (char*) payload;
        if (payload[0] == 'b') {

          Serial.println("Heartbeat!");

        } else if (payload[0] == 'o') {

          // on open connection
          char *msg = "[\"CONNECT\\naccept-version:1.1,1.0\\nheart-beat:10000,10000\\n\\n\\u0000\"]";
          webSocket.sendTXT(msg);
          delay(1000);


        } else if (text.startsWith("a[\"CONNECTED")) {

          // subscribe to some channels
          subscribeToChannel(roomName);
          delay(1000);
          sendMessage(roomName, username, username + " connected", "SYSTEM");
         // sendMessage(roomName, username, "Hi there, this is esp32!", "USER");

        }
        else if (text.startsWith("a[\"MESSAGE")) {
          processJsonData(text);
        }
        break;
      }
    // case WStype_BIN:
    //   Serial.printf("[WSc] get binary length: %u\n", length);
    //   hexdump(payload, length);
    //   break;
  }

}

String str;
void serialGetData() {
  if (Serial.available() > 0)
  {
    str = Serial.readStringUntil('\n');
    if (str.length() > 0) {
      str =  str.substring(0, str.length() - 1);
      str.replace("\\", "");
      //Serial.println(str);
      sendMessage(roomName, username, String(str), "SENSOR_DATA");
    }
  }
  delay(50);

}

void subscribeToChannel(String _channelName) {
  String msg = "[\"SUBSCRIBE\\nid:sub-0\\ndestination:/topic/messages/" + _channelName + "\\n\\n\\u0000\"]";
  webSocket.sendTXT(msg);
}

void sendMessage(String _channelName, String _username, String _messageText, String _messageType) {
  String messageData =  "[\"SEND\\ndestination:/app/chat/" +
                        _channelName + "\\n\\n{\\\"username\\\":\\\"" +
                        _username + "\\\",\\\"message\\\":\\\"" +
                        _messageText + "\\\",\\\"messageType\\\":\\\"" +
                        _messageType + "\\\"}\\u0000\"]";
  Serial.println(messageData);
  webSocket.sendTXT(messageData);
}

void processJsonData(String _received) {
  String json = extractString(_received);
  json.replace("\\", "");
  Serial.println(json);
  DynamicJsonDocument doc(1024);
  deserializeJson(doc, json);
  JsonObject obj = doc.as<JsonObject>();
  String receivedMessage = obj["message"];
  String username = obj["username"];
  Serial.println(receivedMessage);
  // send data to another arduino
  Serial.println(receivedMessage);

}

String extractString(String _received) {
  char startingChar = '{';
  char finishingChar = '}';

  String tmpData = "";
  bool _flag = false;
  for (int i = 0; i < _received.length(); i++) {
    char tmpChar = _received[i];
    if (tmpChar == startingChar) {
      tmpData += startingChar;
      _flag = true;
    }
    else if (tmpChar == finishingChar) {
      tmpData += finishingChar;
      break;
    }
    else if (_flag == true) {
      tmpData += tmpChar;
    }
  }

  return tmpData;

}

void connectToWifi() {
  delay(500);
  Serial.print("Logging into WLAN: "); Serial.print(wlan_ssid); Serial.print(" ...");
  WiFi.mode(WIFI_STA);
  WiFi.begin(wlan_ssid, wlan_password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" success.");
  Serial.print("IP: "); Serial.println(WiFi.localIP());
}

void connectToWebSocket() {
  String socketUrl = ws_baseurl;
  socketUrl += random(0, 999);
  socketUrl += "/";
  socketUrl += random(0, 999999); // should be a random string, but this works (see )
  socketUrl += "/websocket";
  Serial.println(ws_host + String(ws_port) + socketUrl);

  // connect to websocket
  webSocket.begin(ws_host, ws_port, socketUrl);
  webSocket.setExtraHeaders();
  //    webSocket.setExtraHeaders("foo: I am so funny\r\nbar: not"); // some headers, in case you feel funny
  webSocket.onEvent(webSocketEvent);
}