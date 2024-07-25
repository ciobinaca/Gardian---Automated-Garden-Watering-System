int led=2;
int lastPort=0;
void setup() {
  // put your setup code here, to run once:
pinMode(led,OUTPUT);
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  
}

String command;
void serialEvent() {
  if (Serial.available() > 0)
  {
    command = Serial.readStringUntil('\n');
    if (command.length() > 0) {
      command =  command.substring(0, command.length() - 1);

      //Serial.println(str);
      executeCommand(command);
    }
  }
}


void executeCommand(String command) {

  if (command == "blink") {
    digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led, LOW);
  }

}
