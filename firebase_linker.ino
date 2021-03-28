#include <Arduino_JSON.h>
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#define Wifi_ssid ""
#define Wifi_password ""
#define FIREBASE_HOST ""
#define FIREBASE_AUTH ""
StaticJsonBuffer<200> jsonBuffer;

 
void setup() {

  //Wifi setup 
  Serial.begin(9600);
  delay(1000);
  WiFi.begin(Wifi_ssid, Wifi_password);
  Serial.print("Connecting to ");
  Serial.print(Wifi_ssid);
  while (WiFi.status()!= WL_CONNECTED)
  { 
    Serial.print(".");
    delay(1000);
    
    }
  Serial.print("Connected to"); 
  Serial.println(WiFi.localIP());
  
 //FB DatabaseSetup 
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);


  
  //pin setup 
  pinMode(4, INPUT_PULLUP);
}

void loop() {

  int pinVal=digitalRead(4);

  
//  delay(10);
  if (pinVal==HIGH){
    Serial.println("On");
    Firebase.setString("/OpenDetect", "On");
 
  

  if (Firebase.failed()) 
    {
 
      Serial.print("pushing /logs failed:");
      Serial.println(Firebase.error()); 
      return;
  }
  
}
